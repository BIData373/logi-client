{
  inputs = {
    flake-parts.url = "github:hercules-ci/flake-parts";
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs =
    inputs@{
      nixpkgs,
      flake-parts,
      ...
    }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [
        "x86_64-linux"
        "aarch64-linux"
      ];

      perSystem =
        { system, ... }:
        let
          pkgs = import nixpkgs {
            inherit system;
            config.allowUnfreePredicate = pkg: builtins.elem (nixpkgs.lib.getName pkg) [ "claude-code" ];
          };
        in
        {
          devShells.default = pkgs.mkShell {
            buildInputs = with pkgs; [
              nodejs
              bun
              typescript-language-server
              vscode-langservers-extracted # CSS, Html, JSON language servers
              tailwindcss-language-server
              claude-code
            ];
          };
        };
    };
}
