import { useNavigate, useParams } from "@tanstack/react-router"
import { Heart, Share } from "lucide-react"
import { useGetProductById } from "#/api/logiSawgger"
import { CheckoutBar } from "../logi/CheckoutBar"
import { Header } from "../logi/Header"
import IconButton from "../logi/IconButton"
import { Badge } from "../ui/badge"
import { Card } from "../ui/card"
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group"
import ProductImagesCarousel from "../logi/ProductImagesCarousel"

export default function ProductLayout() {
	const navigate = useNavigate()

	const { productId } = useParams({ from: "/products/$productId" })
	const { data } = useGetProductById(Number(productId))
	const product = data?.data

	function handleBack() {
		navigate({ to: "/" })
	}

	return (
		<div className="flex flex-col h-screen" dir="rtl">
			<Header
				title=""
				variant="back"
				className="fixed shadow-lg backdrop-blur-lg bg-background/30 border-none z-99"
				onBack={handleBack}
				actions={
					<>
						<IconButton icon={Heart} />
						<IconButton icon={Share} />
					</>
				}
			/>
			<ProductImagesCarousel images={product?.images ?? []} />
			<main className="flex flex-col flex-1 overflow-scroll">
				<div className="p-3 flex flex-col gap-2">
					<div className="flex justify-between">
						<h1 className="text-[28px] font-bold">{product?.name}</h1>
						<Badge className="bg-green-100 text-green-800 text-[13px]">
							ציוד לפרט
						</Badge>
					</div>
					<h2 className="font-semibold text-[20px]">דגמים</h2>
					<ToggleGroup>
						{[44, 45, 46, 47, 48, 49].map((mockShoeSize) => (
							<ToggleGroupItem
								value={mockShoeSize.toString()}
								key={mockShoeSize}
							>{`שחור / ${mockShoeSize}`}</ToggleGroupItem>
						))}
					</ToggleGroup>

					<Card className="p-3" flat>
						<h3 className="font-semibold text-[16px]">פרטים על המוצר</h3>
						<div className="flex text-[14px]">
							<p>{product?.description}</p>
						</div>
					</Card>
				</div>
			</main>
			<CheckoutBar variant="add" />
		</div>
	)
}
