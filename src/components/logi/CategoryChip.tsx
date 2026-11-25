import { cn } from "cn"
import { Plus } from "lucide-react"
import type { ComponentProps } from "react"

interface CategoryChipProps extends Omit<ComponentProps<"button">, "children"> {
	label: string
	imageSrc?: string
	active?: boolean
	plus?: boolean
	size?: "sm" | "lg"
}

export function CategoryChip({
	label,
	imageSrc,
	active = false,
	size = "sm",
	plus,
	className,
	...props
}: CategoryChipProps) {
	return (
		<button
			type="button"
			aria-pressed={active}
			className={cn(
				"group/chip flex flex-col items-center gap-2 outline-none",
				className,
			)}
			{...props}
		>
			<span
				className={cn(
					"flex items-center justify-center rounded-lg border bg-card transition-colors group-focus-visible/chip:ring-2 group-focus-visible/chip:ring-ring group-focus-visible/chip:ring-offset-2 overflow-clip",
					size === "lg" ? "size-26" : "h-8 w-19 rounded-full",
					active
						? "border-card-foreground border-2 bg-primary-soft"
						: "border-border",
					plus && "bg-primary-soft",
				)}
			>
				{imageSrc && (
					<img src={imageSrc} alt="" className={cn("size-full object-cover")} />
				)}
				{plus && <Plus className="text-primary-strong" />}
			</span>
			<span
				className={cn(
					"text-xs leading-4 font-medium text-foreground transition-all",
					active && "font-bold",
				)}
			>
				{label}
			</span>
		</button>
	)
}
