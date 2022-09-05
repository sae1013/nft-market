import React from 'react'
import {useParams} from 'react-router';
import { useSDK } from "@thirdweb-dev/react";

function Collection() {
  const params = useParams();
  console.log(params);

  return (
    <div>Collection</div>
  )
}

export default Collection