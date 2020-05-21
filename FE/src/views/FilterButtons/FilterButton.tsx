import React from 'react';
import styled from 'styled-components';

interface IFilterButton {
  filterCondition: string;
}

const FilterBtn = styled.button`
  
`;


// onClick => modal (type 전달)
// modal 안에서 onClick => type 별 핸들러(action에서 정의된 함수를 dispatch에 지정)

const FilterButton: React.FunctionComponent<IFilterButton> = ({ filterCondition }) => {
  return (
    <>
      <FilterBtn children={filterCondition} />
    </>
  );
};

export default FilterButton;
