import { ShoppingCartPlusIcon } from "lucide-react"
import { Button } from "../ui/button"

interface AddToCartButtonProps {
	onClick?: () => void
}

export default function AddToCartButton({ onClick }: AddToCartButtonProps) {
	return (
		<Button size="lg" className="flex-1" onClick={onClick}>
			<ShoppingCartPlusIcon />
			הוסף לסל
		</Button>
	)
}
