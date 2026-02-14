import { createBrowserRouter, RouterProvider } from "react-router-dom"

import AppLayout from "./ui/AppLayout"
import Home from "./ui/Home"
import Menu from "./features/menu/Menu"
import Cart from "./features/cart/Cart"
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder"
import Order from "./features/order/Order"
import Loader from "./ui/Loader"
import NotFound from "./ui/NotFound"

import { menuLoader, orderLoader } from "./services/apiRestaurant"

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <NotFound />,

        // render during initial hydration
        hydrateFallbackElement: <Loader />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <NotFound />,
        hydrateFallbackElement: <Loader />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
