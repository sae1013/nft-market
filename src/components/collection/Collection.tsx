import React, { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { useParams } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import {
  useSDK,
  useNFTDrop,
  useClaimedNFTs,
  useUnclaimedNFTs,
  useNFTs,
} from "@thirdweb-dev/react";
import { useQuery } from "react-query";
import sanityClient from "../../sanity";
import {
  useContract,
  useAddress,
  useDisconnect,
  useMetamask,
} from "@thirdweb-dev/react";
import { useNavigate } from "react-router-dom";
import styles from "./Collection.module.scss";
import { urlFor } from "../../sanity";
import { NonceProvider } from "react-select";
import { setDefaultResultOrder } from "dns";

const initAddress = "0x0000000000000000000000000000000000000000";

interface NFT_CONDITION  {
  currencyMetadata: {
    displayValue:string
  }
  [key:string]:string | Object
}

type NFT_ATTRIBUTE = {
  trait_type: string;
  value: string;
};

type NFT_META_DATA = {
  name: string;
  attributes: NFT_ATTRIBUTE[];
  description: string;
  id: {
    _hex: string;
    _isBigNumber: boolean;
  };
  image: string;
  uri: string;
};

type NFT = {
  metadata: NFT_META_DATA;
  owner: string;
  supply: number;
  type: string;
};
const mintItem: NFT[] = [
  {
    metadata: {
      attributes: [
        { trait_type: "Shirt", value: "biker" },
        { trait_type: "Shirt", value: "biker" },
      ],
      description: "A YACHT APE",
      id: {
        _hex: "0x00",
        _isBigNumber: true,
      },
      image:
        "https://gateway.ipfscdn.io/ipfs/QmSSPrAVESgucC8aKXK7SiBWsTFzrVVTLB8YJ9zceRSTQB/0.png",
      name: "#9",
      uri: "ipfs://QmavhYMu1QtHPR7okEytoFD7km9aFosWJoZaanFJVgtHUp/0",
    },
    owner: "0x353daAD383cCc2f7293B21D33ED968c2ae65678d",
    supply: 1,
    type: "ERC721",
  },
  {
    metadata: {
      attributes: [
        { trait_type: "Shirt", value: "biker" },
        { trait_type: "Shirt", value: "biker" },
      ],
      description: "A YACHT APE",
      id: {
        _hex: "0x00",
        _isBigNumber: true,
      },
      image:
        "https://gateway.ipfscdn.io/ipfs/QmSSPrAVESgucC8aKXK7SiBWsTFzrVVTLB8YJ9zceRSTQB/0.png",
      name: "#9",
      uri: "ipfs://QmavhYMu1QtHPR7okEytoFD7km9aFosWJoZaanFJVgtHUp/0",
    },
    owner: "0x0000000000000000000000000000000000000000",
    supply: 1,
    type: "ERC721",
  },
  {
    metadata: {
      attributes: [
        { trait_type: "Shirt", value: "biker" },
        { trait_type: "Shirt", value: "biker" },
      ],
      description: "A YACHT APE",
      id: {
        _hex: "0x00",
        _isBigNumber: true,
      },
      image:
        "https://gateway.ipfscdn.io/ipfs/QmSSPrAVESgucC8aKXK7SiBWsTFzrVVTLB8YJ9zceRSTQB/0.png",
      name: "#9",
      uri: "ipfs://QmavhYMu1QtHPR7okEytoFD7km9aFosWJoZaanFJVgtHUp/0",
    },
    owner: "0x0000000000000000000000000000000000000000",
    supply: 1,
    type: "ERC721",
  },
  {
    metadata: {
      attributes: [
        { trait_type: "Shirt", value: "biker" },
        { trait_type: "Shirt", value: "biker" },
      ],
      description: "A YACHT APE",
      id: {
        _hex: "0x00",
        _isBigNumber: true,
      },
      image:
        "https://gateway.ipfscdn.io/ipfs/QmSSPrAVESgucC8aKXK7SiBWsTFzrVVTLB8YJ9zceRSTQB/0.png",
      name: "#9",
      uri: "ipfs://QmavhYMu1QtHPR7okEytoFD7km9aFosWJoZaanFJVgtHUp/0",
    },
    owner: "0x0000000000000000000000000000000000000000",
    supply: 1,
    type: "ERC721",
  },
  {
    metadata: {
      attributes: [
        { trait_type: "Shirt", value: "biker" },
        { trait_type: "Shirt", value: "biker" },
      ],
      description: "A YACHT APE",
      id: {
        _hex: "0x00",
        _isBigNumber: true,
      },
      image:
        "https://gateway.ipfscdn.io/ipfs/QmSSPrAVESgucC8aKXK7SiBWsTFzrVVTLB8YJ9zceRSTQB/0.png",
      name: "#9",
      uri: "ipfs://QmavhYMu1QtHPR7okEytoFD7km9aFosWJoZaanFJVgtHUp/0",
    },
    owner: "0x0000000000000000000000000000000000000000",
    supply: 1,
    type: "ERC721",
  },
  {
    metadata: {
      attributes: [
        { trait_type: "Shirt", value: "biker" },
        { trait_type: "Shirt", value: "biker" },
      ],
      description: "A YACHT APE",
      id: {
        _hex: "0x00",
        _isBigNumber: true,
      },
      image:
        "https://gateway.ipfscdn.io/ipfs/QmSSPrAVESgucC8aKXK7SiBWsTFzrVVTLB8YJ9zceRSTQB/0.png",
      name: "#9",
      uri: "ipfs://QmavhYMu1QtHPR7okEytoFD7km9aFosWJoZaanFJVgtHUp/0",
    },
    owner: "0x0000000000000000000000000000000000000000",
    supply: 1,
    type: "ERC721",
  },
  {
    metadata: {
      attributes: [
        { trait_type: "Shirt", value: "biker" },
        { trait_type: "Shirt", value: "biker" },
      ],
      description: "A YACHT APE",
      id: {
        _hex: "0x00",
        _isBigNumber: true,
      },
      image:
        "https://gateway.ipfscdn.io/ipfs/QmSSPrAVESgucC8aKXK7SiBWsTFzrVVTLB8YJ9zceRSTQB/0.png",
      name: "#9",
      uri: "ipfs://QmavhYMu1QtHPR7okEytoFD7km9aFosWJoZaanFJVgtHUp/0",
    },
    owner: "0x0000000000000000000000000000000000000000",
    supply: 1,
    type: "ERC721",
  },
  {
    metadata: {
      attributes: [
        { trait_type: "Shirt", value: "biker" },
        { trait_type: "Shirt", value: "biker" },
      ],
      description: "A YACHT APE",
      id: {
        _hex: "0x00",
        _isBigNumber: true,
      },
      image:
        "https://gateway.ipfscdn.io/ipfs/QmSSPrAVESgucC8aKXK7SiBWsTFzrVVTLB8YJ9zceRSTQB/0.png",
      name: "#9",
      uri: "ipfs://QmavhYMu1QtHPR7okEytoFD7km9aFosWJoZaanFJVgtHUp/0",
    },
    owner: "0x353daAD383cCc2f7293B21D33ED968c2ae65678d",
    supply: 1,
    type: "ERC721",
  },
  {
    metadata: {
      attributes: [
        { trait_type: "Shirt", value: "biker" },
        { trait_type: "Shirt", value: "biker" },
      ],
      description: "A YACHT APE",
      id: {
        _hex: "0x00",
        _isBigNumber: true,
      },
      image:
        "https://gateway.ipfscdn.io/ipfs/QmSSPrAVESgucC8aKXK7SiBWsTFzrVVTLB8YJ9zceRSTQB/0.png",
      name: "#9",
      uri: "ipfs://QmavhYMu1QtHPR7okEytoFD7km9aFosWJoZaanFJVgtHUp/0",
    },
    owner: "0x353daAD383cCc2f7293B21D33ED968c2ae65678d",
    supply: 1,
    type: "ERC721",
  },
  {
    metadata: {
      attributes: [
        { trait_type: "Shirt", value: "biker" },
        { trait_type: "Shirt", value: "biker" },
      ],
      description: "A YACHT APE",
      id: {
        _hex: "0x00",
        _isBigNumber: true,
      },
      image:
        "https://gateway.ipfscdn.io/ipfs/QmSSPrAVESgucC8aKXK7SiBWsTFzrVVTLB8YJ9zceRSTQB/0.png",
      name: "#9",
      uri: "ipfs://QmavhYMu1QtHPR7okEytoFD7km9aFosWJoZaanFJVgtHUp/0",
    },
    owner: "0x353daAD383cCc2f7293B21D33ED968c2ae65678d",
    supply: 1,
    type: "ERC721",
  },
  {
    metadata: {
      attributes: [
        { trait_type: "Shirt", value: "biker" },
        { trait_type: "Shirt", value: "biker" },
      ],
      description: "A YACHT APE",
      id: {
        _hex: "0x00",
        _isBigNumber: true,
      },
      image:
        "https://gateway.ipfscdn.io/ipfs/QmSSPrAVESgucC8aKXK7SiBWsTFzrVVTLB8YJ9zceRSTQB/0.png",
      name: "#9",
      uri: "ipfs://QmavhYMu1QtHPR7okEytoFD7km9aFosWJoZaanFJVgtHUp/0",
    },
    owner: "0x353daAD383cCc2f7293B21D33ED968c2ae65678d",
    supply: 1,
    type: "ERC721",
  },
  {
    metadata: {
      attributes: [
        { trait_type: "Shirt", value: "biker" },
        { trait_type: "Shirt", value: "biker" },
      ],
      description: "A YACHT APE",
      id: {
        _hex: "0x00",
        _isBigNumber: true,
      },
      image:
        "https://gateway.ipfscdn.io/ipfs/QmSSPrAVESgucC8aKXK7SiBWsTFzrVVTLB8YJ9zceRSTQB/0.png",
      name: "#9",
      uri: "ipfs://QmavhYMu1QtHPR7okEytoFD7km9aFosWJoZaanFJVgtHUp/0",
    },
    owner: "0x353daAD383cCc2f7293B21D33ED968c2ae65678d",
    supply: 1,
    type: "ERC721",
  },
  {
    metadata: {
      attributes: [
        { trait_type: "Shirt", value: "biker" },
        { trait_type: "Shirt", value: "biker" },
      ],
      description: "A YACHT APE",
      id: {
        _hex: "0x00",
        _isBigNumber: true,
      },
      image:
        "https://gateway.ipfscdn.io/ipfs/QmSSPrAVESgucC8aKXK7SiBWsTFzrVVTLB8YJ9zceRSTQB/0.png",
      name: "#9",
      uri: "ipfs://QmavhYMu1QtHPR7okEytoFD7km9aFosWJoZaanFJVgtHUp/0",
    },
    owner: "0x353daAD383cCc2f7293B21D33ED968c2ae65678d",
    supply: 1,
    type: "ERC721",
  },
  {
    metadata: {
      attributes: [
        { trait_type: "Shirt", value: "biker" },
        { trait_type: "Shirt", value: "biker" },
      ],
      description: "A YACHT APE",
      id: {
        _hex: "0x00",
        _isBigNumber: true,
      },
      image:
        "https://gateway.ipfscdn.io/ipfs/QmSSPrAVESgucC8aKXK7SiBWsTFzrVVTLB8YJ9zceRSTQB/0.png",
      name: "#9",
      uri: "ipfs://QmavhYMu1QtHPR7okEytoFD7km9aFosWJoZaanFJVgtHUp/0",
    },
    owner: "0x353daAD383cCc2f7293B21D33ED968c2ae65678d",
    supply: 1,
    type: "ERC721",
  },
  {
    metadata: {
      attributes: [
        { trait_type: "Shirt", value: "biker" },
        { trait_type: "Shirt", value: "biker" },
      ],
      description: "A YACHT APE",
      id: {
        _hex: "0x00",
        _isBigNumber: true,
      },
      image:
        "https://gateway.ipfscdn.io/ipfs/QmSSPrAVESgucC8aKXK7SiBWsTFzrVVTLB8YJ9zceRSTQB/0.png",
      name: "#9",
      uri: "ipfs://QmavhYMu1QtHPR7okEytoFD7km9aFosWJoZaanFJVgtHUp/0",
    },
    owner: "0x353daAD383cCc2f7293B21D33ED968c2ae65678d",
    supply: 1,
    type: "ERC721",
  },
];

function Collection() {
  const navigate = useNavigate();
  const address = useAddress();
  const { slug } = useParams();
  const [contractAddress, setContractAddress] = useState<string>();
  const [clamedSupply,setClamedSupply] = useState<bigint>();
  const [conditionIsLoading,setConditionIsLoading ] = useState(false);
  const [conditionError, setConditionError] = useState<string>();
  const [condition,setCondition] = useState<NFT_CONDITION>();
  const sdk = useSDK();
  const nftDrop = useNFTDrop(contractAddress); // sanity에서 주소를 먼저 가져오고, third web에 요청
  const { data: claimedNFTs, isLoading } = useClaimedNFTs(nftDrop); // thirdWeb, nftDrop의 모든 claim아이템 조회
  const [isMinting, setIsMinting] = useState<boolean>(false);

  const handleMintNFT = async () => {
    let errorToastId;
    let loadingToastId;

    if (!address) {
      errorToastId && toast.dismiss(errorToastId);
      loadingToastId && toast.dismiss(loadingToastId);

      errorToastId = toast.error("please login", { duration: 3000 });
      return;
    }

    try {
      errorToastId && toast.dismiss(errorToastId);
      loadingToastId = toast.loading("loading...", {
        duration: 1000000,
        style: {
          width: "16rem",
        },
      });
      setIsMinting(true);

      const quantity = 1;
      const tx = await nftDrop?.claimTo(address!, quantity);
      if (tx) {
        const receipt = tx[0]!.receipt; // the transaction receipt
        const claimedNFT = await tx[0].data(); // (optional) get the claimed NFT metadata
        loadingToastId && toast.dismiss(loadingToastId);
        toast.success("success", {
          duration: 3000,
        });
      }
    } catch (err) {
      loadingToastId && toast.dismiss(loadingToastId);
      toast.error("failure", {
        duration: 3000,
      });
    }
    setIsMinting(false);
  };

  const query = `
*[_type == "collections" && slug.current == "${slug}"][0]{
  _id,
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
  const { error: emptyError, data: collection } = useQuery( // sanity에서 컬렉션정보 먼저 조회
    // contract의 address를 먼저 가져옴
    ["collection", slug],
    () => {
      return sanityClient.fetch(query).then((res) => {
        if (Object.keys(res).length == 0) {
          navigate("/market");
          return;
        }

        setContractAddress(res.address);
        return res;
      });
    },
    {
      cacheTime: 1 * 60 * 1000, // 캐시 1분
      enabled: !!slug,
    }
  );

  const fetchMetaInfo = async(nftDrop) => {
    try{
      setConditionIsLoading(true);
      const supply = await nftDrop.totalClaimedSupply()
      const condition = await nftDrop.claimConditions.getAll();
      console.log(condition)
      setClamedSupply(supply)
      setCondition(condition[0])
    } catch(err){
      console.log(err)
      if(err) setConditionError(err.toString());
    }
    setConditionIsLoading(false);
    
  }

  // const { // 서플라이... 가격 정보도 받아와야함.
  //   error: supplyError,
  //   data: clamedSupply,
  //   isLoading: isSupplyLoading,
  // } = useQuery(
  //   ["clamedSupply", slug],
  //   () => {
  //     return nftDrop?.totalClaimedSupply();
  //   },
  //   { enabled: !!nftDrop }
  // );

  useEffect(() => {
    if(nftDrop){
      fetchMetaInfo(nftDrop)
    }
  },[nftDrop])

  if (isLoading) {
    
    return <p>check..</p>;
  }
  return (
    <>
      <div className={styles.fullpage}>
        <section
          className={styles.container}
          style={{
            backgroundImage: `url(${urlFor(collection.previewImage).url()})`,
          }}
        >
          <div className={styles.wrapper}>
            <div className={styles.left}>
              <div className={styles["thumbnail"]}>
                <img src={urlFor(collection.mainImage).url()}></img>
              </div>
            </div>

            <div className={styles.right}>
              <div className={styles.contents}>
                <div className={styles.collectionImage}>
                  <img src={urlFor(collection.previewImage).url()}></img>
                </div>
                <h2>{collection.title}</h2>
                {conditionError ? 
                  <p>Something wrong</p>
                  :
                conditionIsLoading ? 
                  <p>fetching clamed Info...</p>
                :
                  <p>
                    {clamedSupply?.toString()} / {claimedNFTs?.length} NFT's
                    clamed
                  </p>
                }
                <>
                  <button
                    onClick={handleMintNFT}
                    disabled={isMinting}
                    className={`${styles.active__button} ${isMinting && styles.disable__button}`}
                  >
                    {conditionIsLoading && <span>Mint NFT(wait...)</span>}
                    {!conditionIsLoading && !isMinting && <span>Mint NFT({condition?.currencyMetadata?.displayValue})</span>}
                    
                    {isMinting && (
                      <ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={[
                          "#e15b64",
                          "#f47e60",
                          "#f8b26a",
                          "#abbd81",
                          "#849b87",
                        ]}
                      />
                    )}
                  </button>
                  <Toaster
                    containerStyle={{
                      top: "70%",
                      left: "50%",
                      transform: "translate(-50%,0)",
                    }}
                    toastOptions={{
                      style: {
                        width: "16rem",
                        fontWeight: "bold",
                        fontSize: "1.5rem",
                      },
                      success: {
                        style: {
                          background: "green",
                        },
                      },
                      error: {
                        style: {
                          background: "red",
                          color:"#fff"
                        },
                      },
                      loading: {
                        style: {
                          color: "orange",
                        },
                      },
                    }}
                  />
                </>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.container2}`}>
          <div className={styles.wrapper}>
            <h1 className={styles.section2__title}>Available</h1>
            <ul className={styles.grid}>
              {claimedNFTs?.map((nft) => {
                return (
                  <li
                    className={`${styles.grid__item} ${
                      nft.owner !== initAddress ? styles.clamed : ""
                    }`}
                  >
                    <div className={styles.image__wrap}>
                      <img src={nft.metadata.image as string}></img>
                    </div>
                    <div className={styles.description}>
                      <div className={styles.title}>{nft.metadata.name}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default Collection;
