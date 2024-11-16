// Popup.tsx
import { usePopupStore } from './stores/popup.store';
import PopupView from './components/PopupView';
import ReactDOM from 'react-dom'; // Import ReactDOM for portals

export default function Popup() {
  const popups = usePopupStore(state => state.popups);

  // Render all popups as a portal to `document.body`
  return ReactDOM.createPortal(
    <>
      {popups.map((popup, index) => (
        <PopupView key={index} order={index} data={popup} />
      ))}
    </>,
    document.body // Specify document.body as the portal target
  );
}
