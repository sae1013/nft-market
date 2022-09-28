export interface KeyVisualType {
    id:string,
    badge:string,
    imageSrc:string,
    description:string,
    date:string
}

export interface Error {
    message:string
}

export type CategoryOption = {
    label: string;
    value: string;
};

export interface haltLoginContextType {
    isHaltLogin: boolean;
    haltLoginHandler: (arg: boolean) => void;
}