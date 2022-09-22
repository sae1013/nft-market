import React from "react";
import styled from "styled-components";
import Skeleton from "../common/Skeleton";
import "../../global.scss";

const FullPage = styled.div`
  /* scroll-snap-type: y mandatory; */
  overflow-y: scroll;
  height: 100vh;
`;
const Section1 = styled.section`
  /* scroll-snap-align: start; */
  height: 100vh;
  width: 100%;
  background-size: contain;
`;
const FlexWrap = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: block;
  }

  .left {
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(3px);
    position: relative;
    z-index: 12;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    > div {
      position: relative;
      z-index: 1;
      width: 80%;
      padding-bottom: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.3s ease;
    }

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .right {
    flex: 1;
    position: relative;
    height: 100vh;
    backdrop-filter: blur(3px);
    padding-top: ${(props) => props.theme?.theme?.header?.height};
    background-color: rgba(0, 0, 0, 0.7);
    @media screen and (max-width: 768px) {
      width: 100%;
      height: 100vh;
    }

    > * {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }

    > .thumbnail {
      width: 60%;
      height: 30rem;
      left: 50%;
      box-shadow: 0 0 2rem rgba(255, 255, 255, 0.3);
      margin-top: ${(props) => props.theme?.theme?.header?.height};

      @media screen and (max-width: 768px) {
        margin-top: 12rem;
      }
    }

    .title {
      color: whitesmoke;
      padding: 2rem;
      margin-top: 2rem;
      width: 50%;
      height: 1rem;
      border-radius: 2rem;
    }

    > .button {
      width: 80%;
      padding: 4rem;
      border-radius: 2rem;
      bottom: 2rem;
      position: absolute;
    }
  }
`;

export default function CollectionSkeleton() {
  return (
    <FullPage>
      <Section1>
        <FlexWrap>
          <div className="left">
            <Skeleton variant="reactangle" width="80%"></Skeleton>
          </div>
          <div className="right">
            <Skeleton variant="rectangle" className={"thumbnail"}></Skeleton>
            <Skeleton variant="rectangle" className={"title"}></Skeleton>
            <Skeleton variant="rectangle" className={"button"}></Skeleton>
          </div>
        </FlexWrap>
      </Section1>
    </FullPage>
  );
}
