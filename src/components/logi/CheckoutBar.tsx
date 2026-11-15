import { cn } from "cn"
import { ShoppingCart } from "lucide-react"
import { Button } from "#/components/ui/button"
import { QuantityStepper } from "./QuantityStepper"

type CheckoutBarProps = {
	onAction?: () => void
	actionLabel?: string
	className?: string
} & (
	| {
			variant?: "summary"
			count: number
			countLabel?: string
	  }
	| {
			variant: "add"
			quantity?: number
			onQuantityChange?: (quantity: number) => void
	  }
)

export function CheckoutBar(props: CheckoutBarProps) {
	const { onAction, actionLabel, className } = props

	return (
		<div
			className={cn(
				"flex w-full shrink-0 items-center gap-4 border-t border-border bg-card px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-bar",
				className,
			)}
		>
			{props.variant === "add" ? (
				<>
					<Button size="lg" className="flex-1" onClick={onAction}>
						<ShoppingCart />
						{actionLabel ?? "הוסף לסל"}
					</Button>
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
						{actionLabel ?? "בצע הזמנה"}
					</Button>
				</>
			)}
		</div>
	)
}
