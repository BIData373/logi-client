import type { QueryKey } from "@tanstack/react-query"
import { QueryClient } from "@tanstack/react-query"

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 1,
			refetchOnWindowFocus: false,
			staleTime: 5 * 60 * 1000, // 5 minutes
		},
	},
})

export const invalidateQueries = (keys: QueryKey[]) => {
	keys.forEach((key) => {
		queryClient.invalidateQueries({ queryKey: key })
	})
}
