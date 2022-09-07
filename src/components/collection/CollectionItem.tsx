import React from "react";
import styles from './CollectionItem.module.scss'

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

function CollectionItem() {
  return (
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
                <img src={"https://cdn.sanity.io/images/ygstsibc/production/388cc4cee34c68e86c0beb685292f29eca01431f-200x200.png"}></img>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.contents}>
              <div className={styles.collectionImage}>
                <img src={"https://cdn.sanity.io/images/ygstsibc/production/388cc4cee34c68e86c0beb685292f29eca01431f-200x200.png"}></img>
              </div>
              <h2>
                The Vocht Ape NFT Club | DROP
              </h2>
              <p>13 / 21 NFT's clamed</p>
              <button>Mint NFT(0.1 ETH)</button>
            </div>
          </div>
        </div> 
      </section>
      <section className={`${styles.container2}`}>
        <div className={styles.wrapper}>
              <ul className={styles.grid}>
                <li className={styles.grid__item}>
                  <div className={styles.image__wrap}>
                    <img src="https://cdn.sanity.io/images/ygstsibc/production/388cc4cee34c68e86c0beb685292f29eca01431f-200x200.png"></img>
                  </div>
                </li>
                <li className={styles.grid__item}>
                  <div className={styles.image__wrap}>
                    <img src="https://cdn.sanity.io/images/ygstsibc/production/388cc4cee34c68e86c0beb685292f29eca01431f-200x200.png"></img>
                  </div>
                </li>
                <li className={styles.grid__item}>
                  <div className={styles.image__wrap}>
                    <img src="https://cdn.sanity.io/images/ygstsibc/production/388cc4cee34c68e86c0beb685292f29eca01431f-200x200.png"></img>
                  </div>
                </li>
                <li className={styles.grid__item}>
                  <div className={styles.image__wrap}>
                    <img src="https://cdn.sanity.io/images/ygstsibc/production/388cc4cee34c68e86c0beb685292f29eca01431f-200x200.png"></img>
                  </div>
                </li>
                <li className={styles.grid__item}>
                  <div className={styles.image__wrap}>
                    <img src="https://cdn.sanity.io/images/ygstsibc/production/388cc4cee34c68e86c0beb685292f29eca01431f-200x200.png"></img>
                  </div>
                </li>
                <li className={styles.grid__item}>
                  <div className={styles.image__wrap}>
                    <img src="https://cdn.sanity.io/images/ygstsibc/production/388cc4cee34c68e86c0beb685292f29eca01431f-200x200.png"></img>
                  </div>
                </li>
              </ul>
            
        </div>
      </section>
    </div>
  )  
   
}

export default CollectionItem;
