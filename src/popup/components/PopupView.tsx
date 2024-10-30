import { AiOutlineClose } from "react-icons/ai"; 
import React, { useEffect } from "react"
import  {  usePopupStore, IPopup } from "../stores/popup.store"
import { cn } from "../../config/cn.helper"


type Props = {
  data : IPopup
  order : number
}


export default function PopupView(props : Props) {

  const {close , Element , id} = props.data

  const closeLatest = usePopupStore(state => state.closeLatest)

  const zIndex = 1000 + (props.order+1) * 2

  const onClose = () => {
    close(id)
  }

  useEffect(() => {
    const mouseDownHandler = (e : MouseEvent) => {
      const target = e.target as HTMLElement
      const isPopup = !!target.closest("[data-popup-preview]")

      if(isPopup) return
      
      closeLatest()
    }
    window.addEventListener("mousedown" , mouseDownHandler)
    return () => {
      window.removeEventListener("mousedown" , mouseDownHandler)
    }
  }, [])

  return (
  <>
  
  <div 
        data-popup-preview 
        style={{zIndex}}
        {...props.data.props} 
        className={cn(
        "bg-white shadow-lg  p-2  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ring-1 ring-[#efefef]/50",
        "min-w-[40vw] min-h-fit max-w-[90vw] max-h-[90vh]  w-fit",
        "rounded-md p-4 pt-3",
        props.data.props?.className
      )}>


      { React.cloneElement<{ item?: any , close : () => void}>( Element, { close : onClose  } )}

      <button onClick={onClose} className="absolute top-3 right-3 border-border px-2 py-1  rounded-md">
        <AiOutlineClose />
      </button>

    </div>

    <div className="w-full h-full backdrop-blur-[1px] absolute top-0 left-0 bg-black/5" />  
  
  </>
  )
}
