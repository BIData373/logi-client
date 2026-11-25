import { cn } from "cn"
import type { VariantDto } from "#/api/model"
import { Thumb } from "./Thumb"

export interface OrderLineItemProps {
	variant: VariantDto
	quantity?: number
	className?: string
}

export function OrderLineItem({
	variant,
	quantity,
	className,
}: OrderLineItemProps) {
	const product = variant.product
	const thumbImage = product.images[0]

	return (
		<div className={cn("flex items-center gap-3", className)}>
			{thumbImage && <Thumb src={thumbImage.url} />}
			<div className="flex min-w-0 flex-col">
				<h3 className="text-base font-medium">{product.name}</h3>
				{<h4 className="text-sm">{variant.name}</h4>}
				{quantity && (
					<span className="text-sm leading-5 text-muted-foreground">
						כמות: <span className="tabular-nums">{quantity}</span>
					</span>
				)}
			</div>
		</div>
	)
}
