import styled from "@emotion/styled"
import { TanStackDevtools } from "@tanstack/react-devtools"
import { createRootRoute, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { StrictMode } from "react"
import { Toaster } from "../components/ui/sonner"
import { TooltipProvider } from "../components/ui/tooltip"
import "../styles.css"
import { IS_DEV } from "../utils/env-utils"

export const Route = createRootRoute({
	component: RootComponent,
})

function RootComponent() {
	return (
		<StrictMode>
			<TooltipProvider>
				<AppShell>
					<PageContainer>
						<Outlet />
					</PageContainer>
				</AppShell>
			</TooltipProvider>
			<Toaster />
			{IS_DEV && (
				<TanStackDevtools
					config={{ position: "bottom-right" }}
					plugins={[
						{
							name: "TanStack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
			)}
		</StrictMode>
	)
}

const AppShell = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  isolation: isolate;
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  min-height: 0;
  background: var(--primary-foreground);
`
