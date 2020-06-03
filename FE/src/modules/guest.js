const SAVE = 'guest/SAVE';
const RESET = 'guest/RESET';

export const save = data => ({ type: SAVE, data });
export const reset = () => ({ type: RESET });

const initialState = {
  adults: 0,
  children: 0,
  infants: 0
};

export default function guest(state = initialState, action) {
  switch (action.type) {
    case SAVE:
      if (action.data.adults + action.data.children === 0) alert('인원을 확인해주세요.');
      return {
        ...state,
        adults: action.data.adults,
        children: action.data.children,
        infants: action.data.infants
      }
    case RESET:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
}
