import { cn } from "cn"
import type { ComponentProps } from "react"
import { Badge } from "#/components/ui/badge"

interface ProductCardProps extends Omit<ComponentProps<"button">, "children"> {
	title: string
	category?: string
	imageSrc?: string
	className?: string
}

export function ProductCard({
	title,
	category,
	imageSrc,
	className,
	...props
}: ProductCardProps) {
	return (
		<button
			type="button"
			className={cn(
				"flex flex-col rounded-lg border border-border bg-card p-1.5 shadow-card",
				className,
			)}
			{...props}
		>
			<div className="relative aspect-square overflow-hidden rounded-md bg-secondary">
				{imageSrc && (
					<img src={imageSrc} alt={title} className="object-cover size-full" />
				)}
			</div>
			<div className="flex flex-1 flex-col items-start gap-2 px-1.5 pt-2.5 pb-2">
				{category && (
					<Badge className="bg-green-100 text-green-800">{category}</Badge>
				)}
				<h3 className="line-clamp-2 text-[15px] leading-[22px] font-medium">
					{title}
				</h3>
			</div>
		</button>
	)
}
