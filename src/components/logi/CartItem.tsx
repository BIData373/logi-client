import { cn } from "cn"
import { Repeat, Trash2 } from "lucide-react"
import type { CartItemDto } from "#/api/model"
import { Button } from "#/components/ui/button"
import { Card } from "#/components/ui/card"
import { Separator } from "#/components/ui/separator"
import { OrderLineItem } from "./OrderLineItem"
import { QuantityStepper } from "./QuantityStepper"

interface CartItemProps {
	cartItem: CartItemDto
	onVariantChange?: (label: string, value: string) => void
	onQuantityChange?: (quantity: number) => void
	onRemove?: () => void
	onReplaceVariant?: () => void
	className?: string
}

export function CartItem({
	cartItem,
	onQuantityChange,
	onRemove,
	onReplaceVariant,
	className,
}: CartItemProps) {
	return (
		<Card className={cn(className)}>
			<OrderLineItem variant={cartItem.variant} />
			<Separator />
			<div className="flex items-center justify-between p-4">
				<div className="flex items-center gap-2">
					<Button variant="link-destructive" onClick={onRemove}>
						<Trash2 />
						הסר
					</Button>
					<Button variant="ghost" onClick={onReplaceVariant}>
						<Repeat />
						החלף דגם
					</Button>
				</div>
				<QuantityStepper
					defaultValue={cartItem.quantity}
					onValueChange={onQuantityChange}
				/>
			</div>
		</Card>
	)
}
