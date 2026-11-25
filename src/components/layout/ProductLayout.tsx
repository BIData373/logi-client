import { getRouteApi } from "@tanstack/react-router"
import { Heart, Share } from "lucide-react"
import { useEffect } from "react"
import { useGetProductById } from "#/api"
import { CheckoutBar } from "../logi/CheckoutBar"
import { Header } from "../logi/Header"
import IconButton from "../logi/IconButton"
import ProductImagesCarousel from "../logi/ProductImagesCarousel"
import { Badge } from "../ui/badge"
import { Card } from "../ui/card"
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group"

const routeApi = getRouteApi("/products/$productId")

export default function ProductLayout() {
	const navigate = routeApi.useNavigate()
	const { productId } = routeApi.useParams()
	const { variant: variantId } = routeApi.useSearch()
	const { data: product } = useGetProductById({ id: productId })

	const selectedVariant =
		product?.variants.find((variant) => variant.id === variantId) ??
		product?.variants[0]
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

	if (!product) return null

	return (
		<div className="flex flex-col h-screen" dir="rtl">
			<Header
				title=""
				variant="back"
				onBack={() => navigate({ to: "/" })}
				actions={
					<>
						<IconButton icon={Heart} />
						<IconButton icon={Share} />
					</>
				}
			/>
			<ProductImagesCarousel images={product.images} />
			<main className="flex flex-col flex-1 overflow-scroll">
				<div className="p-3 flex flex-col gap-2">
					<div className="flex justify-between">
						<h1 className="text-[28px] font-bold">{product.name}</h1>
						<Badge className="bg-green-100 text-green-800 text-[13px]">
							ציוד לפרט
						</Badge>
					</div>
					<h2 className="font-semibold text-[20px]">דגמים</h2>
					<ToggleGroup
						value={selectedVariantId ? [String(selectedVariantId)] : []}
						onValueChange={([id]) => id && selectVariant(Number(id))}
					>
						{product.variants.map((variant) => (
							<ToggleGroupItem key={variant.id} value={String(variant.id)}>
								{variant.name}
							</ToggleGroupItem>
						))}
					</ToggleGroup>

					<Card className="p-3" flat>
						<h3 className="font-semibold text-[16px]">פרטים על המוצר</h3>
						<div className="flex text-[14px]">
							<p>{product.description}</p>
						</div>
					</Card>
				</div>
			</main>
			<CheckoutBar variant="add" />
		</div>
	)
}
