import { faker } from "@faker-js/faker"
import { config } from "dotenv"
import { defineConfig } from "orval"

config()

const API_URL = process.env.VITE_API_BASE_URL ?? "http://localhost:3000"

export default defineConfig({
	logi: {
		input: {
			target: `${API_URL}/api-json`,
		},
		output: {
			target: "src/api",
			baseUrl: API_URL,
			schemas: {
				path: "src/api/model",
				type: "typescript",
			},
			mock: {
				indexMockFiles: true,
				generators: [{ type: "msw" }],
			},
			override: {
				mock: {
					properties: {
						"/(^|\\.)id$/": () => faker.number.int({ min: 1, max: 10000 }),
						"/createdBy$/": () => faker.number.int({ min: 1, max: 10000 }),
						"/username$/": () => faker.internet.username(),
						"/email$/": () => faker.internet.email(),
						"/description$/": () => faker.commerce.productDescription(),
						"/url$/": () => faker.image.url(),
					},
					schemas: {
						ProductDto: {
							properties: { name: () => faker.commerce.productName() },
						},
						ImageDto: {
							properties: { name: () => faker.system.commonFileName("jpg") },
						},
						UserDto: {
							properties: { name: () => faker.person.fullName() },
						},
					},
				},
			},
			client: "react-query",
			formatter: "biome",
			clean: true,
			headers: false,
		},
	},
})
