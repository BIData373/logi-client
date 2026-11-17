import { useNavigate } from "@tanstack/react-router"
import { useState } from "react"
import { CategoryChip } from "../logi/CategoryChip"
import { ProductCard } from "../logi/ProductCard"
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group"
import { Search } from "lucide-react"

interface MockCategory {
	id: string
	label: string
	imageSrc: string
}

const MOCK_CATEGORIES: MockCategory[] = [
	{
		id: "cleaning",
		imageSrc: "/boots.png",
		label: "מוצרי ניקיון",
	},
	{
		id: "personal",
		imageSrc: "/dog.jpg",
		label: "ציוד לפרט",
	},
	{
		id: "office",
		imageSrc: "/diskit.jpg",
		label: "ריהוט משרדי",
	},
]

export default function AllProductsLayout() {
	const navigate = useNavigate()
	const [activeCategory, setActiveCategory] = useState<string | null>(null)

	function handleMoveToProductPage(productId: string) {
		navigate({
			to: `/products/${productId}`,
		})
	}

	function handleMoveToCategoriesPage() {
		navigate({
			to: "/categories",
		})
	}

	return (
		<div className="flex flex-col gap-4 p-4">
			<InputGroup>
				<InputGroupInput placeholder="חפש מוצר..." />
				<InputGroupAddon>
					<Search />
				</InputGroupAddon>
			</InputGroup>
			<div className="flex gap-2">
				{MOCK_CATEGORIES.map((category) => (
					<CategoryChip
						key={category.id}
						label={category.label}
						imageSrc={category.imageSrc}
						onClick={() => {
							setActiveCategory(
								activeCategory === category.id ? null : category.id,
							)
						}}
						active={activeCategory === category.id}
					/>
				))}
				<CategoryChip
					plus
					label="עוד..."
					onClick={handleMoveToCategoriesPage}
				/>
			</div>
			<h2 className="font-semibold text-[24px]">קטלוג המוצרים</h2>
			<div className="grid grid-cols-2 gap-4">
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
					<ProductCard
						key={i}
						title="דיסקית אישית"
						imageSrc="/cat.jpg"
						category="ציוד לפרט"
						onClick={() => {
							handleMoveToProductPage(i.toString())
						}}
					/>
				))}
			</div>
		</div>
	)
}
