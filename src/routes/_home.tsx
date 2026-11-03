import { createFileRoute, Outlet } from "@tanstack/react-router"
import HomePage from "src/components/HomePage"
import PageLayout from "src/components/shared/PageLayout"

export const Route = createFileRoute("/_home")({
	component: HomeLayout,
})

function HomeLayout() {
	return (
		<PageLayout>
			<HomePage />
			<Outlet />
		</PageLayout>
	)
}
