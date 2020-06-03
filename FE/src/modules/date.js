// const CHECK_IN = 'date/CHECK_IN';
// const CHECK_OUT = 'date/CHECK_OUT';
const CONFIGURE_DATE = 'date/CONFIGURE_DATE';

// export const checkIn = data => ({ type: CHECK_IN, data });
// export const checkOut = data => ({ type: CHECK_OUT, data });
export const configureDate = data => ({ type: CONFIGURE_DATE, data });

const initialState = {
  checkIn: null,
  checkOut: null,
  staying: 1,
};

export default function date(state = initialState, action) {
  switch (action.type) {
    // case CHECK_IN:
    //   return {
    //     ...state,
    //     checkIn: action.date,
    //   };
    // case CHECK_IN:
    //   return {
    //     ...state,
    //     checkOut: action.date,
    //   };
    case CONFIGURE_DATE:
      return {
        ...state,
        checkIn: action.data.checkIn,
        checkOut: action.data.checkOut,
        staying: getStaying(state.checkIn, state.checkOut)
      }
    default:
      return state;
  }
}

const getStaying = (checkin, checkout) => {
  return (new Date(checkout).getTime() - new Date(checkin).getTime()) / (1000 * 60 * 60 * 24)
}