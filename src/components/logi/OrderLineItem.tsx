import { cn } from "cn"
import type { OrderItemDto } from "#/api/model"
import { Thumb } from "./Thumb"

export interface OrderLineItemProps {
	item: OrderItemDto
	className?: string
}

export function OrderLineItem({ item, className }: OrderLineItemProps) {
	const variant = item.variant
	const product = variant.product
	const thumbImage = product.images[0]

	return (
		<div className={cn("flex items-center gap-3", className)}>
			{thumbImage && <Thumb src={thumbImage.url} />}
			<div className="flex min-w-0 flex-col">
				<h3 className="text-base font-medium">{product.name}</h3>
				{<h4 className="text-sm">{variant.name}</h4>}
				{
					<span className="text-sm leading-5 text-muted-foreground">
						כמות: <span className="tabular-nums">{999}</span>
					</span>
				}
			</div>
		</div>
	)
}
