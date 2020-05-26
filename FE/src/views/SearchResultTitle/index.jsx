import React from 'react';
import styled from 'styled-components';

const TitleH2 = styled.h2``;

const SearchResultTitle = ({ count = 0 }) => {
  return (
    count > 100 ? <TitleH2>{Math.floor(count / 100) * 100}개 이상의 숙소</TitleH2>
      : <TitleH2>{count}개의 숙소</TitleH2>
  )
};

export default SearchResultTitle;
