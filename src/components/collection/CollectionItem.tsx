import React from "react";
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
  return <div>CollectionItem</div>;
}

export default CollectionItem;
