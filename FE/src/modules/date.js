const CHECK_IN = 'date/CHECK_IN';
const CHECK_OUT = 'date/CHECK_OUT';

export const checkIn = date => ({ type: CHECK_IN, date });
export const checkOut = date => ({ type: CHECK_OUT, date });

const initialState = {
  checkIn: null,
  checkOut: null,
};

export default function date(state = initialState, action) {
  switch (action.type) {
    case CHECK_IN:
      return {
        ...state,
        checkIn: action.date,
      };
    case CHECK_IN:
      return {
        ...state,
        checkOut: action.date,
      };
    default:
      return state;
  }
}
