import {
    QueryClient,
    QueryClientProvider
  } from '@tanstack/react-query'

  const queryClient = new QueryClient()

const RTKProvider = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>
           {children}
    </QueryClientProvider>
  )
}

export default RTKProvider
