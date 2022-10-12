export interface ToastType {
    id: string;
    message: string;
    option?:Option;
}
export interface Option {
    duration?:number;
    delay?:number;
    toastStyle?:Object;
    wrapperStyle?:Object;
    className?:string;
}
export enum ActionType {
    ADD_TOAST,
    UPDATE_TOAST,
    REMOVE_TOAST,
}

export type ACTION =
    | {
    type: ActionType.ADD_TOAST;
    toast: ToastType;
    }

    | {
    type: ActionType.UPDATE_TOAST;
    toast: Partial<ToastType>;
    }

    | {
    type: ActionType.REMOVE_TOAST;
    toastId?: string;
    }


export interface OPTION {
    delay:number,
    duration:number
}