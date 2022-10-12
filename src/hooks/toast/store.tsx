import React, { useReducer } from "react";
import { ActionType, ACTION, ToastType, Option } from "./toastTypes";

let globalDispatch: React.Dispatch<ACTION>;

interface STATE {
  toasts: ToastType[];
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const genId = (() => {
  let count = 0;
  return () => {
    return (++count).toString();
  };
})();

export function toast(message: string, option: Option) {

  const newToast = {
    id: genId(),
    message,
    option,
  };
  const toastTimeoutId = setTimeout(() => {
    globalDispatch({ type: ActionType.ADD_TOAST, toast: newToast });
  }, option.delay || 0);

  setTimeout(()=>{
      globalDispatch({type:ActionType.REMOVE_TOAST,toastId:newToast.id})
  },option.duration || 2000)

  toastTimeouts.set(newToast.id, toastTimeoutId); // system.timeout을 관리 (for 등록해놓은 토스트 취소/수정기능 추가)
}

const reducer = (state: typeof initialState, action: ACTION) => {
  switch (action.type) {
    case ActionType.ADD_TOAST:
      return {
        toasts: [action.toast, ...state.toasts],
      };
    case ActionType.REMOVE_TOAST:
      const newToasts = state.toasts.filter(
        (toast) => toast.id !== action.toastId
      );
      return { toasts: newToasts };
    default:
      return initialState;
  }
};
const initialState: { toasts: ToastType[] } = { toasts: [] };

function Store() {
  const [state, dispatch] = useReducer(reducer, initialState);
  globalDispatch = dispatch;

  return [state, dispatch] as const;
}

export default Store;
