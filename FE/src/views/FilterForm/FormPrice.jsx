import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { save } from '../../modules/price';
import styled from 'styled-components';
// import Rheostat from 'rheostat';

// import 'rheostat/initialize';

// import 'rheostat/css/rheostat.css';
// import 'react-dates/lib/css/_datepicker.css';

// import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
// import cssInterface from 'react-with-styles-interface-css';
// import RheostatDefaultTheme from 'rheostat/lib/themes/DefaultTheme';
// import ReactDatesDefaultTheme from 'react-dates/lib/theme/DefaultTheme';

// ThemedStyleSheet.registerInterface(cssInterface);
// ThemedStyleSheet.registerTheme({
//   ...RheostatDefaultTheme,
//   ...ReactDatesDefaultTheme,
// });

const FormPrice = () => {
  const dispatch = useDispatch();
  const { minPrice, maxPrice } = useSelector(state => ({
    minPrice: state.price.priceMin,
    maxPrice: state.price.priceMax
  }));

  const [startPrice, setStartPrice] = useState(minPrice);
  const [endPrice, setEndPrice] = useState(maxPrice);

  const onSetStartPrice = (e) => {
    setStartPrice(e.target.value)
  }

  const onSetEndPrice = (e) => {
    setEndPrice(e.target.value)
  }

  const onSave = () => {
    dispatch(
      save({
        priceMin: startPrice,
        priceMax: endPrice
      })
    );
  }

  return (
    <div>
      <input type="number" onChange={onSetStartPrice} />
      <input type="number" onChange={onSetEndPrice} />
      <button onClick={onSave}>저장</button>
      {/* <Rheostat
        min={1}
        max={100}
        values={[1, 100]}
      /> */}
    </div>
  )
}

export default FormPrice
