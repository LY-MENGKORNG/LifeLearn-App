import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Welcome from "./Website/Welcome"
import Home from "./Website/Home"
import Setting from "./Website/Setting"
import Profile from "./Website/Profile"
import Notificartion from "./Website/Notificartion"
import Login from "./Auth/Login"

export default function Website() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Welcome} />
        <Route path="/home" Component={Home} />
        <Route path="/settings" Component={Setting} />
        <Route path="/profile" Component={Profile} />
        <Route path="/notifications" Component={Notificartion} />
        <Route path="/login" Component={Login} />
      </Routes>
    </Router>
  )
}
