import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reset, save } from '../../modules/guest';
import { GUEST } from '../../constants';

const FormGuest = () => {
  const dispatch = useDispatch();
  const { adults, children, infants } = useSelector(state => ({
    adults: state.guest.adults,
    children: state.guest.children,
    infants: state.guest.infants
  }));

  const [count, setCount] = useState({ adults: adults, children: children, infants: infants });

  const onReset = () => {
    setCount({ adults: 0, children: 0, infants: 0 })
    dispatch(reset());
  }
  const onSave = () => dispatch(save(count));

  const onClickDecreaseAdults = () => setCount({ ...count, adults: count.adults ? count.adults - 1 : count.adults });
  const onClickIncreaseAdults = () => setCount({ ...count, adults: count.adults + 1 });

  const onClickDecreaseChildren = () => setCount({ ...count, children: count.children ? count.children - 1 : count.children });
  const onClickIncreaseChildren = () => setCount({ ...count, children: count.children + 1 });

  const onClickDecreaseInfants = () => setCount({ ...count, infants: count.infants ? count.infants - 1 : count.infants });
  const onClickIncreaseInfants = () => setCount({ ...count, infants: count.infants + 1 });

  return (
    <div>
      <p>
        {GUEST.ADULTS.TITLE}
        <span>{GUEST.ADULTS.SUBTITLE}</ span>
      </p>
      <div>
        <button onClick={onClickDecreaseAdults}>-</button>
        <span>{count.adults}</span>
        <button onClick={onClickIncreaseAdults}>+</button>
      </div>

      <p>
        {GUEST.CHILDREN.TITLE}
        <span>{GUEST.CHILDREN.SUBTITLE}</ span>
      </p>
      <div>
        <button onClick={onClickDecreaseChildren}>-</button>
        <span>{count.children}</span>
        <button onClick={onClickIncreaseChildren}>+</button>
      </div>

      <p>
        {GUEST.INFANTS.TITLE}
        <span>{GUEST.INFANTS.SUBTITLE}</ span>
      </p>
      <div>
        <button onClick={onClickDecreaseInfants}>-</button>
        <span>{count.infants}</span>
        <button onClick={onClickIncreaseInfants}>+</button>
      </div>

      <button onClick={onReset}>초기화</button>
      <button onClick={onSave}>저장</button>
    </div>
  )
}

export default FormGuest


// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { increase, decrease, reset, save } from '../../modules/guest';
// import { GUEST } from '../../constants';

// const GuestCounter = ({ type, title, subtitle, count, onIncrease, onDecrease }) => {
//   const onClickIncrease = () => onIncrease(type);
//   const onClickDecrease = () => onDecrease(type);

//   return (
//     <div>
//       <p>
//         {title}
//         <span>{subtitle}</span>
//       </p>
//       <div>
//         <button onClick={onClickDecrease}>-</button>
//         <span>{count}</span>
//         <button onClick={onClickIncrease}>+</button>
//       </div>
//     </div>
//   );
// };

// const FormGuest = () => {
//   const dispatch = useDispatch();
//   const { adults, children, infants, totalGuest } = useSelector(state => ({
//     adults: state.guest.adults,
//     children: state.guest.children,
//     infants: state.guest.infants,
//     totalGuest: state.guest.totalGuest,
//   }));
//   const onIncrease = data => dispatch(increase(data));
//   const onDecrease = data => dispatch(decrease(data));
//   const onReset = () => dispatch(reset());
//   const onSave = () => dispatch(save());
//   return (
//     <div>
//       <p>총 인원 : {totalGuest ? totalGuest : 0}</p>
//       <GuestCounter
//         type={GUEST.ADULTS.TYPE}
//         title={GUEST.ADULTS.TITLE}
//         subtitle={GUEST.ADULTS.SUBTITLE}
//         count={adults}
//         onIncrease={onIncrease}
//         onDecrease={onDecrease}
//       />
//       <GuestCounter
//         type={GUEST.CHILDREN.TYPE}
//         title={GUEST.CHILDREN.TITLE}
//         subtitle={GUEST.CHILDREN.SUBTITLE}
//         count={children}
//         onIncrease={onIncrease}
//         onDecrease={onDecrease}
//       />
//       <GuestCounter
//         type={GUEST.INFANTS.TYPE}
//         title={GUEST.INFANTS.TITLE}
//         subtitle={GUEST.INFANTS.SUBTITLE}
//         count={infants}
//         onIncrease={onIncrease}
//         onDecrease={onDecrease}
//       />
//       <button onClick={onReset}>초기화</button>
//       <button onClick={onSave}>저장</button>
//     </div>
//   );
// };

// export default FormGuest;
