import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import PublicLayout from "./components/PublicLayout"
import Home from "./pages/Home"
import SubmitGrievance from "./pages/SubmitGrievance"
import TrackTicket from "./pages/TrackTicket"
import Dashboard from "./pages/Dashboard"
import NotFound from "./pages/NotFound"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/submit" element={<SubmitGrievance />} />
          <Route path="/track" element={<TrackTicket />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}
