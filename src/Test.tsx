import { createPopup } from "./popup/stores/popup.store"
import Temp from "./Temp"

export default function Test() {

  const open = createPopup(<Temp />)

  return (
    <div>
      <button onClick={()=> open()} className="border-border border-[1px] mx-2 rounded-md p-2 mt-2 ">open temp</button>
    </div>
  )
}
