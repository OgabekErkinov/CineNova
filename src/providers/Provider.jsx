import RouterProvider from "./RouterProvider"
import RTKProvider from "./RTKProvider"

const Provider = ({children}) => {
  return (
    <RouterProvider>
        <RTKProvider>
            {children}
        </RTKProvider>
    </RouterProvider>
  )
}

export default Provider
