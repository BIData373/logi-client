import { createFileRoute } from "@tanstack/react-router"
import OrdersLayout from "#/components/layout/OrdersLayout"
import { pageTitle } from "#/consts/pages"

export const Route = createFileRoute("/_app/orders")({
	component: OrdersLayout,
	head: () => ({ meta: [{ title: pageTitle("/orders") }] }),
})
