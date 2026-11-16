import { createFileRoute } from "@tanstack/react-router"
import AllProductsLayout from "#/components/layout/AllProductsLayout"
import { pageTitle } from "#/consts/pages"

export const Route = createFileRoute("/_app/_all-products")({
	component: AllProductsLayout,
	head: () => ({
		meta: [{ title: pageTitle("/") }],
	}),
})
