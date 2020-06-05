import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reset, save } from '../../modules/price';
import styled from 'styled-components';

import Slider from '@material-ui/core/Slider';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const SliderWrap = styled.div`
  padding: 50px 30% 20px;
`;
const ResetBtn = styled.button`
  position: relative;
  width: 70px;
  padding: 10px 15px;
  font-size: 12px;
  color: #333;
  line-height: 1;
  border-radius: 3px;
  border: 1px solid transparent;
  background: #e7e7e7;
  transition: all 0.3s;
  z-index: 1;
  &:hover {
    border: 1px solid #aaa;
    background: #b9b9b9;
  }
`;
const SaveBtn = styled.button`
  position: relative;
  width: 70px;
  padding: 10px 15px;
  margin: 0 5px;
  font-size: 12px;
  color: #fff;
  line-height: 1;
  border-radius: 3px;
  border: 1px solid transparent;
  background: rgb(230, 32, 81);
  background: linear-gradient(90deg, rgba(230, 32, 81, 1) 0%, rgba(218, 13, 101, 1) 100%);
  transition: all 0.3s;
  z-index: 1;
  &:hover {
    border: 1px solid #e62250;
    background: rgb(230, 34, 80);
    background: linear-gradient(90deg, rgba(230, 34, 80, 1) 0%, rgba(230, 34, 80, 1) 100%);
  }
`;
const FormPrice = () => {
  const dispatch = useDispatch();
  const { minPrice = 0, maxPrice = 500 } = useSelector(state => ({
    minPrice: state.price.priceMin,
    maxPrice: state.price.priceMax,
  }));

  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

  const handleChange = (event, newPriceRange) => {
    setPriceRange(newPriceRange);
  };

  const onReset = () => {
    setPriceRange([0, 500]);
    dispatch(reset());
  };

  const onSave = () => {
    dispatch(
      save({
        priceMin: priceRange[0],
        priceMax: priceRange[1],
      }),
    );
  };

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#000',
      },
    },
  });

  return (
    <>
      <SliderWrap>
      <ThemeProvider theme={theme}>
        <Slider
          value={priceRange}
          min={0}
          max={500}
          onChange={handleChange}
          valueLabelDisplay="on"
          valueLabelFormat={value => `$${value}`}
        />
      </ThemeProvider>
      </SliderWrap>
      <ResetBtn onClick={onReset}>초기화</ResetBtn>
      <SaveBtn onClick={onSave}>저장</SaveBtn>
    </>
  );
};

export default FormPrice;
