import React from 'react';
import styles from "./Collection.module.scss";
import {CollectionItemProp} from "../../types/index";

function CollectionItem({key,owner,imageSrc,title,initAddress}:CollectionItemProp) {
    return (
        <li
            key={key}
            className={`${styles.grid__item} ${
                owner !== initAddress ? styles.clamed : ""
            }`}
        >
            <div className={styles.image__wrap}>
                <img src={imageSrc}></img>
            </div>
            <div className={styles.description}>
                <div className={styles.title}>{title}</div>
            </div>
        </li>
    );
}

export default React.memo(CollectionItem);