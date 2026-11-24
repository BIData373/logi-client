import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider } from "@tanstack/react-router"
import ReactDOM from "react-dom/client"
import * as mockHandlers from "#/api/index.msw" // Orval generated MSW handlers
import { getRouter } from "./router"
import { USE_MOCK_API } from "./utils/env-utils"

const handlers = Object.values(mockHandlers).flatMap((getHandlers) =>
	getHandlers(),
)

const router = getRouter()
const queryClient = new QueryClient()

const rootElement = document.getElementById("app")

async function enableMocking() {
	if (USE_MOCK_API) {
		const { setupWorker } = await import("msw/browser")
		const worker = setupWorker(...handlers)

		return worker.start({
			onUnhandledFrame: "bypass",
		})
	}
}

if (rootElement && !rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement)

	enableMocking().then(() => {
		root.render(
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router}></RouterProvider>
			</QueryClientProvider>,
		)
	})
}
