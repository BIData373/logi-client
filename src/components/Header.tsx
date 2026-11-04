import styled from "@emotion/styled"
import { useLocation } from "@tanstack/react-router"
import { PAGES } from "src/consts/pages"

export default function Header() {
	const { pathname } = useLocation()
	const title = PAGES.find((page) => page.href === pathname)?.label

	return (
		<Container>
			<PageTitle>{title}</PageTitle>
			<UnitImage src="/test-unit.png" />
		</Container>
	)
}

const Container = styled.header`
	background: white;
	padding: 4px 8px;
  border-bottom: 4px solid red;
  border-image: linear-gradient(to right, var(--primary-light), var(--primary)) 1;
  display: flex;
  justify-content: center;
  position: relative;
`

const PageTitle = styled.h1`
	font-size: 22px;
	width: 100%;
`

const UnitImage = styled.img`
	border-radius: 50%;
	object-fit: cover;
	border: 3px solid var(--primary);
	width: 50px;
	height: 50px;
	position: absolute;
	background: white;
	bottom: 0;
	transform: translateY(calc(50% + 2px));
`
