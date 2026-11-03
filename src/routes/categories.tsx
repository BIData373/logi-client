import { createFileRoute } from "@tanstack/react-router"
import PageLayout from "src/components/shared/PageLayout"

export const Route = createFileRoute("/categories")({
	component: CategoriesPage,
})

function CategoriesPage() {
	return (
		<PageLayout>
			<div>CategoriesPage</div>
		</PageLayout>
	)
}
