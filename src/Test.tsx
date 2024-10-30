// import { createPopup } from "airpop"
import createPopup from "./popup/stores/popup.store"
import Temp from "./Temp"

export default function Test() {

  const open = createPopup(<Temp />)

  return <div>
    <button onClick={open} className="border-border border-[1px] mx-2 rounded-md p-2 mt-2 ">openTemp</button>

    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam veritatis vero, aperiam quas placeat facere esse nihil quidem explicabo accusamus!
  </div>
}


