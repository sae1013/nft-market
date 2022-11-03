### 업데이트
- ~~2022-10-27: Alchemy Goerli 테스트넷 API에 이슈가 있습니다. 현재 NFT 마켓(민팅)페이지에서 테스트를 확인할 수 없는 상태입니다.~~


     -> ThirdWeb npm모듈을 부분수정(patch-package)하여 이슈해결


### 프로젝트개요 

이 프로젝트는, NFT민팅(최초 거래)을 할 수 있는 플랫폼 입니다. 아티스트가 등록한 NFT를 최초로 구매할 수 있습니다. 이미 몇개의 NFT 컬렉션을 등록해 놓았습니다.
월렛은 MetaMask를 사용하며, 테스트넷(Goerli)환경에서 거래가 이루어집니다.
민팅 후, 글로벌 OpenSea 마켓에서 해당 지갑주소로 로그인하면, 민팅한 NFT를 실시간으로 확인할 수 있으며, 리셀거래를 할 수 있습니다.

### 프로젝트 스펙
반응형 : 768px미만(모바일) 768px 이상(태블릿, PC)

### 기술스택
##### 백엔드
- Sanity.io
##### 프론트엔드
- React, TypeScript

##### 배포
- Vercel ( https://nft-market-tau-eight.vercel.app )



##### 기타
- i18n (다국어), Third-web(api), MetaMask(ChromeApp)


### 프로젝트 목적
- 처음 써보는 기술과 Api 를 사용하여 최근 트렌드 기술(Web3)을 사용해보기
- 블록체인 네트워크에 트랜잭션을 올려보며 스마트 컨트랙트 개념 파악해보기
- 100% 공식문서만을 통한 프로젝트 구현 (다른분이 정리해놓은 블로그 활용하지 않기)
- ReactQuery를 이용한 캐싱데이터 활용 & 리덕스 걷어내기
- [Sanity.io](http://Sanity.io) 활용하면서 GROQ or GraphQL에 익숙해지기(다음 프로젝트에서 GraphQL 활용할 예정)
- CI/CD 파이프라인 구축을 통해 지속적으로 운영환경 관리


### 워크플로우
1. 메타마스크(크롬 앱)를 설치하고 지갑에 로그인합니다.
2. 컬렉션에서 마음에드는 NFT 프로젝트를 선택후, 민팅합니다. 

   - 하나의 컬렉션 당 약 10~20개의 NFT 아이템들을 미리 등록해놓았습니다. 민팅은 선착순 개념으로, 아이템 목록 순서대로 발급됩니다.

   - 결제는 이더리움 메인넷 대신 테스트넷 네트워크 Goerli를 통해 진행됩니다. 가상자산은 무료로 https://goerlifaucet.com 에서 메타마스크 지갑에 입금할 수 있습니다.
   
   
3. 민팅 된 NFT는 글로벌 마켓 OpenSea ([https://testnets.opensea.io/](https://testnets.opensea.io/)) 에서도 실시간으로 확인할 수 있습니다.
    
	-    이 프로젝트에서 최초 민팅된 NFT는 OpenSea에서 리셀 거래가 가능합니다.
    
### 시연
#### NFT 민팅
https://user-images.githubusercontent.com/63229394/194038764-fefefa77-c54a-466d-b3e3-b961255c9904.mp4

#### PC & Mobile 웹뷰 

https://user-images.githubusercontent.com/63229394/194086996-65d8fe38-fd4f-4f2d-b2b0-f0f7a06e251a.mp4






