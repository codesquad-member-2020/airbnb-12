const OPEN = 'form/OPEN';
const CLOSE = 'form/CLOSE';

export const open = viewContents => ({ type: OPEN, viewContents });
export const close = () => ({ type: CLOSE });

const initialState = {
  isOpen: false,
  viewContents: null,
};

export default function form(state = initialState, action) {
  switch (action.type) {
    case OPEN:
      return {
        ...state,
        isOpen: true,
        viewContents: action.viewContents,
      };
    case CLOSE:
      return {
        ...state,
        isOpen: false,
        viewContents: null,
      };
    default:
      return state;
  }
}
