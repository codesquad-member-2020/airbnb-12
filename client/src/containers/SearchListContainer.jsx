import React from 'react';
import styled from 'styled-components';
import useAsync from '../utils/useAsync';
import { URL } from '../constants/url';
import SearchTitle from '../components/SearchList/SearchTitle';
import SearchList from '../components/SearchList';
import { useSelector } from "react-redux"

const SearchListWrapDiv = styled.div``;
const SearchListInnerDiv = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 5% 10%;
  background: #fff;
`;

const SearchListContainer = () => {
  const { checkInDate, checkOutDate, adults, children, infants, priceMin, priceMax } = useSelector(state => ({
    checkInDate: state.date.checkInDate,
    checkOutDate: state.date.checkOutDate,
    adults: state.guest.adults,
    children: state.guest.children,
    infants: state.guest.infants,
    priceMin: state.price.priceMin,
    priceMax: state.price.priceMax
  }));

  const filteredUrl = URL.API
    + ((checkInDate && checkOutDate) ? `check_in=${checkInDate}&check_out=${checkOutDate}&` : '')
    + ((adults || children || infants) ? `adults=${adults}&children=${children}&infants=${infants}&` : '')
    + ((priceMin && priceMax) ? `price_min=${priceMin}&price_max=${priceMax}` : '');

  const getFetch = async () => {
    const response = await fetch(filteredUrl).then(res => res.json());
    console.log(filteredUrl)
    return response;
  };
  const state = useAsync(getFetch, [checkInDate, checkOutDate, adults, children, infants, priceMin, priceMax]);
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
