import React from 'react'
import styled from 'styled-components';

interface Props {
  variant:string, // rectangular, rounded, circular, text // text는 font-size로 높이조절.
  animation:string,
  styles?: Object,
  className?:string,
  width:string,
  height:string,
  leftRound?:string,
  rightRound?:string
}

interface StyledProps {
  width:string,
  height:string,
  variant:string,
  borderRadius?:string,
  leftRound?:string,
  rightRound?:string
}
const CustomSkeleton = styled.div<StyledProps>`
  width: ${props => props.width || '20px'};
  height: ${(props)=> (props.height || '20px')};
  background-color: #e5e5e5;
  border-radius: ${props => props.variant === 'circular' ? '50%':'0px' };
  border-top-left-radius:  ${ props => props.variant==="rounded" ? props.leftRound:'0px'}
  border-top-right-radius: ${props => props.variant ==="rounded" ? props.rightRound:'0px'}
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
  animation: wave 1s infinite;

  @keyframes wave {
  100% {
    background-position: -100% 0;
  }
}
`

function Skeleton(props):JSX.Element {

  return (
    <CustomSkeleton {...props} className={props.className && props.className}></CustomSkeleton>
  )
}

export default Skeleton