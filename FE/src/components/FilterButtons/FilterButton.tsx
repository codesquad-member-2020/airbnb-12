import React from 'react';
import styled from 'styled-components';

interface IFilterButton {
  filterCondition: string;
}

const FilterBtn = styled.button`
  
`;

const FilterButton: React.FunctionComponent<IFilterButton> = ({ filterCondition }) => {
  return (
    <>
      <FilterBtn children={filterCondition} />
    </>
  );
};

export default FilterButton;
