import { Outlet } from "react-router-dom"
import { useNavigation } from "react-router-dom"
import Header from "./Header"
import Loader from "./Loader"
import CartOverview from "../features/cart/CartOverview"

const AppLayout = () => {
  const navigation = useNavigation()

  const isLoading = navigation.state === "loading"

  return (
    <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
      {/* {true && <Loader />} */}
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      {/* <main className="flex h-full w-full items-center justify-center">
        <Outlet />
      </main> */}

      <CartOverview />
    </div>
  )
}

export default AppLayout
