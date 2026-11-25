import { createFileRoute, notFound } from "@tanstack/react-router"
import { z } from "zod"
import ProductLayout from "#/components/layout/ProductLayout"

const ProductParamsSchema = z.object({
	productId: z.coerce.number().int().positive(),
})

function parseProductParams(raw: Record<string, string>) {
	const result = ProductParamsSchema.safeParse(raw)
	if (!result.success) {
		throw notFound()
	}
	return result.data
}

export const Route = createFileRoute("/products/$productId")({
	component: ProductLayout,
	params: {
		parse: parseProductParams,
		stringify: ({ productId }) => ({ productId: String(productId) }),
	},
	head: () => ({
		meta: [
			{
				title: "נעליי חיר צבאיות | לוגי",
			},
		],
	}),
})
