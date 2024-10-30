import React, { HTMLAttributes } from "react";
import { create } from "zustand";


export type IPopup = {
  id : string
  Element : JSX.Element
  close : (id:string) => void
  // props?: React.ImgHTMLAttributes<HTMLImageElement>
  props?: DiveAttr
}

type DiveAttr = HTMLAttributes<HTMLDivElement>
type IPopupStore = {
  popups : IPopup[]
  create : (Element : JSX.Element , props?: DiveAttr) =>  (data?: any) => void  
  closeAll : () => void
  closeLatest : () => void
}

export const createPopup = (Element : JSX.Element , props?: DiveAttr) => {
  return  usePopupStore.getState().create(Element , props)
}

const usePopupStore = create<IPopupStore>((set) => ({

  popups : [],

  create : (Element : JSX.Element , props?: DiveAttr) => {

    const id = uuid();

    const open = (data?: any) => {

      let CopyElement : JSX.Element;

      const alreadyOpen = usePopupStore.getState().popups.some((popup) => popup.id === id)

      if(alreadyOpen) return

      if(data)
        CopyElement = React.cloneElement<{ item?: any}>( Element, { item: data } )

      else CopyElement = Element
      

      const popup = {
        id,
        Element : CopyElement,
        close(id : string){
          set((state) => ({
            ...state,
            popups : state.popups.filter((popup) => popup.id !== id),
          }))
        },
        props : props || undefined
      }

      set((state) => ({
        ...state,
        popups : [...state.popups, popup ],
      }))

    }
  
    return open
  },



  closeAll : () => {

    set((state) => ({
      ...state,
      popups : [],
    }))
  },

  closeLatest : () => {
    set((state) => ({
      ...state,
      popups : state.popups.slice(0, -1),
    }))
  }


}));


export default usePopupStore





function uuid(): string {
  return Math.random().toString(36).substring(2, 7);
}
