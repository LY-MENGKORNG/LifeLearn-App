import { Link } from "react-router-dom"

export default function AppLogo() {
  return (
    <Link to={'/'}>
      <div>
        <h2 className="font-medium text-xl">LifeLearn</h2>
      </div>
    </Link>
  )
}
