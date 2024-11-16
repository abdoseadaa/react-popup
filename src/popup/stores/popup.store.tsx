import React, { HTMLAttributes } from "react";
import { create } from "zustand";

export type IPopup = {
  id: string;
  Element: JSX.Element;
  close: (id: string) => void;
  props?: DiveAttr;
};

type DiveAttr = HTMLAttributes<HTMLDivElement>;
type IPopupStore = {
  popups: IPopup[];
  create: (Element: JSX.Element, props?: DiveAttr) => (data?: any) => void;
  closeAll: () => void;
  closeLatest: () => void;
};

const createPopup = (Element: JSX.Element, props?: DiveAttr) => {
  return usePopupStore.getState().create(Element, props);
};

export default createPopup;

const usePopupStore = create<IPopupStore>((set) => ({
  popups: [],

  create: (Element: JSX.Element, props?: DiveAttr) => {
    const id = uuid();

    const open = (data?: any) => {
      // Check if the popup with the same element and props is already open
      const alreadyOpen = usePopupStore.getState().popups.some(
        (popup) => popup.Element.type === Element.type
      );

      if (alreadyOpen) return; // Prevent adding a duplicate popup

      let CopyElement: JSX.Element;
      if (data) {
        CopyElement = React.cloneElement<{ item?: any }>(Element, { item: data });
      } else {
        CopyElement = Element;
      }

      const popup: IPopup = {
        id,
        Element: CopyElement,
        close(id: string) {
          set((state) => ({
            ...state,
            popups: state.popups.filter((popup) => popup.id !== id),
          }));
        },
        props: props || undefined,
      };

      set((state) => ({
        ...state,
        popups: [...state.popups, popup],
      }));
    };

    return open;
  },

  closeAll: () => {
    set((state) => ({
      ...state,
      popups: [],
    }));
  },

  closeLatest: () => {
    set((state) => ({
      ...state,
      popups: state.popups.slice(0, -1),
    }));
  },
}));

export { usePopupStore };

// Generate a unique ID
function uuid(): string {
  return Math.random().toString(36).substring(2, 7);
}
