import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ItemWrapDiv = styled.div`
  width: ${props => `calc(${props.width} - 15px)`};
  margin: 15px 0 0 15px;
`;

const ItemInfo = styled.div`
  padding: 10px 5px;
  font-weight: 300;
`;
const ItemInfoDesc = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DescLocation = styled.span``;
const DescBadge = styled.span`
  display: inline-block;
  padding: 0 5px;
  margin-right: 5px;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  border: 1px solid #222;
  border-radius: 5px;
`;
const DescGrade = styled.span`
  &::before {
    content: '★';
    margin-right: 2px;
    color: #ff3a5b;
  }
`;
const ItemInfoTitle = styled.p`
  overflow: hidden;
  margin: 5px 0;
  font-size: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const ItemInfoPrice = styled.div``;
const OriginalPrice = styled.span`
  margin-right: 5px;
  text-decoration: line-through;
`;
const FinalPrice = styled.span`
  font-weight: normal;
`;

const SearchItem = ({ contents, width }) => {
  const { thumbnailImages, superHost, location, grade, title, originalPrice, finalPrice } = contents;
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <ItemWrapDiv width={width}>
      <Slider {...settings}>
        {thumbnailImages.map((thumbnail, index) => (
          <img src={thumbnail} alt={title} key={index} />
        ))}
      </Slider>
      <ItemInfo>
        <ItemInfoDesc>
          <DescLocation>
            {superHost && <DescBadge>슈퍼호스트</DescBadge>}
            {location}
          </DescLocation>
          <DescGrade>{grade}</DescGrade>
        </ItemInfoDesc>
        <ItemInfoTitle>{title}</ItemInfoTitle>
        <ItemInfoPrice>
          {originalPrice && <OriginalPrice>${originalPrice}</OriginalPrice>}
          {finalPrice && <FinalPrice>${finalPrice}</FinalPrice>}
        </ItemInfoPrice>
      </ItemInfo>
    </ItemWrapDiv>
  );
};

export default SearchItem;
