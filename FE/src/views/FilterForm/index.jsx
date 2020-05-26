import React, { useState } from 'react';
import styled from 'styled-components';
import FormPrice from './FormPrice';
import FormDate from './FormDate';
import FormGuest from './FormGuest';

const FilterFormDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 5%;
  border: 1px solid #e5e5e5;
  transition: all 0.3s;
`;
const FilterInnerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
    width: 33.3%;
    height: 48px;
    padding: 10px;
    border: 2px solid transparent;
    border-radius: 10px;
    &:hover {
      border: 2px solid ${({ theme: { colors } }) => colors.black};
    }
  }
`;

const FilterForm = () => {
  return (
    <FilterFormDiv>
      <FilterInnerDiv>
        <FormDate />
        <FormGuest />
        <FormPrice />
      </FilterInnerDiv>
    </FilterFormDiv>
  );
};

export default FilterForm;
