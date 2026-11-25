import { useQueryClient } from "@tanstack/react-query"
import { getGetUserCartQueryKey, useCreateCartItem } from "#/api"

export default function useAddToCart() {
	const userId = 1 // FIXME
	const queryClient = useQueryClient()

	const { mutate, isPending } = useCreateCartItem({
		mutation: {
			onSuccess() {
				queryClient.invalidateQueries({
					queryKey: getGetUserCartQueryKey({ id: userId }),
				})
			},
		},
	})

	function addToCart(variantId: number, quantity: number) {
		mutate({
			pathParams: {
				userId,
				variantId,
			},
			data: {
				quantity,
			},
		})
	}

	return { addToCart, isAdding: isPending }
}
