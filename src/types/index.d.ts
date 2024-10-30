declare module 'airpop' {
  import { FC } from 'react';

  
  type DiveAttr = HTMLAttributes<HTMLDivElement>
  export const Popup: FC;
  export const createPopup :  (Element : JSX.Element , props?: DiveAttr) =>  (data?: any) => void  
  

  

}
