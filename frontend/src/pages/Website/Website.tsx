import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import WelcomePage from "./Welcome"

export default function Website() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={WelcomePage} />
      </Routes>
    </Router>
  )
}
