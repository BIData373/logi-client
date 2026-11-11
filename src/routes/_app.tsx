import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router"
import { BottomNav } from "#/components/logi/BottomNav"
import { Header } from "#/components/logi/Header"
import { PAGES } from "#/consts/pages"

export const Route = createFileRoute("/_app")({
	component: AppLayout,
})

function AppLayout() {
	const location = useLocation()
	const title =
		PAGES.find((page) => page.href === location.href)?.label ?? "לוגי"

	return (
		<div className="flex h-screen flex-col" dir="rtl">
			<Header title={title} />
			<main className="flex-1 overflow-scroll">
				<Outlet />
			</main>
			<BottomNav />
		</div>
	)
}
