import { Grid2x2, House, type LucideIcon, Truck, User } from "lucide-react"

interface Page {
	icon: LucideIcon
	label: string
	href: string
}

export const PAGES: Page[] = [
	{
		icon: House,
		label: "דף הבית",
		href: "/",
	},
	{
		icon: Grid2x2,
		label: "קטגוריות",
		href: "/categories",
	},
	{
		icon: Truck,
		label: "ההזמנות שלי",
		href: "/orders",
	},
	{
		icon: User,
		label: "האיזור האישי",
		href: "/profile",
	},
]

const APP_NAME = "לוגי"

/** Document title for a page, derived from PAGES so labels stay in one place. */
export function pageTitle(href: string): string {
	const label = PAGES.find((page) => page.href === href)?.label
	return label ? `${label} | ${APP_NAME}` : APP_NAME
}
