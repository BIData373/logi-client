import { RouterProvider } from "@tanstack/react-router"
import ReactDOM from "react-dom/client"
import { getLogiSawggerMock } from "#/api/index.msw"
import { getRouter } from "./router"
import { USE_MOCK_API } from "./utils/env-utils"

const router = getRouter()

const rootElement = document.getElementById("app")

async function enableMocking() {
	if (USE_MOCK_API) {
		const { setupWorker } = await import("msw/browser")
		const worker = setupWorker(...getLogiSawggerMock())

		return worker.start({
			onUnhandledFrame: "bypass",
		})
	}
}

if (rootElement && !rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement)

	enableMocking().then(() => {
		root.render(<RouterProvider router={router}></RouterProvider>)
	})
}
