const SAVE = 'price/SAVE';
const RESET = 'price/RESET';
const GET_PRICE_DISTRIBUTION = 'price/GET_PRICE_DISTRIBUTION';

export const save = data => ({ type: SAVE, data });
export const reset = () => ({ type: RESET });
export const getPriceDistribution = data => ({ type: GET_PRICE_DISTRIBUTION, data });

const initialState = {
  priceMin: '',
  priceMax: '',
  priceDistribution: null,
};

export default function price(state = initialState, action) {
  switch (action.type) {
    case SAVE:
      return {
        ...state,
        priceMin: action.data.priceMin,
        priceMax: action.data.priceMax,
      };
    case RESET:
      return {
        ...state,
        ...initialState,
      };
    case GET_PRICE_DISTRIBUTION:
      return {
        ...state,
        priceDistribution: action.data,
      };
    default:
      return state;
  }
}
