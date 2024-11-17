import { AiOutlineClose } from "react-icons/ai";
import React, { useEffect } from "react";
import { usePopupStore, IPopup } from "../stores/popup.store";
import "./styles.css"

type Props = {
  data: IPopup;
  order: number;
};

export default function PopupView(props: Props) {
  const { close, Element, id } = props.data;

  const closeLatest = usePopupStore((state) => state.closeLatest);

  const zIndex = 1000 + (props.order + 1) * 2;

  const onClose = () => {
    close(id);
  };

  useEffect(() => {
    const mouseDownHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isPopup = !!target.closest("[data-popup-preview]");

      if (isPopup) return;

      closeLatest();
    };
    window.addEventListener("mousedown", mouseDownHandler);
    return () => {
      window.removeEventListener("mousedown", mouseDownHandler);
    };
  }, []);

  return (
    <>
      <div data-popup-preview
        style={{ zIndex }}
        {...props.data.props}
        className={`_airpop-popup-container ${props.data.props?.className || ""}`}
      >
        {React.cloneElement<{ item?: any; close: () => void }>(Element, {
          close: onClose,
        })}
        <button onClick={onClose} className="_airpop-popup-close-button">
          <AiOutlineClose />
        </button>
      </div>

      <div
        className="_airpop-popup-backdrop"
        style={{ zIndex: zIndex - 1 }}
      />
    </>
  );
}
