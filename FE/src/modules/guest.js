const INCREASE = 'guest/INCREASE';
const DECREASE = 'guest/DECREASE';
const SAVE = 'guest/SAVE';
const RESET = 'guest/RESET';

export const increase = data => ({ type: INCREASE, data });
export const decrease = data => ({ type: DECREASE, data });
export const save = () => ({ type: SAVE });
export const reset = () => ({ type: RESET });

const initialState = {
  adults: 0,
  children: 0,
  infants: 0,
  totalGuest: 0,
};

export default function guest(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      switch (action.data) {
        case 'adults':
          return { ...state, adults: state[action.data] + 1, totalGuest: state.totalGuest + 1 };
        case 'children':
          return { ...state, children: state[action.data] + 1, totalGuest: state.totalGuest + 1 };
        case 'infants':
          return { ...state, infants: state[action.data] + 1 };
        default:
          return state;
      }
    case DECREASE:
      switch (action.data) {
        case 'adults':
          if (state[action.data] === 0) return { ...state };
          return { ...state, adults: state[action.data] - 1, totalGuest: state.totalGuest - 1 };
        case 'children':
          if (state[action.data] === 0) return { ...state };
          return { ...state, children: state[action.data] - 1, totalGuest: state.totalGuest - 1 };
        case 'infants':
          if (state[action.data] === 0) return { ...state };
          return { ...state, infants: state[action.data] - 1 };
        default:
          return state;
      }
    case SAVE:
      if (state.totalGuest === 0) alert('인원을 확인해주세요.');
      console.log('[SAVE]', state);
      return state;
    case RESET:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
}
