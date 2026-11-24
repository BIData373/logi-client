import { useNavigate } from "@tanstack/react-router"
import { Search } from "lucide-react"
import { useState } from "react"
import { useGetAllProducts } from "#/api"
import { useFuse } from "#/hooks/useFuse"
import { CategoryChip } from "../logi/CategoryChip"
import { ProductCard } from "../logi/ProductCard"
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group"

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
	const [query, setQuery] = useState("")

	const { data } = useGetAllProducts()
	const products = data?.data ?? []
	const filteredProducts = useFuse(products, query, {
		keys: ["name"],
		threshold: 0.3,
	})

	function handleMoveToProductPage(productId: number) {
		navigate({
			to: `/products/$productId`,
			params: {
				productId,
			},
		})
	}

	function handleMoveToCategoriesPage() {
		navigate({
			to: "/categories",
		})
	}

	return (
		<div className="flex flex-col gap-4 p-4">
			<InputGroup className="bg-card">
				<InputGroupInput
					placeholder="חפש מוצר..."
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
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
				{filteredProducts.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						onClick={() => handleMoveToProductPage(product.id)}
					/>
				))}
			</div>
		</div>
	)
}
