import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reset, save } from '../../modules/price';
// import Slider from '@material-ui/core/Slider';
// import { withStyles } from '@material-ui/core/styles';
import AirbnbThumbComponent, { AirbnbSlider } from './AirbnbSlider';
import styled from 'styled-components';

const SliderWrap = styled.div`
  padding: 50px 30%;
`;

const FormPrice = () => {
  const dispatch = useDispatch();
  const { minPrice = 0, maxPrice = 500 } = useSelector(state => ({
    minPrice: state.price.priceMin,
    maxPrice: state.price.priceMax
  }));

  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

  const handleChange = (event, newPriceRange) => {
    setPriceRange(newPriceRange);
  };

  const onReset = () => {
    setPriceRange([0, 500]);
    dispatch(reset());
  }

  const onSave = () => {
    dispatch(
      save({
        priceMin: priceRange[0],
        priceMax: priceRange[1]
      })
    );
  }

  return (
    <SliderWrap>
      <AirbnbSlider
        value={priceRange}
        onChange={handleChange}
        min={0}
        max={500}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
      // ThumbComponent={AirbnbThumbComponent}
      />
      <button onClick={onReset}>초기화</button>
      <button onClick={onSave}>저장</button>
    </SliderWrap>
  )
}

export default FormPrice

