import tailwindcss from "@tailwindcss/vite"
import { devtools } from "@tanstack/devtools-vite"

import { tanstackRouter } from "@tanstack/router-plugin/vite"

import viteReact from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const config = defineConfig({
	server: {
		port: 8080,
		proxy: {
			// Forward /api/* to the backend (which serves routes without the /api prefix),
			// so the browser only talks to this origin and CORS doesn't apply.
			"^/api/": {
				target: "http://localhost:3000",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
			// Swagger JSON used by orval codegen
			"/api-json": {
				target: "http://localhost:3000",
				changeOrigin: true,
			},
		},
	},
	resolve: { tsconfigPaths: true },
	plugins: [
		devtools(),
		tailwindcss(),
		tanstackRouter({ target: "react", autoCodeSplitting: true }),
		viteReact(),
	],
})

export default config
