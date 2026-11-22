import { cn } from "cn"
import { Bell, ChevronRight, Menu, ShoppingBag } from "lucide-react"
import type { ReactNode } from "react"
import IconButton from "./IconButton"

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
				<IconButton aria-label="תפריט" onClick={onMenu} icon={Menu} />
			) : (
				<IconButton icon={ChevronRight} aria-label="חזרה" onClick={onBack} />
			)}
			<h1 className="text-nowrap text-xl leading-7 font-semibold">{title}</h1>
		</div>
	)

	const end =
		actions ??
		(isHome ? (
			<>
				<IconButton aria-label="סל" onClick={onCartClick} icon={ShoppingBag} />
				<IconButton
					aria-label="התראות"
					onClick={onNotificationsClick}
					icon={Bell}
				/>
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
