import { CategoryChip } from "../logi/CategoryChip"

export default function CategoriesLayout() {
	return (
		<div className="flex flex-wrap gap-3 h-full justify-center items-center content-center">
			<CategoryChip size="lg" imageSrc="/dog.jpg" label="ציוד לפרט" />
			<CategoryChip size="lg" imageSrc="/cat.jpg" label="מוצרי ניקיון" />
			<CategoryChip size="lg" imageSrc="/boots.png" label="ריהוט משרדי" />
			<CategoryChip size="lg" imageSrc="/diskit.jpg" label="חד פעמי" />
		</div>
	)
}
