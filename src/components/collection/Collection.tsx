import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router';
import { useSDK, useNFTDrop, useClaimedNFTs,useUnclaimedNFTs,useNFTs } from "@thirdweb-dev/react";
import {useQuery} from 'react-query';
import sanityClient from '../../sanity';
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import {useNavigate} from 'react-router-dom';
import styles from './Collection.module.scss';

function Collection() {
  const navigate = useNavigate();
  const address = useAddress();
  const {slug} = useParams();
  const [contractAddress,setContractAddress] = useState<string | undefined>();
  const sdk = useSDK();
  const nftDrop = useNFTDrop(contractAddress)

  const {data:claimedNFTs, isLoading} = useClaimedNFTs(nftDrop);
  console.log('claimed', claimedNFTs)

  const handleMintNFT = async() => {
    if(!address) {
      // 로그인 모달창 띄우기
      alert('Please Login!')
    }
    const quantity = 1; // how many unique NFTs you want to claim
    const tx = await nftDrop?.claimTo(address!, quantity);
    if(tx) {
      const receipt = tx[0]!.receipt; // the transaction receipt  
      // const claimedTokenId = tx?.id; // the id of the NFT claimed
      const claimedNFT = await tx[0].data(); // (optional) get the claimed NFT metadata
      console.log('영수증',claimedNFT)
    }
    
  }
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
`
const {error:emptyError, data:collection } = useQuery(['collection'], () => {
    return (
      sanityClient.fetch(query).then(res =>{
          if(Object.keys(res).length == 0){
            navigate("/market");
            return
          }
          
        setContractAddress(res.address)
        return res
      })
    ) 
} , {
    cacheTime:1 * 60 * 1000,
    staleTime: 1*60*1000,
    enabled: !!slug,
})

// sanity => collection 정보 -> address로 NFT Collection 을 가져온다.
  if(isLoading) { // 로딩페이지 개발.
    return <div>is Loading....</div>
  }
  return (
    <>
      <div className = {styles["container"]}>Collection</div>
      <button onClick={() => {
        handleMintNFT()
      }}>Mint!</button>
    </>
  )
}

export default Collection