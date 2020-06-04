import React from 'react';
import styled, { css } from 'styled-components';
import { SEARCH_FORM } from '../../constants';
import FormDate from './FormDate';
import FormGuest from './FormGuest';
import FormPrice from './FormPrice';
import SearchButtons from './SearchButtons';

const SearchFormDiv = styled.div`
  position: relative;
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
  text-align: center;
`;

const SearchFormCloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 10%;
  width: 32px;
  height: 32px;
  text-indent: -999em;
  border: 0;
  outline: none;
  cursor: pointer;
  background: none;
  opacity: 0.3;
  transition: all 0.3s;
  &:before,
  &:after {
    position: absolute;
    top: 0;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
  &:hover {
    opacity: 1;
  }
`;

const SearchForm = ({ isOpen, viewContents, onOpenForm, onCloseForm }) => {
  return (
    <SearchFormDiv open={isOpen}>
      <SearchButtons viewContents={viewContents} onOpenForm={onOpenForm} />
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
