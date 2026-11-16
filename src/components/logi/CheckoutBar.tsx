import { cn } from "cn"
import { Button } from "#/components/ui/button"
import AddToCartButton from "./AddToCartButton"
import { QuantityStepper } from "./QuantityStepper"

interface CheckoutBarProps {
	onAction?: () => void
	className?: string
	variant: "add" | "summary"
	// for "add"
	quantity?: number
	onQuantityChange?: (quantity: number) => void
	// for "summary"
	count?: number
	countLabel?: string
}

export function CheckoutBar(props: CheckoutBarProps) {
	const { onAction, className } = props

	return (
		<div
			className={cn(
				"flex w-full shrink-0 items-center gap-4 border-t border-border bg-card px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-bar",
				className,
			)}
		>
			{props.variant === "add" ? (
				<>
					<AddToCartButton />
					<QuantityStepper
						max={5}
						defaultValue={props.quantity}
						onValueChange={props.onQuantityChange}
					/>
				</>
			) : (
				<>
					<div className="flex flex-col">
						<span className="text-sm leading-5 text-muted-foreground">
							{props.countLabel ?? "כמות מוצרים"}
						</span>
						<strong className="text-lg leading-[26px] font-semibold tabular-nums">
							{props.count}
						</strong>
					</div>
					<Button size="lg" className="flex-1" onClick={onAction}>
						בצע הזמנה
					</Button>
				</>
			)}
		</div>
	)
}
