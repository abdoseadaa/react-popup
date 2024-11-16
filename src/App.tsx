// import { createPopup, Popup } from "airpop"
import Temp from "./Temp"
import Test from "./Test"
import Test2 from "./test2"
import Popup from "./popup/Popup"
import createPopup from "./popup/stores/popup.store"

function App() {

  const openTest = createPopup(<Test />)

  const openTemp = createPopup(<Temp />)

  const openPopup = createPopup(<Test2 />)

  return (
    <div className="">
      <button onClick={openTest} className="border-border border-[1px] mx-2 rounded-md p-2 mt-2 ">openTest</button>
      <button onClick={openTemp} className="border-border border-[1px] mx-2 rounded-md p-2 mt-2 ">openTemp</button>
      <button onClick={openPopup} className="border-border border-[1px] mx-2 rounded-md p-2 mt-2 ">openPopup</button>
      <Popup />
    </div>
  )
}

export default App


