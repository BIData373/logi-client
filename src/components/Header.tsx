import styled from "@emotion/styled"
import { useLocation } from "@tanstack/react-router"
import { PAGES } from "src/consts/pages"
import DrawerNav from "./Header/DrawerNav"

export default function Header() {
	const { pathname } = useLocation()
	const title = PAGES.find((page) => page.href === pathname)?.label

	return (
		<Container>
			<DrawerNav />
			<UnitImage src="/test-unit.png" />
			<PageTitle>{title}</PageTitle>
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
  align-items: center;
  position: relative;
  gap: 5px;
`

const PageTitle = styled.h1`
	font-size: 20px;
	width: 100%;
	vertical-align: middle;
	font-weight: 600;
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
