import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchItem from './SearchItem';

const SearchListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
`;

const SearchMoreBtn = styled.button`
  display: block;
  width: 50%;
  height: 40px;
  margin: 50px auto 0;
  border: 0;
  border-radius: 5px;
  color: #fff;
  background: #db0e65;
`;

const SearchList = ({ data }) => {
  const SET_NUMBER = 20;
  const [dataLength, setDataLength] = useState(data.length);
  const [startPoint, setStartPoint] = useState(0);
  const [endPoint, setEndPoint] = useState(SET_NUMBER);
  const [searchList, setSearchList] = useState(data.slice(startPoint, endPoint));

  const onClick = () => {
    setStartPoint(startPoint + SET_NUMBER);
    return setSearchList(data.slice(startPoint, endPoint));
  };

  useEffect(() => {
    setDataLength(dataLength - SET_NUMBER);
    setEndPoint(endPoint + SET_NUMBER);
  }, [startPoint]);

  return (
    <SearchListDiv>
      {searchList.map((accommodation, index) => {
        return <SearchItem key={index} contents={accommodation} width="25%" />;
      })}
      {dataLength > 0 && <SearchMoreBtn onClick={onClick}>{dataLength}개 더보기</SearchMoreBtn>}
    </SearchListDiv>
  );
};

export default SearchList;
