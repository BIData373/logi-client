import { Toggle as TogglePrimitive } from "@base-ui/react/toggle"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const toggleVariants = cva(
  "group/toggle inline-flex items-center justify-center gap-1 whitespace-nowrap tabular-nums transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-transparent font-medium hover:bg-secondary data-pressed:bg-secondary disabled:opacity-50",
        outline:
          "border border-input bg-card font-medium text-foreground hover:bg-secondary data-pressed:border-foreground data-pressed:bg-foreground data-pressed:text-card data-pressed:hover:bg-foreground disabled:border-transparent disabled:bg-muted disabled:text-muted-foreground disabled:line-through",
      },
      size: {
        sm: "h-8 min-w-8 rounded-sm px-2.5 text-sm",
        default: "h-10 min-w-[52px] rounded-sm px-3 text-sm",
        lg: "h-12 min-w-12 rounded-md px-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant = "default",
  size = "default",
  ...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
