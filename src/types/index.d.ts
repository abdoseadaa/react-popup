declare module 'airpop' {
  import React, { FC, HTMLAttributes } from 'react';
  
  type DiveAttr = HTMLAttributes<HTMLDivElement>
  export const Popup: FC;
  export const createPopup :  (Element : React.JSX.Element , props?: DiveAttr) =>  (data?: any) => void  
  

  

}
