import styled from "@emotion/styled"
import type { ReactNode } from "react"
import Footer from "src/components/Footer"
import Header from "src/components/Header"

export default function PageLayout({ children }: { children: ReactNode }) {
	return (
		<PageRoot>
			<Header />
			<PrimaryContent>{children}</PrimaryContent>
			<Footer />
		</PageRoot>
	)
}

const PageRoot = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	min-height: 0;
`

const PrimaryContent = styled.main`
	flex: 1;
	overflow: auto;
`
