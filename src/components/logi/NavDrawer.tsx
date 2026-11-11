import { useLocation, useNavigate } from "@tanstack/react-router"
import { cn } from "cn"
import { Check } from "lucide-react"
import { PAGES } from "#/consts/pages"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "../ui/drawer"
import { Separator } from "../ui/separator"

interface NavDrawerProps {
	open?: boolean
	onOpenChange(open: boolean): void
}

export default function NavDrawer({ open, onOpenChange }: NavDrawerProps) {
	const navigate = useNavigate()
	const location = useLocation()

	return (
		<Drawer swipeDirection="right" open={open} onOpenChange={onOpenChange}>
			<DrawerContent className="shadow-raised">
				<DrawerHeader
					className="flex-row items-center gap-3 px-4 py-5"
					dir="rtl"
				>
					<img
						src="/373.png"
						alt=""
						className="size-12 rounded-full border border-border bg-card object-contain"
					/>
					<DrawerTitle className="text-xl leading-7 font-semibold">
						שם היחידה כאן
					</DrawerTitle>
				</DrawerHeader>
				<Separator />
				<nav className="flex flex-col gap-1 p-2" dir="rtl">
					{PAGES.map((page) => {
						const active = location.href === page.href
						return (
							<button
								key={page.href}
								type="button"
								aria-current={active ? "page" : undefined}
								onClick={() => {
									onOpenChange(false)
									navigate({ to: page.href })
								}}
								className={cn(
									"flex h-12 items-center gap-3 rounded-md px-3 text-start text-[15px] font-medium outline-none transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring",
									active
										? "bg-accent text-foreground"
										: "text-muted-foreground",
								)}
							>
								<page.icon
									className={cn(
										"size-[22px] shrink-0",
										active && "text-primary-strong",
									)}
								/>
								<span className="flex-1">{page.label}</span>
								{active && (
									<Check
										className="size-5 text-primary-strong"
										strokeWidth={2}
									/>
								)}
							</button>
						)
					})}
				</nav>
			</DrawerContent>
		</Drawer>
	)
}
