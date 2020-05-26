import React from 'react';
import styled from 'styled-components';

import { test } from '../../actions/filterAction';
import { useDispatch, useSelector } from "react-redux";

import PriceDistribution from './PriceDistribution';


const FilterBtn = styled.button`
  
`;


// onClick => modal (type 전달)
// modal 안에서 onClick => type 별 핸들러(action에서 정의된 함수를 dispatch에 지정)

const FilterButton = ({ filterCondition }) => {
  const dispatch = useDispatch();
  const { adults } = useSelector(state => state)

  function testHandler() {
    const actionObj = test();
    dispatch(actionObj);
    // console.log(adults);
  }

  switch (filterCondition) {
    case '날짜':
      return (
        <FilterBtn children={filterCondition} />
      );
    case '인원':
      return (
        <FilterBtn children={filterCondition} onClick={testHandler} />
      );
    case '요금':
      return (
        <>
          <FilterBtn children={filterCondition} />
          <PriceDistribution></PriceDistribution>
        </>
      );

    default:
      return;
  }

  // return (
  //   <>
  //     <FilterBtn children={filterCondition} onClick={testHandler} />
  //   </>
  // );
};

export default FilterButton;
