import { cn } from "cn"
import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

interface InfoRowProps {
	icon: LucideIcon
	children: ReactNode
	primary?: boolean
	className?: string
}

export function InfoRow({
	icon: Icon,
	children,
	primary,
	className,
}: InfoRowProps) {
	return (
		<div
			className={cn(
				"flex items-center gap-2 text-sm leading-5",
				primary ? "font-medium" : "text-muted-foreground",
				className,
			)}
		>
			<Icon className="size-[18px] shrink-0" strokeWidth={1.75} />
			<span>{children}</span>
		</div>
	)
}
