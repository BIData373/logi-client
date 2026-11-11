import { cn } from "cn"
import { Bell, ChevronRight, Menu, ShoppingBag } from "lucide-react"
import type { ReactNode } from "react"
import { Button } from "#/components/ui/button"

const ICON_CLASS = "relative rounded-full [&_svg:not([class*='size-'])]:size-6"

interface AppHeaderProps {
	variant?: "home" | "back"
	title: string
	logoSrc?: string
	cartCount?: number
	notificationCount?: number
	actions?: ReactNode
	onMenu?: () => void
	onBack?: () => void
	onCartClick?: () => void
	onNotificationsClick?: () => void
	className?: string
}

export function Header({
	variant = "home",
	title,
	logoSrc,
	actions,
	onMenu,
	onBack,
	onCartClick,
	onNotificationsClick,
	className,
}: AppHeaderProps) {
	const isHome = variant === "home"

	const start = (
		<div className="flex min-w-0 items-center gap-1">
			{isHome ? (
				<Button
					variant="ghost"
					size="icon"
					aria-label="תפריט"
					onClick={onMenu}
					className={ICON_CLASS}
				>
					<Menu strokeWidth={1.75} />
				</Button>
			) : (
				<Button
					variant="ghost"
					size="icon"
					aria-label="חזרה"
					onClick={onBack}
					className={ICON_CLASS}
				>
					<ChevronRight strokeWidth={1.75} />
				</Button>
			)}
			<h1 className="text-nowrap text-xl leading-7 font-semibold">{title}</h1>
		</div>
	)

	const end =
		actions ??
		(isHome ? (
			<>
				<Button
					variant="ghost"
					size="icon"
					aria-label="סל"
					onClick={onCartClick}
					className={ICON_CLASS}
				>
					<ShoppingBag strokeWidth={1.75} />
				</Button>
				<Button
					variant="ghost"
					size="icon"
					aria-label="התראות"
					onClick={onNotificationsClick}
					className={ICON_CLASS}
				>
					<Bell strokeWidth={1.75} />
				</Button>
			</>
		) : null)

	return (
		<header
			className={cn(
				"h-14 w-full shrink-0 items-center border-b border-border bg-card px-2",
				isHome ? "grid grid-cols-[1fr_auto_1fr]" : "flex justify-between",
				className,
			)}
		>
			{start}
			{isHome && (
				<div className="flex size-9 items-center justify-center overflow-hidden rounded-full">
					{logoSrc && (
						<img
							src={logoSrc}
							alt="Logi"
							className="size-full object-contain"
						/>
					)}
				</div>
			)}
			<div className="flex items-center justify-self-end">{end}</div>
		</header>
	)
}
