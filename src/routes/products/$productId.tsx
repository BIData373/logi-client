import { createFileRoute } from "@tanstack/react-router"
import ProductLayout from "#/components/layout/ProductLayout"

export const Route = createFileRoute("/products/$productId")({
	component: ProductLayout,
	head: () => ({
		meta: [
			{
				title: "נעליי חיר צבאיות | לוגי",
			},
		],
	}),
})
