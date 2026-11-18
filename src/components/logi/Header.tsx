import { cn } from "cn"
import { ChevronRight, Menu } from "lucide-react"
import type { ReactNode } from "react"
import IconButton from "./IconButton"
import { useCanGoBack, useRouter } from "@tanstack/react-router"

interface AppHeaderProps {
	variant?: "home" | "back"
	title: string
	logoSrc?: string
	cartCount?: number
	notificationCount?: number
	actions?: ReactNode
	onMenu?: () => void
	className?: string
}

export function Header({
	variant = "home",
	title,
	logoSrc,
	actions,
	onMenu,
	className,
}: AppHeaderProps) {
	const isHome = variant === "home"

	const canGoBack = useCanGoBack()
	const router = useRouter()

	function handleGoBack() {
		if (canGoBack) {
			router.history.back()
		}
	}

	const start = (
		<div className="flex min-w-0 items-center gap-1">
			{isHome ? (
				<IconButton aria-label="תפריט" onClick={onMenu} icon={Menu} />
			) : (
				<IconButton
					icon={ChevronRight}
					aria-label="חזרה"
					disabled={!canGoBack}
					onClick={handleGoBack}
				/>
			)}
			<h1 className="text-nowrap text-xl leading-7 font-semibold">{title}</h1>
		</div>
	)

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
			<div className="flex items-center justify-self-end">{actions}</div>
		</header>
	)
}
