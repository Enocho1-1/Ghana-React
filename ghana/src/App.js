import { Navbar, Sidemenu  } from "./components/index"
import { AllRoutes } from "./routes/AllRoutes"

export const App = () => {
  return (
      <main className="overflow-hidden relative h-screen w-screen">
        < Navbar />
        < Sidemenu />
        < AllRoutes />
      </main>
  )
}


