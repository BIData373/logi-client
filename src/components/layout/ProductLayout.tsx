import { useNavigate } from "@tanstack/react-router"
import { Heart, Share } from "lucide-react"
import { CheckoutBar } from "../logi/CheckoutBar"
import { Header } from "../logi/Header"
import IconButton from "../logi/IconButton"
import { Badge } from "../ui/badge"
import { Card } from "../ui/card"
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group"

export default function ProductLayout() {
	const navigate = useNavigate()

	function handleBack() {
		navigate({ to: "/" })
	}

	return (
		<div className="flex flex-col h-screen" dir="rtl">
			<Header
				title=""
				variant="back"
				className="border-none bg-transparent fixed"
				onBack={handleBack}
				actions={
					<>
						<IconButton icon={Heart} />
						<IconButton icon={Share} />
					</>
				}
			/>
			<main className="flex flex-col flex-1 overflow-scroll">
				<img alt="Product" className="w-full rounded-b-lg" src="/boots.png" />
				<div className="p-3 flex flex-col gap-2">
					<div className="flex justify-between">
						<h1 className="text-[28px] font-bold">נעליי חיר צבאיות</h1>
						<Badge className="bg-green-100 text-green-800 text-[13px]">
							ציוד לפרט
						</Badge>
					</div>
					<h2 className="font-semibold text-[20px]">דגמים</h2>
					<ToggleGroup
						onValueChange={([value]) => {
							console.log(value)
						}}
					>
						{[44, 45, 46, 47, 48, 49].map((mockShoeSize) => (
							<ToggleGroupItem
								value={mockShoeSize.toString()}
								key={mockShoeSize}
							>{`שחור / ${mockShoeSize}`}</ToggleGroupItem>
						))}{" "}
					</ToggleGroup>

					<Card className="p-3">
						<h3 className="font-semibold text-[16px]">פרטים על המוצר</h3>
						<div className="flex text-[14px]">
							<div className="min-w-max ml-2 text-muted-foreground">
								<h4>בד</h4>
								<h4>אורף</h4>
								<h4>צווארון</h4>
								<h4>עיצוב</h4>
							</div>
							<div className="font-medium">
								<p>כותנה</p>
								<p>וי</p>
								<p>רגיל</p>
								<p>חותמת צה"ל</p>
							</div>
						</div>
					</Card>
				</div>
			</main>
			<CheckoutBar variant="add" />
		</div>
	)
}
