import React from 'react';
import styled from 'styled-components';
import useAsync from '../utils/useAsync';
import { URL } from '../constants/url';
import SearchTitle from '../components/SearchList/SearchTitle';
import SearchList from '../components/SearchList';

const SearchListWrapDiv = styled.div``;
const SearchListInnerDiv = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 5% 10%;
  background: #fff;
`;

const SearchListContainer = () => {
  const getFetch = async () => {
    const response = await fetch(`${URL.API}/accommodations`).then(res => res.json());
    return response;
  };
  const state = useAsync(getFetch);
  const { loading, data, error } = state;

  if (loading) return <div>로딩</div>;
  if (error) return <div>에러</div>;
  if (!data) return null;

  const { totalCount, priceDistribution, accommodations } = data.data;

  return (
    <SearchListWrapDiv>
      <SearchListInnerDiv>
        <SearchTitle totalCount={totalCount} />
        <SearchList data={accommodations} />
      </SearchListInnerDiv>
    </SearchListWrapDiv>
  );
};

export default SearchListContainer;
