// import { createPopup } from "airpop"
import Temp from "./Temp"
import Test from "./Test"
import Popup from "./popup/Popup"
import createPopup from "./popup/stores/popup.store"

function App() {

  const openTest = createPopup(<Test />)

  const openTemp = createPopup(<Temp />)

  return (
    <div className="">
      <button onClick={openTest} className="border-border border-[1px] mx-2 rounded-md p-2 mt-2 ">openTest</button>
      <button onClick={openTemp} className="border-border border-[1px] mx-2 rounded-md p-2 mt-2 ">openTemp</button>
      <Popup />
    </div>
  )
}

export default App


