import styles from "../components/collection/Collection.module.scss";
import React from "react";

interface Image {
    asset: {
        url: string
    }
}

export interface Creator {
    _id?:string,
    name?:string,
    address?:string,
    slug?: {
        current:string
    },
    image?: Image,
    bio?:string
}

export interface Collection {
    _id: string,
    address:string,
    creator: Creator,
    description:string,
    mainImage:Image,
    previewImage:Image,
    nftCollectionName:string,
    slug:{
        current:string
    },
    title:string
}

export interface CollectionItemProp {
    key:string | number;
    owner:string;
    imageSrc:string;
    title:string;
    initAddress:string;
    [key]:string;
}
