import { useState } from "react"
import Start from "./components/Start"
import Gameplay from "./components/gameplay"
function App() {
const [state ,setState] = useState(true)

  return (
    <>
    {state ? <Start state={state} setState = {setState}/> : <Gameplay/>}
    </>
  )
}

export default App
