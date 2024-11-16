import { HTMLAttributes } from "react";
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
declare const createPopup: (Element: JSX.Element, props?: DiveAttr) => (data?: any) => void;
export default createPopup;
declare const usePopupStore: import("zustand").UseBoundStore<import("zustand").StoreApi<IPopupStore>>;
export { usePopupStore };
