interface ThumbProps {
	src?: string
}

export function Thumb({ src }: ThumbProps) {
	return (
		<span className="flex size-[72px] shrink-0 items-center justify-center overflow-hidden rounded-sm bg-secondary m-2">
			{src && <img src={src} alt="" className="size-full object-cover" />}
		</span>
	)
}
