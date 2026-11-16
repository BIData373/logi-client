import { createFileRoute } from "@tanstack/react-router"
import ProductsLayout from "#/components/layout/ProductsLayout"
import { pageTitle } from "#/consts/pages"

export const Route = createFileRoute("/_app/_products")({
	component: ProductsLayout,
	head: () => ({
		meta: [{ title: pageTitle("/") }],
	}),
})
