import { TanStackDevtools } from "@tanstack/react-devtools"
import { createRootRoute, HeadContent, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"

import NotFoundLayout from "#/components/layout/NotFoundLayout"
import "../styles.css"
import { IS_DEV } from "#/utils/env-utils"

export const Route = createRootRoute({
	component: RootComponent,
	notFoundComponent: NotFoundLayout,
})

function RootComponent() {
	return (
		<>
			<HeadContent />
			<Outlet />
			{IS_DEV && (
				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "TanStack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
			)}
		</>
	)
}
