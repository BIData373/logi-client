import { config } from "dotenv"
import { defineConfig } from "orval"

config()

const API_URL = process.env.VITE_API_BASE_URL ?? "http://localhost:3000"

export default defineConfig({
	logi: {
		input: {
			target: `${API_URL}/open-api/json`,
		},
		output: {
			schemas: {
				path: "src/api/model",
				type: "typescript",
			},
			client: "react-query",
			formatter: "biome",
			clean: true,
			headers: false,
		},
	},
})
