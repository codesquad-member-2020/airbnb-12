import React from 'react';
import styled from 'styled-components';

const ThumbnailSliderWrap = styled.div`
  width: 100%;
  margin-bottom: 5px;
  overflow: hidden;
`;

const ThumbnailImgWrap = styled.div`
  display: flex;

  &:hover {
    animation: slide 5s infinite;
  }

  @keyframes slide {
      0% {transform: translateX(0%);}
      15% {transform: translateX(0%);}
      33% {transform: translateX(-100%);}
      48% {transform: translateX(-100%);}
      66% {transform: translateX(-200%);}
      81% {transform: translateX(-200%);}
      99% {transform: translateX(-300%);}
      100% {transform: translateX(-300%);}
  } 
`;

const ThumbnailImg = styled.img`
  max-width: 100%;
`;

const ThumbnailSlider = ({ thumbnailImages = [] }) => {
  let imgIndex = 0;
  const imgList = thumbnailImages.map((thumbnailImage) => <ThumbnailImg src={thumbnailImage} alt="" key={imgIndex++} />)
  imgList.push(<ThumbnailImg src={thumbnailImages[0]} alt="" key={imgIndex++} />)

  return (
    <ThumbnailSliderWrap>
      <ThumbnailImgWrap>
        {imgList}
      </ThumbnailImgWrap>
    </ThumbnailSliderWrap>
  )
}

export default ThumbnailSlider
