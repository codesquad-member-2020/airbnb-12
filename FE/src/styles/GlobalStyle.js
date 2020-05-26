import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
    ${reset};
    * {
        box-sizing : border-box;
    }
    body { 
        padding-top: 80px;
    }
    .DateRangePicker {
        > div {
            width: 100%;
        }
    }
    .DateRangePickerInput {
        background: none;
    }
    .DateRangePickerInput__withBorder {
        border: 0;
    }
    .DateRangePickerInput__showClearDates {
        padding-right: 0;
    }
    .DateInput {
        width: calc(50% - 12px)
    }
    .DateInput_input,
    .DateInput_input__focused {
        border-bottom: 0;
    }
    .CalendarDay__default {
        vertical-align: middle;
    }
    .CalendarDay__selected, .CalendarDay__selected:active, .CalendarDay__selected:hover {
        background: ${({ theme: { colors } }) => colors.black};
        border-radius: 50px;
        border: 1px solid #e4e7e7;
    }
    .CalendarDay__selected_span:active, .CalendarDay__selected_span:hover {
        background: ${({ theme: { colors } }) => colors.black};
        border-radius: 50px;
        border: 1px solid #e4e7e7;
        opacity: 0.7;
    }
    .CalendarDay__hovered_span,.CalendarDay__hovered_span:hover,
    .CalendarDay__selected_span {
        color: #484848;
        border: 1px solid #e4e7e7;
        background: ${({ theme: { colors } }) => colors.lightGrey};
    }
`;
