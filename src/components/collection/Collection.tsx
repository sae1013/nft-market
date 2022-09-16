import React, { useEffect, useState } from "react";
import { ColorRing } from 'react-loader-spinner'
import { useParams } from "react-router";
import {
  useSDK,
  useNFTDrop,
  useClaimedNFTs,
  useUnclaimedNFTs,
  useNFTs,
} from "@thirdweb-dev/react";
import { useQuery } from "react-query";
import sanityClient from "../../sanity";
import { useContract,useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import { useNavigate } from "react-router-dom";
import styles from "./Collection.module.scss";
import { urlFor } from "../../sanity";
const initAddress = "0x0000000000000000000000000000000000000000";
type NFT_ATTRIBUTE = {
  trait_type:string;
  value:string;
}

type NFT_META_DATA = {
  name: string;
  attributes : NFT_ATTRIBUTE[]
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
const mintItem:NFT[] = [
  {
    metadata: {
      attributes : [
        {trait_type:'Shirt', value:'biker'},
        {trait_type:'Shirt', value:'biker'}
      ],
      description:"A YACHT APE",
      id: {
        _hex:'0x00',
        _isBigNumber:true
      },
      image:"https://gateway.ipfscdn.io/ipfs/QmSSPrAVESgucC8aKXK7SiBWsTFzrVVTLB8YJ9zceRSTQB/0.png",
      name:"#9",
      uri:"ipfs://QmavhYMu1QtHPR7okEytoFD7km9aFosWJoZaanFJVgtHUp/0"
    },
    owner:"0x353daAD383cCc2f7293B21D33ED968c2ae65678d",
    supply:1,
    type:"ERC721"
  },
  {
    metadata: {
      attributes : [
        {trait_type:'Shirt', value:'biker'},
        {trait_type:'Shirt', value:'biker'}
      ],
      description:"A YACHT APE",
      id: {
        _hex:'0x00',
        _isBigNumber:true
      },
      image:"https://gateway.ipfscdn.io/ipfs/QmSSPrAVESgucC8aKXK7SiBWsTFzrVVTLB8YJ9zceRSTQB/0.png",
      name:"#9",
      uri:"ipfs://QmavhYMu1QtHPR7okEytoFD7km9aFosWJoZaanFJVgtHUp/0"
    },
    owner:"0x0000000000000000000000000000000000000000",
    supply:1,
    type:"ERC721"
  },
  {
    metadata: {
      attributes : [
        {trait_type:'Shirt', value:'biker'},
        {trait_type:'Shirt', value:'biker'}
      ],
      description:"A YACHT APE",
      id: {
        _hex:'0x00',
        _isBigNumber:true
      },
      image:"https://gateway.ipfscdn.io/ipfs/QmSSPrAVESgucC8aKXK7SiBWsTFzrVVTLB8YJ9zceRSTQB/0.png",
      name:"#9",
      uri:"ipfs://QmavhYMu1QtHPR7okEytoFD7km9aFosWJoZaanFJVgtHUp/0"
    },
    owner:"0x0000000000000000000000000000000000000000",
    supply:1,
    type:"ERC721"
  },
  {
    metadata: {
      attributes : [
        {trait_type:'Shirt', value:'biker'},
        {trait_type:'Shirt', value:'biker'}
      ],
      description:"A YACHT APE",
      id: {
        _hex:'0x00',
        _isBigNumber:true
      },
      image:"https://gateway.ipfscdn.io/ipfs/QmSSPrAVESgucC8aKXK7SiBWsTFzrVVTLB8YJ9zceRSTQB/0.png",
      name:"#9",
      uri:"ipfs://QmavhYMu1QtHPR7okEytoFD7km9aFosWJoZaanFJVgtHUp/0"
    },
    owner:"0x0000000000000000000000000000000000000000",
    supply:1,
    type:"ERC721"
  },
  {
    metadata: {
      attributes : [
        {trait_type:'Shirt', value:'biker'},
        {trait_type:'Shirt', value:'biker'}
      ],
      description:"A YACHT APE",
      id: {
        _hex:'0x00',
        _isBigNumber:true
      },
      image:"https://gateway.ipfscdn.io/ipfs/QmSSPrAVESgucC8aKXK7SiBWsTFzrVVTLB8YJ9zceRSTQB/0.png",
      name:"#9",
      uri:"ipfs://QmavhYMu1QtHPR7okEytoFD7km9aFosWJoZaanFJVgtHUp/0"
    },
    owner:"0x0000000000000000000000000000000000000000",
    supply:1,
    type:"ERC721"
  },
  {
    metadata: {
      attributes : [
        {trait_type:'Shirt', value:'biker'},
        {trait_type:'Shirt', value:'biker'}
      ],
      description:"A YACHT APE",
      id: {
        _hex:'0x00',
        _isBigNumber:true
      },
      image:"https://gateway.ipfscdn.io/ipfs/QmSSPrAVESgucC8aKXK7SiBWsTFzrVVTLB8YJ9zceRSTQB/0.png",
      name:"#9",
      uri:"ipfs://QmavhYMu1QtHPR7okEytoFD7km9aFosWJoZaanFJVgtHUp/0"
    },
    owner:"0x0000000000000000000000000000000000000000",
    supply:1,
    type:"ERC721"
  },
  {
    metadata: {
      attributes : [
        {trait_type:'Shirt', value:'biker'},
        {trait_type:'Shirt', value:'biker'}
      ],
      description:"A YACHT APE",
      id: {
        _hex:'0x00',
        _isBigNumber:true
      },
      image:"https://gateway.ipfscdn.io/ipfs/QmSSPrAVESgucC8aKXK7SiBWsTFzrVVTLB8YJ9zceRSTQB/0.png",
      name:"#9",
      uri:"ipfs://QmavhYMu1QtHPR7okEytoFD7km9aFosWJoZaanFJVgtHUp/0"
    },
    owner:"0x0000000000000000000000000000000000000000",
    supply:1,
    type:"ERC721"
  },
  {
    metadata: {
      attributes : [
        {trait_type:'Shirt', value:'biker'},
        {trait_type:'Shirt', value:'biker'}
      ],
      description:"A YACHT APE",
      id: {
        _hex:'0x00',
        _isBigNumber:true
      },
      image:"https://gateway.ipfscdn.io/ipfs/QmSSPrAVESgucC8aKXK7SiBWsTFzrVVTLB8YJ9zceRSTQB/0.png",
      name:"#9",
      uri:"ipfs://QmavhYMu1QtHPR7okEytoFD7km9aFosWJoZaanFJVgtHUp/0"
    },
    owner:"0x353daAD383cCc2f7293B21D33ED968c2ae65678d",
    supply:1,
    type:"ERC721"
  },
  {
    metadata: {
      attributes : [
        {trait_type:'Shirt', value:'biker'},
        {trait_type:'Shirt', value:'biker'}
      ],
      description:"A YACHT APE",
      id: {
        _hex:'0x00',
        _isBigNumber:true
      },
      image:"https://gateway.ipfscdn.io/ipfs/QmSSPrAVESgucC8aKXK7SiBWsTFzrVVTLB8YJ9zceRSTQB/0.png",
      name:"#9",
      uri:"ipfs://QmavhYMu1QtHPR7okEytoFD7km9aFosWJoZaanFJVgtHUp/0"
    },
    owner:"0x353daAD383cCc2f7293B21D33ED968c2ae65678d",
    supply:1,
    type:"ERC721"
  },
  {
    metadata: {
      attributes : [
        {trait_type:'Shirt', value:'biker'},
        {trait_type:'Shirt', value:'biker'}
      ],
      description:"A YACHT APE",
      id: {
        _hex:'0x00',
        _isBigNumber:true
      },
      image:"https://gateway.ipfscdn.io/ipfs/QmSSPrAVESgucC8aKXK7SiBWsTFzrVVTLB8YJ9zceRSTQB/0.png",
      name:"#9",
      uri:"ipfs://QmavhYMu1QtHPR7okEytoFD7km9aFosWJoZaanFJVgtHUp/0"
    },
    owner:"0x353daAD383cCc2f7293B21D33ED968c2ae65678d",
    supply:1,
    type:"ERC721"
  },
  {
    metadata: {
      attributes : [
        {trait_type:'Shirt', value:'biker'},
        {trait_type:'Shirt', value:'biker'}
      ],
      description:"A YACHT APE",
      id: {
        _hex:'0x00',
        _isBigNumber:true
      },
      image:"https://gateway.ipfscdn.io/ipfs/QmSSPrAVESgucC8aKXK7SiBWsTFzrVVTLB8YJ9zceRSTQB/0.png",
      name:"#9",
      uri:"ipfs://QmavhYMu1QtHPR7okEytoFD7km9aFosWJoZaanFJVgtHUp/0"
    },
    owner:"0x353daAD383cCc2f7293B21D33ED968c2ae65678d",
    supply:1,
    type:"ERC721"
  },
  {
    metadata: {
      attributes : [
        {trait_type:'Shirt', value:'biker'},
        {trait_type:'Shirt', value:'biker'}
      ],
      description:"A YACHT APE",
      id: {
        _hex:'0x00',
        _isBigNumber:true
      },
      image:"https://gateway.ipfscdn.io/ipfs/QmSSPrAVESgucC8aKXK7SiBWsTFzrVVTLB8YJ9zceRSTQB/0.png",
      name:"#9",
      uri:"ipfs://QmavhYMu1QtHPR7okEytoFD7km9aFosWJoZaanFJVgtHUp/0"
    },
    owner:"0x353daAD383cCc2f7293B21D33ED968c2ae65678d",
    supply:1,
    type:"ERC721"
  },
  {
    metadata: {
      attributes : [
        {trait_type:'Shirt', value:'biker'},
        {trait_type:'Shirt', value:'biker'}
      ],
      description:"A YACHT APE",
      id: {
        _hex:'0x00',
        _isBigNumber:true
      },
      image:"https://gateway.ipfscdn.io/ipfs/QmSSPrAVESgucC8aKXK7SiBWsTFzrVVTLB8YJ9zceRSTQB/0.png",
      name:"#9",
      uri:"ipfs://QmavhYMu1QtHPR7okEytoFD7km9aFosWJoZaanFJVgtHUp/0"
    },
    owner:"0x353daAD383cCc2f7293B21D33ED968c2ae65678d",
    supply:1,
    type:"ERC721"
  },
  {
    metadata: {
      attributes : [
        {trait_type:'Shirt', value:'biker'},
        {trait_type:'Shirt', value:'biker'}
      ],
      description:"A YACHT APE",
      id: {
        _hex:'0x00',
        _isBigNumber:true
      },
      image:"https://gateway.ipfscdn.io/ipfs/QmSSPrAVESgucC8aKXK7SiBWsTFzrVVTLB8YJ9zceRSTQB/0.png",
      name:"#9",
      uri:"ipfs://QmavhYMu1QtHPR7okEytoFD7km9aFosWJoZaanFJVgtHUp/0"
    },
    owner:"0x353daAD383cCc2f7293B21D33ED968c2ae65678d",
    supply:1,
    type:"ERC721"
  },
  {
    metadata: {
      attributes : [
        {trait_type:'Shirt', value:'biker'},
        {trait_type:'Shirt', value:'biker'}
      ],
      description:"A YACHT APE",
      id: {
        _hex:'0x00',
        _isBigNumber:true
      },
      image:"https://gateway.ipfscdn.io/ipfs/QmSSPrAVESgucC8aKXK7SiBWsTFzrVVTLB8YJ9zceRSTQB/0.png",
      name:"#9",
      uri:"ipfs://QmavhYMu1QtHPR7okEytoFD7km9aFosWJoZaanFJVgtHUp/0"
    },
    owner:"0x353daAD383cCc2f7293B21D33ED968c2ae65678d",
    supply:1,
    type:"ERC721"
  }
  

];

function Collection() { 
  const navigate = useNavigate();
  const address = useAddress();
  const { slug } = useParams();
  const [contractAddress, setContractAddress] = useState<string | undefined>();
  
  const sdk = useSDK();
  const nftDrop = useNFTDrop(contractAddress);
  const { data: claimedNFTs, isLoading } = useClaimedNFTs(nftDrop);
  const [isMinting,setIsMinting] = useState<boolean>(false);
  console.log("claimed", claimedNFTs);
  
  const handleMintNFT = async () => {
    if (!address) {
      // 로그인 모달창 띄우기
      alert("Please Login!");
      return
    }
    try{
      setIsMinting(true);
      const quantity = 1; // how many unique NFTs you want to claim
      const tx = await nftDrop?.claimTo(address!, quantity);
      if (tx) {
        const receipt = tx[0]!.receipt; // the transaction receipt
        // const claimedTokenId = tx?.id; // the id of the NFT claimed
        const claimedNFT = await tx[0].data(); // (optional) get the claimed NFT metadata
        console.log("영수증", claimedNFT);
      }
    }catch(err){
      console.log(err);
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
  const { error: emptyError, data: collection } = useQuery( // contract의 address를 먼저 가져옴 
    ['collection',slug],
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
      cacheTime: 1 * 60 * 1000,  // 캐시 1분
      enabled: !!slug,
    }
  );

  const {error:supplyError,data:clamedSupply,isLoading:isSupplyLoading} = useQuery(['clamedSupply',slug],() => {return nftDrop?.totalClaimedSupply()},{enabled:!!nftDrop});
  console.log(collection)
  if (isLoading) {
    // 로딩페이지 개발.
    return (
      <p>check..</p>
    )
  }
  return (
    <>
      <div className={styles.fullpage}>
      <section className={styles.container} style={{backgroundImage: `url(https://cdn.sanity.io/images/ygstsibc/production/f72570921cab407c11a39c8e1717f5607718e14d-2951x2430.webp)`}}>
          {/* <div className={styles.backdrop}>
            <img src="https://cdn.sanity.io/images/ygstsibc/production/f72570921cab407c11a39c8e1717f5607718e14d-2951x2430.webp"></img>
          </div> */}
        <div className={styles.wrapper}>
          <div className={styles.left}>
            {/* <div className={styles.backdrop}>
              <img src="https://cdn.sanity.io/images/ygstsibc/production/f72570921cab407c11a39c8e1717f5607718e14d-2951x2430.webp"></img>
            </div> */}
            <div className={styles['thumbnail']}>
                <img src={urlFor(collection.mainImage).url()}></img>
                {/* <img src={"https://cdn.sanity.io/images/ygstsibc/production/388cc4cee34c68e86c0beb685292f29eca01431f-200x200.png"}></img> */}
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.contents}>
              <div className={styles.collectionImage}>
                <img src={urlFor(collection.previewImage).url()}></img>
                {/* <img src={"https://cdn.sanity.io/images/ygstsibc/production/388cc4cee34c68e86c0beb685292f29eca01431f-200x200.png"}></img> */}
              </div>
              <h2>
                {collection.title}
              </h2>
              
              {isSupplyLoading && <p>loading...</p>}
              
              <p>{clamedSupply?.toString()} / {claimedNFTs?.length} NFT's clamed</p>
              {isMinting ? 
                <button className={styles.disable__animation}>
                  <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                  />
                </button>
                :
                <button onClick={handleMintNFT}>Mint NFT(0.1 ETH)</button>
              }
            </div>
          </div>
        </div> 
      </section>

      <section className={`${styles.container2}`}>
        <div className={styles.wrapper}>
              <h1 className={styles.section2__title}>Yacht NFT Collection!</h1>
              <ul className={styles.grid}>
                  {claimedNFTs?.map((nft)=>{
                    return( 
                      <li className={`${styles.grid__item} ${nft.owner !== initAddress ? styles.clamed:''}`}>
                        <div className={styles.image__wrap}>
                          <img src={nft.metadata.image as string}></img>
                        </div>
                        <div className={styles.description}>
                          <div className={styles.title}>
                            {nft.metadata.name}
                          </div>
                        </div>
                      </li>
                    )
                  })}
              </ul>
        </div>
      </section>
    </div>
      
    </>
  );
}

export default Collection;
