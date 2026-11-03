import { House, LayoutGrid, Truck, User } from "lucide-react"
import type { ReactNode } from "react"

export interface Page {
	icon: ReactNode
	label: string
	href: string
}

export const PAGES: Page[] = [
	{
		icon: <House />,
		label: "דף הבית",
		href: "/",
	},
	{
		icon: <LayoutGrid />,
		label: "קטגוריות",
		href: "/categories",
	},
	{
		icon: <Truck />,
		label: "ההזמנות שלי",
		href: "/orders",
	},
	{
		icon: <User />,
		label: "האיזור האישי",
		href: "/user",
	},
]
