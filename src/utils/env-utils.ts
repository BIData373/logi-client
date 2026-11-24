export const IS_DEV = import.meta.env.VITE_ENVIRONMENT === "development"

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
export const API_PREFIX = import.meta.env.VITE_API_PREFIX ?? ""

export const USE_MOCK_API = import.meta.env.VITE_USE_MOCK_API === "true"
