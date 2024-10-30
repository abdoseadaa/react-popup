import usePopupStore from './stores/popup.store'
import PopupView from './components/PopupView'


export default function Popup() {

  const popups = usePopupStore(state => state.popups)


  return (
   popups.map((popup, index) => (
     <PopupView key={index} order={index} data={popup} />
   ))
  )
}
