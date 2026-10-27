import styled from "@emotion/styled"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
	component: HomePage,
})

function HomePage() {
	return <Title>Logi</Title>
}

const Title = styled.h1`
  margin: auto;
  font-size: var(--fs-heading-h1);
  color: var(--sea-ink);
`
