import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 border border-transparent font-semibold whitespace-nowrap transition-colors outline-none select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-[18px]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-hover",
        brand: "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-hover",
        secondary: "bg-secondary text-secondary-foreground hover:bg-border active:bg-border",
        outline: "border-input bg-card text-foreground hover:bg-secondary active:bg-secondary",
        ghost: "text-foreground hover:bg-secondary active:bg-secondary",
        link: "h-auto rounded-none border-0 p-0 text-primary-strong hover:underline underline-offset-4",
        success: "bg-success text-white hover:bg-success/90 active:bg-success/90",
        "destructive-soft":
          "bg-destructive-soft text-destructive-strong hover:bg-destructive/10 active:bg-destructive/10",
        destructive: "bg-destructive text-white hover:bg-destructive-strong active:bg-destructive-strong",
        "link-destructive":
          "h-auto rounded-none border-0 p-0 text-destructive-strong hover:underline underline-offset-4",
      },
      size: {
        sm: "h-8 rounded-sm px-3 text-sm",
        default: "h-10 rounded-md px-4 text-sm",
        lg: "h-12 rounded-md px-5 text-base [&_svg:not([class*='size-'])]:size-[22px]",
        icon: "size-10 rounded-md",
        "icon-sm": "size-8 rounded-sm",
        "icon-lg": "size-12 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Button, buttonVariants }
