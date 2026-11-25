import { createFileRoute, notFound } from "@tanstack/react-router"
import z from "zod"
import OrderCompletedLayout from "#/components/layout/OrderCompletedLayout"

const OrderCompletedParamsSchema = z.object({
	orderId: z.coerce.number().int().positive(),
})

export const Route = createFileRoute("/order-completed/$orderId")({
	component: OrderCompletedLayout,
	head: () => ({
		meta: [{ title: "סיכום הזמנה | לוגי" }],
	}),
	params: {
		parse: (raw) => {
			const result = OrderCompletedParamsSchema.safeParse(raw)
			if (!result.success) throw notFound()
			return result.data
		},
		stringify: ({ orderId }) => ({ orderId: String(orderId) }),
	},
})
