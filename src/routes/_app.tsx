import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router"
import { useState } from "react"
import { BottomNav } from "#/components/logi/BottomNav"
import { Header } from "#/components/logi/Header"
import NavDrawer from "#/components/logi/NavDrawer"
import { PAGES } from "#/consts/pages"

export const Route = createFileRoute("/_app")({
	component: AppLayout,
})

function AppLayout() {
	const location = useLocation()
	const title =
		PAGES.find((page) => page.href === location.href)?.label ?? "לוגי"

	const [drawerOpen, setDrawerOpen] = useState(false)

	return (
		<div className="flex h-screen flex-col" dir="rtl">
			<Header title={title} onMenu={() => setDrawerOpen(true)} />
			<NavDrawer onOpenChange={setDrawerOpen} open={drawerOpen} />

			<main className="flex-1 overflow-scroll">
				<Outlet />
			</main>
			<BottomNav />
		</div>
	)
}
