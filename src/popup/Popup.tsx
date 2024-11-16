
import { usePopupStore } from './stores/popup.store';
import PopupView from './components/PopupView';
import ReactDOM from 'react-dom'; 

export default function Popup() {
  const popups = usePopupStore(state => state.popups);

  
  return ReactDOM.createPortal(
    <>
      {popups.map((popup, index) => (
        <PopupView key={index} order={index} data={popup} />
      ))}
    </>,
    document.body 
  );
}
