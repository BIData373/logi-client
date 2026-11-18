import {
	createFileRoute,
	Outlet,
	useLocation,
	useNavigate,
} from "@tanstack/react-router"
import { Bell, ShoppingBag } from "lucide-react"
import { useState } from "react"
import { BottomNav } from "#/components/logi/BottomNav"
import { Header } from "#/components/logi/Header"
import IconButton from "#/components/logi/IconButton"
import NavDrawer from "#/components/logi/NavDrawer"
import { PAGES } from "#/consts/pages"

export const Route = createFileRoute("/_app")({
	component: AppLayout,
})

function AppLayout() {
	const location = useLocation()
	const navigate = useNavigate()

	const title =
		PAGES.find((page) => page.href === location.href)?.label ?? "לוגי"

	const [drawerOpen, setDrawerOpen] = useState(false)

	function handleOpenCart() {
		navigate({
			to: `/cart/$cartId`,
			params: {
				cartId: "1",
			},
		})
	}

	return (
		<div className="flex h-screen flex-col" dir="rtl">
			<Header
				title={title}
				onMenu={() => setDrawerOpen(true)}
				actions={
					<>
						<IconButton icon={ShoppingBag} onClick={handleOpenCart} />
						<IconButton icon={Bell} />
					</>
				}
			/>
			<NavDrawer onOpenChange={setDrawerOpen} open={drawerOpen} />

			<main className="flex-1 overflow-scroll">
				<Outlet />
			</main>
			<BottomNav />
		</div>
	)
}
