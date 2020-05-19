import React from 'react';
import styled from 'styled-components';

interface ISearchResultTitle {
  count: Number;
}
const TitleH2 = styled.h2``;

const SearchResultTitle: React.FunctionComponent<ISearchResultTitle> = ({ count }) => {
  return <TitleH2>{count}개 이상의 숙소</TitleH2>;
};

export default SearchResultTitle;
