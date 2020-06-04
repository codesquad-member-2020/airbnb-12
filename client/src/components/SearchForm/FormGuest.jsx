import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reset, save } from '../../modules/guest';
import { GUEST } from '../../constants';
import styled from 'styled-components';

const FormGuestWrap = styled.div`
  padding: 0 20%;
`;
const GuestCounterWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const GeustCounterDiv = styled.div`
  padding: 20px 40px;
  border-left: 1px solid rgba(0, 0, 0, 0.05);
  p {
    font-size: 16px;
    span {
      display: block;
      margin: 5px 0 10px;
      font-size: 14px;
      color: #888;
    }
  }
  div > span {
    display: inline-block;
    width: 50px;
    text-align: center;
  }
  button {
    width: 30px;
    height: 30px;
    font-size: 16px;
    color: #717171;
    cursor: pointer;
    outline: none;
    border: 1px solid #b7b7b7;
    border-radius: 20px;
    background: #fff;
    &:hover {
      color: #333;
      border: 1px solid #333;
    }
    &:disabled {
      cursor: default;
      color: #ebebeb;
      border: 1px solid #ebebeb;
      &:hover {
        color: #ebebeb;
        border: 1px solid #ebebeb;
      }
    }
  }
  &:first-child {
    border-left: 0;
  }
`;

const GuestCounter = ({ title, subtitle, count, increase, decrease }) => {
  return (
    <GeustCounterDiv>
      <p>
        {title}
        <span>{subtitle}</span>
      </p>
      <div>
        <button onClick={decrease} disabled={count === 0 && true}>
          -
        </button>
        <span>{count}</span>
        <button onClick={increase}>+</button>
      </div>
    </GeustCounterDiv>
  );
};

const FormGuest = () => {
  const dispatch = useDispatch();
  const { adults, children, infants } = useSelector(state => ({
    adults: state.guest.adults,
    children: state.guest.children,
    infants: state.guest.infants,
  }));

  const [count, setCount] = useState({ adults: adults, children: children, infants: infants });

  const onReset = () => {
    setCount({ adults: 0, children: 0, infants: 0 });
    dispatch(reset());
  };
  const onSave = () => dispatch(save(count));

  const onClickDecreaseAdults = () => setCount({ ...count, adults: count.adults ? count.adults - 1 : count.adults });
  const onClickIncreaseAdults = () => setCount({ ...count, adults: count.adults + 1 });

  const onClickDecreaseChildren = () => setCount({ ...count, children: count.children ? count.children - 1 : count.children });
  const onClickIncreaseChildren = () => setCount({ ...count, children: count.children + 1 });

  const onClickDecreaseInfants = () => setCount({ ...count, infants: count.infants ? count.infants - 1 : count.infants });
  const onClickIncreaseInfants = () => setCount({ ...count, infants: count.infants + 1 });

  return (
    <FormGuestWrap>
      <GuestCounterWrap>
        <GuestCounter
          title={GUEST.ADULTS.TITLE}
          subtitle={GUEST.ADULTS.SUBTITLE}
          count={count.adults}
          increase={onClickIncreaseAdults}
          decrease={onClickDecreaseAdults}
        />
        <GuestCounter
          title={GUEST.CHILDREN.TITLE}
          subtitle={GUEST.CHILDREN.SUBTITLE}
          count={count.children}
          increase={onClickIncreaseChildren}
          decrease={onClickDecreaseChildren}
        />
        <GuestCounter
          title={GUEST.INFANTS.TITLE}
          subtitle={GUEST.INFANTS.SUBTITLE}
          count={count.infants}
          increase={onClickIncreaseInfants}
          decrease={onClickDecreaseInfants}
        />
      </GuestCounterWrap>
      <button onClick={onReset}>초기화</button>
      <button onClick={onSave}>저장</button>
    </FormGuestWrap>
  );
};

export default FormGuest;
