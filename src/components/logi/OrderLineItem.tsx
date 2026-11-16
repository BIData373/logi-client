import { cn } from "cn"
import { Thumb } from "./Thumb"

export interface OrderLineItemProps {
	title: string
	imageSrc?: string
	quantity?: number
	className?: string
}

export function OrderLineItem({
	title,
	imageSrc,
	quantity,
	className,
}: OrderLineItemProps) {
	return (
		<div className={cn("flex items-center gap-3", className)}>
			<Thumb src={imageSrc} />
			<div className="flex min-w-0 flex-col gap-1">
				<h3 className="text-base leading-[22px] font-medium">{title}</h3>
				{quantity && (
					<span className="text-sm leading-5 text-muted-foreground">
						כמות: <span className="tabular-nums">{quantity}</span>
					</span>
				)}
			</div>
		</div>
	)
}
