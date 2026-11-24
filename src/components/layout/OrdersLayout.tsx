import { useState } from "react"
import { useGetUserOrders } from "#/api"
import { OrderCard } from "../logi/OrderCard"
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs"

type TabKey = "done" | "pending" | "rejected"

export default function OrdersLayout() {
	const [activeTab, setActiveTab] = useState<TabKey>("pending")

	const { data: orders = [] } = useGetUserOrders({ id: 1 })
	const orderItems = orders.flatMap((order) => order.orderItems)

	return (
		<div className="flex flex-col gap-4 p-4">
			<Tabs
				value={activeTab}
				onValueChange={(value) => setActiveTab(value as TabKey)}
			>
				<TabsList>
					<TabsTrigger value="done">הסתיים</TabsTrigger>
					<TabsTrigger value="pending">בהזמנה</TabsTrigger>
					<TabsTrigger value="rejected">נדחה</TabsTrigger>
				</TabsList>
			</Tabs>
			<div className="flex flex-col gap-2">
				{orderItems.map((orderItem) => (
					<OrderCard item={orderItem} key={orderItem.id} />
				))}
			</div>
		</div>
	)
}
