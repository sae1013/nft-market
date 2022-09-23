
export interface NFT_CONDITION {
    currencyMetadata: {
        displayValue: string;
    };

    [key: string]: string | Object;
}

export interface NFT_META_DATA {
    name: string;
    attributes: NFT_ATTRIBUTE[];
    description: string;
    id: {
        _hex: string;
        _isBigNumber: boolean;
    };
    image: string;
    uri: string;

}

export interface NFT_ATTRIBUTE {
    trait_type: string;
    value: string;
};

export interface NFT {
    metadata: NFT_META_DATA;
    owner: string;
    supply: number;
    type: string;
};

export interface NFT_CONDITION {
    currencyMetadata: {
        displayValue: string;
    };

    [key: string]: string | Object;
}
