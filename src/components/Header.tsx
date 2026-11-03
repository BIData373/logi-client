import styled from "@emotion/styled"
import { useLocation } from "@tanstack/react-router"
import { PAGES } from "src/consts/pages"

export default function Header() {
	const { pathname } = useLocation()
	const title = PAGES.find((page) => page.href === pathname)?.label

	return (
		<Container>
			<PageTitle>{title}</PageTitle>
		</Container>
	)
}

const Container = styled.header`
	padding: 4px 8px;
  border-bottom: 2px solid red;
  border-image: linear-gradient(to right, var(--primary-light), var(--primary)) 1;
`

const PageTitle = styled.h1`
	font-size: 22px;
`
