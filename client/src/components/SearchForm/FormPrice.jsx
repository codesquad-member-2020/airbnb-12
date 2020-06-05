import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reset, save } from '../../modules/price';
import styled from 'styled-components';

import Slider from '@material-ui/core/Slider';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';

const SliderWrap = styled.div`
  padding: 50px 30% 20px;
`;
const ChartWrap = styled.div`
  position: relative;
`;
const ChartBarWrap = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  bottom: 0;
`;
const ChartDiv = styled.div`
  width: ${props => props.chartWidth + '%'};
  margin: 0 ${props => props.chartMargin + '%'};
  height: ${props => props.count + 'px'};
  background: #B0B0B0;
  z-index: 1;
`;
const ChartDimLeft = styled.div`
  width: ${props => props.leftWidth + '%'};
  height: 60px;
  background: #ffffff;
  opacity: 0.8;
  z-index: 2;
  position: absolute;
  bottom: 0;
  left: 0;
`;
const ChartDimRight = styled.div`
  width: ${props => props.rightWidth + '%'};
  height: 60px;
  background: #ffffff;
  opacity: 0.8;
  z-index: 2;
  position: absolute;
  bottom: 0;
  right: 0;
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
  const [leftDimWidth, setLeftDimWidth] = useState(minPrice / 5);
  const [rightDimWidth, setRightDimWidth] = useState((500-maxPrice) / 5);

  const handleChange = (event, newPriceRange) => {
    setPriceRange(newPriceRange);
    setLeftDimWidth(newPriceRange[0] / 5);
    setRightDimWidth((500-newPriceRange[1]) / 5);
  };

  const onReset = () => {
    setPriceRange([0, 500]);
    setLeftDimWidth(0);
    setRightDimWidth(0);
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

  const priceDistribution = [5,1,4,11,41,34,31,44,58,36,33,35,24,25,13,17,19,10,2,2,7,4,8,0,0,2,3,4,2,1,2,2,1,1,2,2,1,0,0,0,0,2,1,0,0,0,0,0,3,5];
  const chartWidth = 10 / priceDistribution.length *8;
  const chartMargin = 10 / priceDistribution.length;

  let keyCount = 0;
  const charts = priceDistribution.map((count) =>
      <>
          <ChartDiv count={count} chartWidth={chartWidth} chartMargin={chartMargin} key={keyCount++}></ChartDiv>
      </>
  )

  return (
    <>
      <SliderWrap>
        <ChartWrap>
          <ChartDimLeft leftWidth={leftDimWidth}/>
          <ChartBarWrap>
          {charts}
          </ChartBarWrap>
          <ChartDimRight rightWidth={rightDimWidth}/>
        </ChartWrap>
        <ThemeProvider theme={theme}>
          <Slider
            value={priceRange}
            min={0}
            max={500}
            onChange={handleChange}
            valueLabelDisplay="on"
            ValueLabelComponent={ValueLabelComponent}
          />
        </ThemeProvider>
      </SliderWrap>
      <ResetBtn onClick={onReset}>초기화</ResetBtn>
      <SaveBtn onClick={onSave}>저장</SaveBtn>
    </>
  );
};

export default FormPrice;


function ValueLabelComponent(props) {
  const { children, open, value } = props;
  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={`$${value}`} style={{bottom: '-20px'}}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};
