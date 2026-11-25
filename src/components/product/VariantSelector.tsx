import type { VariantDto } from "#/api/model"
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group"

interface VariantSelectorProps {
	variants: VariantDto[]
	selectedId?: number
	onSelect: (id: number) => void
}

export default function VariantSelector({
	variants,
	selectedId,
	onSelect,
}: VariantSelectorProps) {
	return (
		<ToggleGroup
			value={selectedId ? [String(selectedId)] : []}
			onValueChange={([id]) => id && onSelect(Number(id))}
		>
			{variants.map((variant) => (
				<ToggleGroupItem key={variant.id} value={String(variant.id)}>
					{variant.name}
				</ToggleGroupItem>
			))}
		</ToggleGroup>
	)
}
