import { createFileRoute } from "@tanstack/react-router"
import { pageTitle } from "#/consts/pages"

export const Route = createFileRoute("/_app/categories")({
	component: CategoriesLayout,
	head: () => ({ meta: [{ title: pageTitle("/categories") }] }),
})

function CategoriesLayout() {
	return <div></div>
}
