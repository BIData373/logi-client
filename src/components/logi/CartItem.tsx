import { useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"
import { cn } from "cn"
import { Repeat, Trash2 } from "lucide-react"
import {
	getGetUserCartQueryKey,
	useDeleteCartItem,
	useUpdateCartItem,
} from "#/api"
import type { CartItemDto } from "#/api/model"
import { Button } from "#/components/ui/button"
import { Card } from "#/components/ui/card"
import { Separator } from "#/components/ui/separator"
import { OrderLineItem } from "./OrderLineItem"
import { QuantityStepper } from "./QuantityStepper"

interface CartItemProps {
	cartItem: CartItemDto
	onVariantChange?: (label: string, value: string) => void
	onReplaceVariant?: () => void
	className?: string
}

export function CartItem({ cartItem, className }: CartItemProps) {
	const navigate = useNavigate()
	const queryClient = useQueryClient()
	const { mutate: mutateUpdate } = useUpdateCartItem({
		mutation: {
			onSuccess: () => {
				queryClient.invalidateQueries({
					queryKey: getGetUserCartQueryKey({ id: cartItem.createdBy }),
				})
			},
		},
	})

	const { mutate: mutateDelete } = useDeleteCartItem({
		mutation: {
			onSuccess: () => {
				queryClient.invalidateQueries({
					queryKey: getGetUserCartQueryKey({ id: cartItem.createdBy }),
				})
			},
		},
	})

	function handleQuantityChange(quantity: number) {
		mutateUpdate({
			pathParams: {
				id: cartItem.id,
			},
			data: {
				quantity,
			},
		})
	}

	function handleDelete() {
		mutateDelete({
			pathParams: {
				id: cartItem.id,
			},
		})
	}

	function handleChangeVariant() {
		navigate({
			to: "/products/$productId",
			params: {
				productId: cartItem.variant.product.id,
			},
			search: {
				variant: cartItem.variant.id,
			},
		})
	}

	return (
		<Card className={cn(className)}>
			<OrderLineItem variant={cartItem.variant} />
			<Separator />
			<div className="flex items-center justify-between p-4">
				<div className="flex items-center gap-2">
					<Button variant="link-destructive" onClick={handleDelete}>
						<Trash2 />
						הסר
					</Button>
					<Button variant="ghost" onClick={handleChangeVariant}>
						<Repeat />
						החלף דגם
					</Button>
				</div>
				<QuantityStepper
					value={cartItem.quantity}
					onValueChange={handleQuantityChange}
				/>
			</div>
		</Card>
	)
}
