import { cn } from "cn"
import { Calendar } from "lucide-react"
import { Badge } from "#/components/ui/badge"
import { Card } from "#/components/ui/card"
import { Separator } from "#/components/ui/separator"
import { InfoRow } from "./InfoRow"
import { OrderLineItem, type OrderLineItemProps } from "./OrderLineItem"

interface OrderCardProps {
	item: OrderLineItemProps
	date: string
	statusLabel?: string
	className?: string
}

export function OrderCard({
	item,
	date,
	statusLabel,
	className,
}: OrderCardProps) {
	return (
		<Card className={cn(className)}>
			<div className="p-2">
				<OrderLineItem {...item} />
			</div>
			<Separator />
			<div className="flex flex-wrap items-center justify-between gap-2 p-4">
				<InfoRow icon={Calendar}>תאריך הזמנה: {date}</InfoRow>
				<Badge>{statusLabel}</Badge>
			</div>
		</Card>
	)
}
