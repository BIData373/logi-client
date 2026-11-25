import type { LucideIcon } from "lucide-react"
import { Button } from "../ui/button"

interface QuantityStepperButtonProps {
	icon: LucideIcon
	onClick: () => void
	disabled?: boolean
}

export default function QuantityStepperButton({
	disabled,
	onClick,
	...props
}: QuantityStepperButtonProps) {
	return (
		<Button
			variant="ghost"
			size="icon-sm"
			aria-label="הפחת"
			className={"rounded-full bg-card shadow-xs hover:bg-card"}
			disabled={disabled}
			onClick={onClick}
		>
			<props.icon strokeWidth={2} className="size-4" />
		</Button>
	)
}
