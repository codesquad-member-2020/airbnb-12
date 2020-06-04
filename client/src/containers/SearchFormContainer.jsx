import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { open, close } from '../modules/form';
import SearchHeaders from '../components/SearchHeaders';
import SearchForm from '../components/SearchForm/SearchForm';

const SearchFormWrapDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid #eee;
  transition: all 0.3s;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 14px;
  z-index: 10;
  ${props =>
    props.open &&
    css`
      box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 28px;
    `}
`;

const SearchFormInnerDiv = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  background: #fff;
  z-index: 2;
`;

const SearchFormMask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const SearchFormContainer = () => {
  const dispatch = useDispatch();
  const { isOpen, viewContents } = useSelector(({ form }) => ({ isOpen: form.isOpen, viewContents: form.viewContents }));
  const onOpenForm = formType => dispatch(open(formType));
  const onCloseForm = () => dispatch(close());

  return (
    <SearchFormWrapDiv>
      <SearchFormInnerDiv>
        <SearchHeaders onOpenForm={onOpenForm} />
        <SearchForm isOpen={isOpen} viewContents={viewContents} onOpenForm={onOpenForm} onCloseForm={onCloseForm} />
      </SearchFormInnerDiv>
      {isOpen && <SearchFormMask onClick={onCloseForm} />}
    </SearchFormWrapDiv>
  );
};

export default SearchFormContainer;
