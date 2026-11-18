import { createFileRoute } from "@tanstack/react-router"
import OrderCompletedLayout from "#/components/layout/OrderCompletedLayout"

export const Route = createFileRoute("/order-completed/$orderId")({
	component: OrderCompletedLayout,
	head: () => ({
		meta: [{ title: "סיכום הזמנה | לוגי" }],
	}),
})
