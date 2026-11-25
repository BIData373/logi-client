import { cn } from "cn"
import { Button } from "#/components/ui/button"
import AddToCartButton from "./AddToCartButton"
import { QuantityStepper } from "./QuantityStepper"

interface AddCheckoutBarProps {
	variant: "add"
	variantId: number
	quantity?: number
	onQuantityChange?(quantity: number): void
}

interface SummaryCheckoutBarProps {
	variant: "summary"
	count: number
	countLabel?: string
	onAction(): void
}

type CheckoutBarProps = { className?: string } & (
	| AddCheckoutBarProps
	| SummaryCheckoutBarProps
)

export function CheckoutBar(props: CheckoutBarProps) {
	return (
		<div
			className={cn(
				"flex w-full shrink-0 items-center gap-4 border-t border-border bg-card px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-bar",
				props.className,
			)}
		>
			{props.variant === "add" ? (
				<>
					<AddToCartButton
						variantId={props.variantId}
						quantity={props.quantity ?? 1}
					/>
					<QuantityStepper
						max={10}
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
					<Button size="lg" className="flex-1" onClick={props.onAction}>
						בצע הזמנה
					</Button>
				</>
			)}
		</div>
	)
}
