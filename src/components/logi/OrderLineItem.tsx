import { cn } from "cn"

export interface OrderLineItemProps {
	title: string
	imageSrc?: string
	quantity?: number
	className?: string
}

export function Thumb({ src }: { src?: string }) {
	return (
		<span className="flex size-[72px] shrink-0 items-center justify-center overflow-hidden rounded-sm bg-secondary m-2">
			{src && <img src={src} alt="" className="size-full object-cover" />}
		</span>
	)
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
