import styled from "@emotion/styled"
import { useNavigate } from "@tanstack/react-router"
import { Menu } from "lucide-react"
import {
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerTrigger,
} from "src/components/ui/drawer"
import { PAGES } from "src/consts/pages"

export default function DrawerNav() {
	const navigate = useNavigate()

	return (
		<Drawer direction="right">
			<DrawerTrigger>
				<Menu width={18} height={18} />
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<UnitImage src="/test-unit.png" />
				</DrawerHeader>
				<Body>
					{PAGES.map((page) => (
						<NavLink
							key={page.href}
							onClick={() =>
								navigate({
									to: page.href,
								})
							}
						>
							{page.icon}
							<NavLinkText>{page.label}</NavLinkText>
						</NavLink>
					))}
				</Body>
			</DrawerContent>
		</Drawer>
	)
}

const UnitImage = styled.img`
	width: 63px;
	height: 63px;
	border-radius: 50%;
	margin-inline: auto;
`

const Body = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	padding: 5px;
`

const NavLink = styled.button`
	display: flex;
	gap: 8px;
	color: #545454;
	align-items: center;
`

const NavLinkText = styled.span`
	font-size: 20px;
`
