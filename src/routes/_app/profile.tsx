import { createFileRoute } from "@tanstack/react-router"
import { pageTitle } from "#/consts/pages"

export const Route = createFileRoute("/_app/profile")({
	component: ProfileLayout,
	head: () => ({ meta: [{ title: pageTitle("/profile") }] }),
})

function ProfileLayout() {
	return <div></div>
}
