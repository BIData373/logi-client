import { createFileRoute } from "@tanstack/react-router"
import PageLayout from "src/components/shared/PageLayout"

export const Route = createFileRoute("/user")({
	component: UserPage,
})

function UserPage() {
	return (
		<PageLayout>
			<div>UserPage</div>
		</PageLayout>
	)
}
