import React from 'react';
import Item from './Item';
import styled from 'styled-components';

const ItemListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  float: left;
`;


const SearchResultList = ({ items }) => {
  const itemList = items.map((accommodation) => <Item item={accommodation} key={accommodation.accommodationId} />)

  return (
    <ItemListDiv>
      {itemList}
    </ItemListDiv>
  )
}

export default SearchResultList
