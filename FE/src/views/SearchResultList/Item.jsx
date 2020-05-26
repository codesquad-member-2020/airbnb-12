import React from 'react';
import { useSelector } from "react-redux";
import styled from 'styled-components';
import ThumbnailSlider from './ThumbnailSlider';

const ItemDiv = styled.div`
  box-sizing: border-box;
  width: 20%;
  padding: 10px;
`;
const InfoWrapDiv = styled.div``;
const DescriptionDiv = styled.div``;
const BadgeSpan = styled.span`
  box-sizing: border-box;
  border: solid 1px;
  border-radius: 5px;
  padding: 3px;
`;
const DescriptionSpan = styled.span`
  color: #D6D6D6;
`;
const StarSpan = styled.span`
  color: #F57170;
`;
const GradeSpan = styled.span`
  float: right;
`;
const TitleP = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 5px 0;
`;
const OriginalPrice = styled.span`
  color: #767676;
  text-decoration: line-through;
  font-weight: bold;
`;
const FinalPrice = styled.span`
  font-weight: bold;
`;
const OneDateSpan = styled.span``;
const TotalWrapDiv = styled.div`
  display: flex;
  position: relative;
`;
const TotalPriceSpan = styled.p`
  color: #D6D6D6;
  margin: 5px 0;
`;
const BookingButton = styled.button`
  background: #F57170;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 5px 25px;
  position: absolute;
  right: 0;
`;

const Item = ({ item = {} }) => {
  const { staying } = useSelector(state => state);

  return (
    <ItemDiv id={item.accommodationId}>
      <ThumbnailSlider thumbnailImages={item.thumbnailImages} />
      <InfoWrapDiv>
        <DescriptionDiv>
          {item.superHost ? <BadgeSpan>슈퍼호스트</ BadgeSpan> : null}
          <DescriptionSpan> {item.location}</ DescriptionSpan>
          <GradeSpan><StarSpan>&#9733;</StarSpan> {item.grade}</ GradeSpan>
        </DescriptionDiv>
        <TitleP children={item.title} />
        <OriginalPrice>${item.originalPrice} </ OriginalPrice>
        <FinalPrice>${item.finalPrice}</ FinalPrice>
        <OneDateSpan>/1박</ OneDateSpan>
        <TotalWrapDiv>
          <TotalPriceSpan>총 요금: ${staying * item.finalPrice}</ TotalPriceSpan>
          <BookingButton children="예약" />
        </TotalWrapDiv>
      </InfoWrapDiv>
    </ItemDiv>
  );
};

export default Item;
