import React, { useEffect, useCallback, useState } from "react";
import styles from "./Market.module.scss";
import sanityClient from "../../sanity";
import { useQuery } from "react-query";
import { urlFor } from "../../sanity";
import Category from "./Category";
import { useNavigate } from "react-router-dom";
import { categories } from "../common/category";
import Skeleton from '../common/Skeleton';
import {Collection} from '../../types/collection';


function Market() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>(
    Object.values(categories)[0].key
  );

  let query = ` 
  *[_type == "collections" && category->key == "${selectedCategory}"]
  {
    _id,
    value,
    address,
    creator-> {name,slug {current}},
    description,
    nftCollectionName,
    title,
    mainImage {asset},
    previewImage {asset},
    slug {current}
  }
  `;
  if (selectedCategory === "40001") {
    query = ` 
  *[_type == "collections"]
  {
    _id,
    value,
    address,
    creator-> {name,slug {current}},
    description,
    nftCollectionName,
    title,
    mainImage {asset},
    previewImage {asset},
    slug {current}
  }
  `;
  }
  const {
    isLoading,
    error,
    data: collections,
  } = useQuery(
    ["collectionList", selectedCategory],
    (): Promise<Collection[]> =>
      sanityClient.fetch(query).then((res) => {
        return res;
      }),
    {
      cacheTime: 1 * 60 * 1000,
      staleTime: 1 * 60 * 1000,
    }
  );

  return (
    <div className={styles["container"]}>
      <Category
        selectedCategory={selectedCategory}
        handleCategory={setSelectedCategory}
      ></Category>
      <ul className={styles["list"]}>
        {isLoading &&
          new Array(5).fill(1).map((index) => {
            return (
              <li key = {index} className={styles["skeleton__item"]}>
                <Skeleton variant = "rounded" width="100%" height="100%" leftRound="1.5rem" rightRound="1.5rem"></Skeleton>
              </li>
            )
          })
        }
        
        {!isLoading && collections?.map((item: Collection) => {
          return (
            <li 
              key={item._id}
              onClick={() => {
                navigate(`/collection/${item.slug.current}`);
              }}
            >
              <div className={styles["image"]}>
                <img src={urlFor(item.previewImage.asset).url()} />
              </div>
              <div className={styles["contents"]}>
                <img src={urlFor(item.mainImage.asset).url()} />
                <span>{item.nftCollectionName}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Market;
