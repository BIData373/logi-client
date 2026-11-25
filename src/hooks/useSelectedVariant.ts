import { useNavigate, useSearch } from "@tanstack/react-router"
import { useEffect } from "react"
import type { VariantDto } from "#/api/model"

export function useSelectedVariant(variants: VariantDto[] = []) {
	const navigate = useNavigate({ from: "/products/$productId" })
	const { variant: variantId } = useSearch({ from: "/products/$productId" })

	const selectedVariant =
		// biome-ignore lint/style/noNonNullAssertion: there is never a product without any variants
		variants.find((variant) => variant.id === variantId) ?? variants[0]!
	const selectedVariantId = selectedVariant?.id

	function selectVariant(id: number) {
		navigate({ search: { variant: id }, replace: true })
	}

	// make sure there is always a variant selected
	// biome-ignore lint/correctness/useExhaustiveDependencies: navigate is stable
	useEffect(() => {
		if (selectedVariantId !== undefined && selectedVariantId !== variantId) {
			selectVariant(selectedVariantId)
		}
	}, [selectedVariantId, variantId])

	return { selectedVariant, selectVariant }
}
