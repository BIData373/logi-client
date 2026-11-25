import { createFileRoute } from "@tanstack/react-router"
import CartLayout from "#/components/layout/CartLayout"

export const Route = createFileRoute("/cart")({
	component: CartLayout,
	head: () => ({
		meta: [
			{
				title: "הגעלה שלי | לוגי",
			},
		],
	}),
})
