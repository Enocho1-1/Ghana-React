import { Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Sidemenu } from "./components/Sidemenu"
import { Home } from './pages/Home';
import { History } from './pages/History'
import { Culture } from './pages/Culture'
import { Politics } from './pages/Politics';

export const App = () => {
  return (
      <main>
        {/* Navagation Button */}
        < Navbar />
        {/* Navagation Menu */}
        < Sidemenu />
        <Routes>
          <Route path="/" element={<Home />}/ >
          <Route path="history" element={<History />}/ >
          <Route path="culture" element={<Culture />}/ >
          <Route path="politics" element={<Politics />}/ >
        </Routes>
      </main>
  )
}


