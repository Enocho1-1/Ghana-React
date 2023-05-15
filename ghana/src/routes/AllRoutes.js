import { Routes, Route } from "react-router-dom"
import { Home, History, Culture, Politics } from '../pages/index';


export const AllRoutes = () => {
  return (
    <Routes>
          <Route path="/" element={<Home />}/ >
          <Route path="history" element={<History />}/ >
          <Route path="culture" element={<Culture />}/ >
          <Route path="politics" element={<Politics />}/ >
    </Routes>
  )
}

