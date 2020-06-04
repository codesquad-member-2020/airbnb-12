const CHECK_DATE = 'date/CHECK_DATE';
const RESET = 'date/RESET';

export const checkDate = date => ({ type: CHECK_DATE, date });
export const reset = () => ({ type: RESET });

const initialState = {
  startDate: null,
  endDate: null,
  checkInDate: null,
  checkOutDate: null,
  staying: 1,
};

export default function date(state = initialState, action) {
  switch (action.type) {
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
        staying: getStaying(state.checkInDate, state.checkOutDate)
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

const getStaying = (checkin, checkout) => {
  return (new Date(checkout).getTime() - new Date(checkin).getTime()) / (1000 * 60 * 60 * 24)
}