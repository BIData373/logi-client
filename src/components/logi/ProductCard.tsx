import { cn } from "cn"
import type { ComponentProps } from "react"
import type { ProductDto } from "#/api/model"
import { Badge } from "#/components/ui/badge"

interface ProductCardProps extends Omit<ComponentProps<"button">, "children"> {
	product: ProductDto
	className?: string
}

export function ProductCard({ product, ...props }: ProductCardProps) {
	const image = product.images[0]

	return (
		<button
			type="button"
			className={cn(
				"flex flex-col rounded-lg border border-border bg-card p-1.5 shadow-card",
				props.className,
			)}
			{...props}
		>
			<div className="relative aspect-square overflow-hidden rounded-md bg-secondary">
				{image && (
					<img
						src={image.url}
						alt={image.name}
						className="object-cover size-full"
					/>
				)}
			</div>
			<div className="flex flex-1 flex-col items-start gap-2 px-1.5 pt-2.5 pb-2">
				{<Badge className="bg-green-100 text-green-800">placeholder</Badge>}
				<h3 className="line-clamp-2 text-[15px] leading-[22px] font-medium">
					{product.name}
				</h3>
			</div>
		</button>
	)
}
