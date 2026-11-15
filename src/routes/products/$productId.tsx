import { createFileRoute, useNavigate } from "@tanstack/react-router"
import { Heart, Share } from "lucide-react"
import { useState } from "react"
import { CheckoutBar } from "#/components/logi/CheckoutBar"
import { Header, ICON_CLASS } from "#/components/logi/Header"
import { Badge } from "#/components/ui/badge"
import { Button } from "#/components/ui/button"
import { Card } from "#/components/ui/card"
import { ToggleGroup, ToggleGroupItem } from "#/components/ui/toggle-group"

export const Route = createFileRoute("/products/$productId")({
	component: ProductLayout,
	head: () => ({
		meta: [
			{
				title: "נעליי חיר צבאיות | לוגי",
			},
		],
	}),
})

function ProductLayout() {
	const navigate = useNavigate()

	return (
		<div className="flex flex-col h-screen" dir="rtl">
			<Header
				title=""
				variant="back"
				className="border-none bg-transparent fixed"
				onBack={() =>
					navigate({
						to: "/",
					})
				}
				actions={
					<>
						<Button variant="ghost" size="icon" className={ICON_CLASS}>
							<Heart />
						</Button>
						<Button variant="ghost" size="icon" className={ICON_CLASS}>
							<Share />
						</Button>
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
					<VariantsCard
						variants={[44, 45, 46, 47, 48, 49].map((shoeSize) => {
							return {
								id: shoeSize.toString(),
								imageSrc: "/boots.png",
								label: `שחור / ${shoeSize}`,
							} as Variant
						})}
					/>
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

interface VariantsCardProps {
	onSelected?: (selectedId: string) => void
	variants: Variant[]
}

interface Variant {
	id: string
	label: string
}

function VariantsCard({ onSelected, variants }: VariantsCardProps) {
	return (
		<ToggleGroup>
			{variants.map((variant) => (
				<ToggleGroupItem
					onSelect={() => {
						onSelected?.(variant.id)
					}}
					key={variant.id}
				>
					{variant.label}
				</ToggleGroupItem>
			))}
		</ToggleGroup>
	)
}
