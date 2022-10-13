import React from 'react';
import styles from "./Collection.module.scss";
import CollectionItem from "./CollectionItem";
import {useTranslation} from "react-i18next";

function DropList({claimedNfts,initAddress}) {
    const {t} = useTranslation()
    return (
        <React.Suspense fallback={<div>Load Images..</div>}>
            <section className={`${styles.container2}`}>
                <div className={styles.wrapper}>
                    <h1 className={styles.section2__title}>{t('market.available')}</h1>
                    <ul className={styles.grid}>
                        {claimedNfts?.map((nft, index) => {
                            return (
                                <CollectionItem initAddress={initAddress} key={index} owner={nft.owner} imageSrc={nft.metadata.image as string} title={nft.metadata.name as string} ></CollectionItem>
                            );
                        })}
                    </ul>
                </div>
            </section>
        </React.Suspense>
    );
}

export default DropList;