import React from 'react';
import styled from 'styled-components';
import ThumbnailSlider from './ThumbnailSlider';

const ItemDiv = styled.div``;
const InfoWrapDiv = styled.div``;
const DescriptionDiv = styled.div``;
const BadgeSpan = styled.span``;
const DescriptionSpan = styled.span``;
const GradeSpan = styled.span``;
const TitleP = styled.p``;
const PriceP = styled.p``;
const TotalPriceP = styled.p``;
const BookingButton = styled.button``;

const Item = () => {
  return (
    <ItemDiv>
      <ThumbnailSlider />
      <InfoWrapDiv>
        <DescriptionDiv>
          <BadgeSpan />
          <DescriptionSpan children="hi"/>
          <GradeSpan />
        </DescriptionDiv>
        <TitleP />
        <PriceP />
        <TotalPriceP />
        <BookingButton />
      </InfoWrapDiv>
    </ItemDiv>
  );
};

export default Item;
