import React, { HTMLAttributes } from "react";
export type IPopup = {
    id: string;
    Element: React.JSX.Element;
    close: (id: string) => void;
    props?: DiveAttr;
};
type DiveAttr = HTMLAttributes<HTMLDivElement>;
type IPopupStore = {
    popups: IPopup[];
    create: (Element: React.JSX.Element, props?: DiveAttr) => (data?: any) => void;
    closeAll: () => void;
    closeLatest: () => void;
};
declare const createPopup: (Element: React.JSX.Element, props?: DiveAttr) => (data?: any) => void;
export default createPopup;
declare const usePopupStore: import("zustand").UseBoundStore<import("zustand").StoreApi<IPopupStore>>;
export { usePopupStore };
