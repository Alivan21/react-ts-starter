import { QueryClient } from "@tanstack/react-query";

// eslint-disable-next-line @typescript-eslint/naming-convention
const MAX_RETRIES = 3;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: failureCount => failureCount < MAX_RETRIES,
    },
  },
});
