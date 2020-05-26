import React from 'react';
import FilterButton from './FilterButton';
import styled from 'styled-components';

const ButtonWrapDiv = styled.div`

`

const FilterButtons = () => {
  return (
    <ButtonWrapDiv>
      <FilterButton filterCondition='날짜' />
      <FilterButton filterCondition='인원' />
      <FilterButton filterCondition='요금' />
    </ButtonWrapDiv>
  );
};

export default FilterButtons;
