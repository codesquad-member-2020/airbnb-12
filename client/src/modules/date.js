const CHECK_IN = 'date/CHECK_IN';
const CHECK_OUT = 'date/CHECK_OUT';
const CHECK_DATE = 'date/CHECK_DATE';
const RESET = 'date/RESET';

export const checkIn = date => ({ type: CHECK_IN, date });
export const checkOut = date => ({ type: CHECK_OUT, date });
export const checkDate = date => ({ type: CHECK_DATE, date });
export const reset = () => ({ type: RESET });

const initialState = {
  startDate: null,
  endDate: null,
  checkInDate: null,
  checkOutDate: null,
};

export default function date(state = initialState, action) {
  switch (action.type) {
    case CHECK_IN:
      return {
        ...state,
        checkInDate: action.date,
      };
    case CHECK_OUT:
      return {
        ...state,
        checkOutDate: action.date,
      };
    case CHECK_DATE:
      let checkIn,
        checkOut = null;
      if (action.date.startDate) {
        const year = action.date.startDate._d.getFullYear();
        const month = action.date.startDate._d.getMonth() + 1;
        const day = action.date.startDate._d.getDate();
        checkIn = `${year}-${('00' + month.toString()).slice(-2)}-${('00' + day.toString()).slice(-2)}`;
      }
      if (action.date.endDate) {
        const year = action.date.endDate._d.getFullYear();
        const month = action.date.endDate._d.getMonth() + 1;
        const day = action.date.endDate._d.getDate();
        checkOut = `${year}-${('00' + month.toString()).slice(-2)}-${('00' + day.toString()).slice(-2)}`;
      }
      return {
        ...state,
        ...action.date,
        checkInDate: checkIn,
        checkOutDate: checkOut,
      };
    case RESET:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
}
