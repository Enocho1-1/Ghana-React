import "./App.css"
import { Navbar } from "./components/Navbar"
import { Sidemenu } from "./components/Sidemenu"
import { Introtext } from "./components/Introtext"

export const App = () => {
  return (
      <main>
        {/* Navagation Button */}
        < Navbar />
        {/* Navagation Menu */}
        < Sidemenu />
        {/* Introduction Text Menu */}
        < Introtext />
      </main>
  )
}


