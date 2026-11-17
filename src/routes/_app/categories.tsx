import { createFileRoute } from "@tanstack/react-router"
import CategoriesLayout from "#/components/layout/CategoriesLayout"
import { pageTitle } from "#/consts/pages"

export const Route = createFileRoute("/_app/categories")({
	component: CategoriesLayout,
	head: () => ({ meta: [{ title: pageTitle("/categories") }] }),
})
