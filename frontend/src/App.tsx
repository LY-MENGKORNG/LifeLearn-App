
import System from "./pages/System";
import Website from "./pages/Website"

function App() {
  const test: boolean = true;
  return (
    <div>
      {test ? <Website /> : <System />}
    </div>
  )
}

export default App
