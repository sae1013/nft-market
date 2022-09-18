import React, { useEffect, useCallback, useState } from "react";
import styles from "./Market.module.scss";
import sanityClient from "../../sanity";
import { Collection } from "../../utils/types/sanityTyping";
import { useQuery } from "react-query";
import { urlFor } from "../../sanity";
import Category from "./Category";
import { useNavigate } from "react-router-dom";
import { categories } from "../common/category";

interface Error {}

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

  if (isLoading) return <div>'Loading...'</div>;
  //  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className={styles["container"]}>
      <Category
        selectedCategory={selectedCategory}
        handleCategory={setSelectedCategory}
      ></Category>
      <ul className={styles["list"]}>
        {collections?.map((item: Collection) => {
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
