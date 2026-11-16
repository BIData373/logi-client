import type { LucideIcon } from "lucide-react"
import type { ComponentProps } from "react"
import { Button } from "../ui/button"

type IconButtonProps = {
	icon: LucideIcon
} & ComponentProps<"button">

export default function IconButton(props: IconButtonProps) {
	return (
		<Button
			variant="ghost"
			size="icon"
			aria-label="חזרה"
			className="relative rounded-full [&_svg:not([class*='size-'])]:size-6"
			{...props}
		>
			<props.icon strokeWidth={1.75} />
		</Button>
	)
}
