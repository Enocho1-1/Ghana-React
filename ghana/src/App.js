import "./App.css"
import { Navbar } from "./components/Navbar"
import { Sidemenu } from "./components/Sidemenu"

export const App = () => {
  return (
      <main>
        {/* Navagation Button */}
        < Navbar />
        {/* Navagation Menu */}
        < Sidemenu />
      </main>
  )
}


