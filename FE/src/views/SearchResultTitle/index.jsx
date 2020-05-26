import React from 'react';
import styled from 'styled-components';

const TitleH2 = styled.h2``;

const SearchResultTitle = ({ count }) => {
  return <TitleH2>{count}개 이상의 숙소</TitleH2>;
};

export default SearchResultTitle;
