import { useNavigate, useParams } from "@tanstack/react-router"
import { Heart, Share } from "lucide-react"
import { useGetProductById } from "#/api/logiSawgger"
import { CheckoutBar } from "../logi/CheckoutBar"
import { Header } from "../logi/Header"
import IconButton from "../logi/IconButton"
import { Badge } from "../ui/badge"
import { Card } from "../ui/card"
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group"

export default function ProductLayout() {
	const navigate = useNavigate()

	const { productId } = useParams({ from: "/products/$productId" })
	const { data } = useGetProductById(Number(productId))

	function handleBack() {
		navigate({ to: "/" })
	}

	return (
		<div className="flex flex-col h-screen" dir="rtl">
			<Header
				title=""
				variant="back"
				className="fixed shadow-lg backdrop-blur-lg bg-background/30 border-none"
				onBack={handleBack}
				actions={
					<>
						<IconButton icon={Heart} />
						<IconButton icon={Share} />
					</>
				}
			/>
			<main className="flex flex-col flex-1 overflow-scroll">
				<img
					alt="Product"
					className="w-full rounded-b-lg max-h-100 object-cover"
					src={data?.data.images[0].url}
				/>
				<div className="p-3 flex flex-col gap-2">
					<div className="flex justify-between">
						<h1 className="text-[28px] font-bold">{data?.data.name}</h1>
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
							<p>{data?.data.description}</p>
						</div>
					</Card>
				</div>
			</main>
			<CheckoutBar variant="add" />
		</div>
	)
}
