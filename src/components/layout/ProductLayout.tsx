import { getRouteApi } from "@tanstack/react-router"
import { Heart, Share } from "lucide-react"
import { useGetProductById } from "#/api"
import { useSelectedVariant } from "#/hooks/useSelectedVariant"
import { CheckoutBar } from "../logi/CheckoutBar"
import { Header } from "../logi/Header"
import IconButton from "../logi/IconButton"
import ProductImagesCarousel from "../product/ProductImagesCarousel"
import VariantSelector from "../product/VariantSelector"
import { Badge } from "../ui/badge"
import { Card } from "../ui/card"

const routeApi = getRouteApi("/products/$productId")

export default function ProductLayout() {
	const navigate = routeApi.useNavigate()
	const { productId } = routeApi.useParams()
	const { data: product } = useGetProductById({ id: productId })
	const { selectedVariant, selectVariant } = useSelectedVariant(
		product?.variants,
	)

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
					<VariantSelector
						variants={product.variants}
						selectedId={selectedVariant?.id}
						onSelect={selectVariant}
					/>
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
