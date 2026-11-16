import { cn } from "cn"
import { Minus, Plus, type LucideIcon } from "lucide-react"
import { useState } from "react"
import { Button } from "#/components/ui/button"

interface QuantityStepperProps {
	value?: number
	defaultValue?: number
	min?: number
	max?: number
	onValueChange?: (value: number) => void
	className?: string
}

export function QuantityStepper({
	value,
	defaultValue = 1,
	min = 1,
	max = 99,
	onValueChange,
	className,
}: QuantityStepperProps) {
	const [inner, setInner] = useState(defaultValue)
	const current = value ?? inner

	const set = (next: number) => {
		const clamped = Math.max(min, Math.min(max, next))
		if (value === undefined) setInner(clamped)
		onValueChange?.(clamped)
	}

	return (
		<div
			dir="ltr"
			className={cn(
				"inline-flex h-10 items-center gap-1 rounded-full bg-secondary p-1",
				className,
			)}
		>
			<QuantityStepperButton
				icon={Plus}
				onClick={() => set(current + 1)}
				disabled={current >= max}
			/>
			<span
				aria-live="polite"
				className="min-w-8 text-center font-semibold tabular-nums"
			>
				{current}
			</span>
			<QuantityStepperButton
				icon={Minus}
				onClick={() => set(current - 1)}
				disabled={current <= min}
			/>
		</div>
	)
}

// stepper button
interface QuantityStepperButtonProps {
	icon: LucideIcon
	onClick: () => void
	disabled?: boolean
}

function QuantityStepperButton({
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
