import { createRouter as createTanStackRouter } from "@tanstack/react-router"
import NotFoundLayout from "./components/layout/NotFoundLayout"
import { routeTree } from "./routeTree.gen"

export function getRouter() {
	const router = createTanStackRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0,
		defaultNotFoundComponent: NotFoundLayout,
	})

	return router
}

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof getRouter>
	}
}
