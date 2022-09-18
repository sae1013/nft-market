import React from 'react'
import styled from 'styled-components';

interface Props {
  variant:string, // rectangular, rounded, circular, text // text는 font-size로 높이조절.
  animation:string,
  styles?: Object,
  width:string,
  height:string
}

interface StyledProps {
  width:string,
  height:string
}
const CustomSkeleton = styled.div<StyledProps>`
  width: ${props => props.width || '10px'};
  height: ${(props)=> (props.height || '10px')};
  background-color: #e5e5e5;
  position: relative;
  background: linear-gradient(
    120deg,
    #e5e5e5 30%,
    #f0f0f0 38%,
    #f0f0f0 40%,
    #e5e5e5 48%
  );
  background-size: 200% 100%;
  background-position: 100% 0;
  animation: wave 2s infinite;

  @keyframes wave {
  100% {
    background-position: -100% 0;
  }
}
`

function Skeleton({variant,width,height}) {

  return (
    <CustomSkeleton width={width} height={height}></CustomSkeleton>
  )
}

export default Skeleton