import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reset, save } from '../../modules/price';

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

  const onReset = () => {
    setStartPrice("");
    setEndPrice("");
    dispatch(reset());
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
      <input type="number" value={startPrice} onChange={onSetStartPrice} />
      <input type="number" value={endPrice} onChange={onSetEndPrice} />
      <button onClick={onReset}>초기화</button>
      <button onClick={onSave}>저장</button>
    </div>
  )
}

export default FormPrice
