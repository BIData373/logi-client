import { createFileRoute, Outlet } from "@tanstack/react-router"
import { BottomNav } from "#/components/logi/BottomNav"

export const Route = createFileRoute("/_app")({
	component: AppLayout,
})

function AppLayout() {
	return (
		<div className="flex h-screen flex-col" dir="rtl">
			<main className="flex-1 overflow-scroll">
				<Outlet />
			</main>
			<BottomNav />
		</div>
	)
}
