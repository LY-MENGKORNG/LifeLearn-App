import System from "./pages/System/System"
import Website from "./pages/Website/Website"

function App() {
  const test: boolean = true;
  return (
    <div>
      {test ? <Website /> : <System />}
    </div>
  )
}

export default App
