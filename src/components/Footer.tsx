import styled from "@emotion/styled"
import { useLocation, useNavigate } from "@tanstack/react-router"
import { PAGES } from "src/consts/pages"

export default function Footer() {
	const navigate = useNavigate()
	const location = useLocation()

	return (
		<Container>
			{PAGES.map((page) => (
				<FooterButton
					$active={location.href === page.href}
					key={page.href}
					onClick={() => {
						navigate({
							to: page.href,
						})
					}}
				>
					{page.icon}
					<FooterButtonLabel>{page.label}</FooterButtonLabel>
				</FooterButton>
			))}
		</Container>
	)
}

const Container = styled.footer`
  background: white;
  border-top: 1px solid #0000001A;
  display: flex;
  justify-content: space-between;
  padding: 8px 4px;
`

const FooterButton = styled.button<{ $active: boolean }>`
	display: flex;
	flex-direction: column;
  align-items: center;
  color: ${(props) => (props.$active ? "var(--primary)" : "#6B7280")};

	svg {
		width: 17px;
		height: 17px;
	}
`

const FooterButtonLabel = styled.p`
	font-size: 14px;
`
