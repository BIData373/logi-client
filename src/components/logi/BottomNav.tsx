import { useLocation, useNavigate } from "@tanstack/react-router"
import { cn } from "cn"
import { PAGES } from "#/consts/pages"

interface BottomNavProps {
	className?: string
}

export function BottomNav({ className }: BottomNavProps) {
	const location = useLocation()
	const navigate = useNavigate()

	return (
		<nav
			className={cn(
				"grid w-full shrink-0 border-t border-border bg-card px-2 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]",
				className,
			)}
			style={{ gridTemplateColumns: `repeat(${PAGES.length}, minmax(0, 1fr))` }}
		>
			{PAGES.map((page) => {
				const on = page.href === location.href

				return (
					<button
						key={page.href}
						type="button"
						aria-current={on ? "page" : undefined}
						onClick={() => navigate({ to: page.href })}
						className={cn(
							"flex flex-col items-center gap-1 rounded-md py-1 text-xs leading-4 font-medium outline-none transition-all focus-visible:ring-2 focus-visible:ring-ring",
							on ? "font-semibold text-foreground" : "text-muted-foreground",
						)}
					>
						<span
							className={cn(
								"flex h-[30px] w-14 items-center justify-center rounded-full transition-colors",
								on && "bg-primary-soft",
							)}
						>
							<page.icon
								className={cn("size-[22px]", on && "text-primary-strong")}
								strokeWidth={on ? 2 : 1.75}
							/>
						</span>
						<span>{page.label}</span>
					</button>
				)
			})}
		</nav>
	)
}
