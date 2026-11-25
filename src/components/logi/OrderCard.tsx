import { cn } from "cn"
import { Calendar } from "lucide-react"
import type { OrderItemDto } from "#/api/model"
import { Badge } from "#/components/ui/badge"
import { Card } from "#/components/ui/card"
import { Separator } from "#/components/ui/separator"
import { InfoRow } from "./InfoRow"
import { OrderLineItem } from "./OrderLineItem"

interface OrderCardProps {
	item: OrderItemDto
	className?: string
}

export function OrderCard({ item, className }: OrderCardProps) {
	return (
		<Card className={cn(className)}>
			<div className="p-2">
				<OrderLineItem variant={item.variant} />
			</div>
			<Separator />
			<div className="flex flex-wrap items-center justify-between gap-2 p-4">
				<InfoRow icon={Calendar}>
					תאריך הזמנה: {new Date(item.createdAt).toLocaleDateString()}
				</InfoRow>
				<Badge>{item.status}</Badge>
			</div>
		</Card>
	)
}
