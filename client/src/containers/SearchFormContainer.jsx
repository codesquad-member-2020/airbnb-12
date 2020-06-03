import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { open, close } from '../modules/form';
import SearchButtons from '../components/SearchForm/SearchButtons';
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
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    opacity: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -2;
  }
  ${props =>
    props.open &&
    css`
      box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 28px;
      &::before {
        height: 100%;
        opacity: 1;
      }
    `}
`;

const SearchFormInnerDiv = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 0 10%;
  background: #fff;
`;

const SearchFormContainer = () => {
  const dispatch = useDispatch();
  const { isOpen, viewContents } = useSelector(({ form }) => ({ isOpen: form.isOpen, viewContents: form.viewContents }));
  const onOpenForm = formType => dispatch(open(formType));
  const onCloseForm = () => dispatch(close());

  return (
    <SearchFormWrapDiv open={isOpen}>
      <SearchFormInnerDiv>
        <SearchButtons onOpenForm={onOpenForm} />
        <SearchForm isOpen={isOpen} viewContents={viewContents} onCloseForm={onCloseForm} />
      </SearchFormInnerDiv>
    </SearchFormWrapDiv>
  );
};

export default SearchFormContainer;
