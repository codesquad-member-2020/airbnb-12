import React from 'react';
import styled, { css } from 'styled-components';
import { SEARCH_FORM } from '../../constants';
import FormDate from './FormDate';
import FormGuest from './FormGuest';
import FormPrice from './FormPrice';

const SearchFormDiv = styled.div`
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: all 0.3s;
  ${props =>
    props.open &&
    css`
      height: auto;
    `}
`;

const SearchFormContentsDiv = styled.div`
  padding: 20px 0;
`;

const SearchFormCloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 10%;
`;

const SearchForm = ({ isOpen, viewContents, onCloseForm }) => {
  return (
    <SearchFormDiv open={isOpen}>
      {viewContents === SEARCH_FORM.TYPE.DATE && (
        <SearchFormContentsDiv>
          <FormDate />
        </SearchFormContentsDiv>
      )}
      {viewContents === SEARCH_FORM.TYPE.GUEST && (
        <SearchFormContentsDiv>
          <FormGuest />
        </SearchFormContentsDiv>
      )}
      {viewContents === SEARCH_FORM.TYPE.PRICE && (
        <SearchFormContentsDiv>
          <FormPrice />
        </SearchFormContentsDiv>
      )}
      {isOpen && <SearchFormCloseBtn onClick={onCloseForm}>닫기</SearchFormCloseBtn>}
    </SearchFormDiv>
  );
};

export default SearchForm;
