import { Navbar } from "./components/Navbar"
import { Sidemenu } from "./components/Sidemenu"
import { AllRoutes } from "./routes/AllRoutes"

export const App = () => {
  return (
      <main>
        < Navbar />
        < Sidemenu />
        < AllRoutes />
      </main>
  )
}


