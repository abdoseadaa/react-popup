import Popup from "./popup/Popup"
import usePopupStore from "./popup/stores/popup.store"
import Temp from "./Temp"
import Test from "./Test"

function App() {

  const create   = usePopupStore(state => state.create)

  const openTest =  create(<Test />)

  const openTemp =  create(<Temp />)


 
  return (
    <div className="">
      <button 
       onClick={openTest}
       className="border-border border-[1px] mx-2 rounded-md p-2 mt-2 ">openTest</button>
      <button onClick={openTemp} className="border-border border-[1px] mx-2 rounded-md p-2 mt-2 ">openTemp</button>
      <Popup />
    </div>
  )
}

export default App


