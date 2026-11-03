import { createFileRoute } from "@tanstack/react-router"
import PageLayout from "src/components/shared/PageLayout"

export const Route = createFileRoute("/orders")({
	component: OrdersPage,
})

function OrdersPage() {
	return (
		<PageLayout>
			<div>OrdersPage</div>
		</PageLayout>
	)
}
