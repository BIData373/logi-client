import { cn } from "cn"
import { useEffect, useState } from "react"
import type { ImageDto } from "#/api/model"
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
} from "../ui/carousel"

interface ProductImagesCarouselProps {
	images: ImageDto[]
}

export default function ProductImagesCarousel({
	images,
}: ProductImagesCarouselProps) {
	const [api, setApi] = useState<CarouselApi>()
	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		if (!api) {
			return
		}

		setCurrentIndex(api.selectedScrollSnap())

		const onSelect = () => {
			setCurrentIndex(api.selectedScrollSnap())
		}

		api.on("select", onSelect)

		return () => {
			api.off("select", onSelect)
		}
	}, [api])

	return (
		<div className="flex flex-col gap-2">
			<Carousel setApi={setApi}>
				<CarouselContent>
					{images.map((image) => (
						<CarouselItem key={image.url}>
							<img
								src={image.url}
								alt={image.name}
								className="w-full max-h-100 object-cover rounded-b-lg"
							/>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
			<div className="flex gap-1 justify-center">
				{images.map((image, i) => {
					const active = i === currentIndex
					return (
						<div
							className={cn(
								"h-0.5 w-6 rounded-full transition-colors",
								active ? "bg-foreground" : "bg-input",
							)}
							key={image.name}
						/>
					)
				})}
			</div>
		</div>
	)
}
