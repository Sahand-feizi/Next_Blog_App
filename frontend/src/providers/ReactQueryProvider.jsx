'use client'
const { QueryClient, QueryClientProvider } = require("@tanstack/react-query");

const queryClient = new QueryClient()

function ReactQueryProvider({children}) {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )
}

export default ReactQueryProvider
