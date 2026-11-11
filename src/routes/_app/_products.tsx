import { createFileRoute } from "@tanstack/react-router"
import { pageTitle } from "#/consts/pages"

export const Route = createFileRoute("/_app/_products")({
	component: ProductsLayout,
	head: () => ({
		meta: [{ title: pageTitle("/") }],
	}),
})

function ProductsLayout() {
	return <div></div>
}
