import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./System/Dashboard"

export default function System() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={ Dashboard } /> 
      </Routes>
    </Router>
  )
}
