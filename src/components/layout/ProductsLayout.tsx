import { CategoryChip } from "../logi/CategoryChip"
import { Input } from "../ui/input"

export default function ProductsLayout() {
	return (
		<div className="flex flex-col gap-4 p-4">
			<Input placeholder="חפש מוצר..." />
			<div className="flex gap-2">
				<CategoryChip imageSrc="/boots.png" label="מוצרי ניקיון" />
				<CategoryChip imageSrc="/dog.jpg" label="ציוד לפרט" />
				<CategoryChip imageSrc="/diskit.jpg" label="ריהוט משרדי" />
				<CategoryChip plus label="עוד..." />
			</div>
			<div className="grid grid-cols-2 gap-4"></div>
		</div>
	)
}
