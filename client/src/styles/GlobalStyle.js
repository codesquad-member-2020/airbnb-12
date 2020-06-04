import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
    ${reset};
    * {
        box-sizing : border-box;
    }
    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video {
        font-family: 'Montserrat', 'Noto Sans KR', sans-serif;
        letter-spacing: -0.02em;
    }
    a {
        text-decoration: none;
    }
    .DateRangePicker {
        width:100%;
        > div {
            width: 100%;
        }
    }
    .DateRangePickerInput {
        width: 100%;
        background: transparent;

    }
    .DateRangePickerInput__withBorder {
        border: 0;
    }
    .DateRangePickerInput__showClearDates {
        padding-right: 0;
    }
    .DateRangePickerInput_arrow {
        display: none;
    }
    .DayPicker {
        margin: 0 auto;
        box-shadow: none;
        text-align: center;
    }
    .DateInput {
        display:none;
        width:100%;
        background: transparent;
    }
    .DateInput_input,
    .DateInput_input__focused {
        border-bottom: 0;
    }
    .DateInput_input {
        font-size:0;
        background: transparent;
    }
    .CalendarDay__default {
        position:relative;
        vertical-align: middle;
        background: transparent;
        z-index: 1;
    }
    .DateRangePicker_picker {
        position: relative;
        top: 0 !important;
        left: 2px !important;
    }
    .CalendarDay__selected, .CalendarDay__selected:active, .CalendarDay__selected:hover {
        background: transparent;
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
    .CalendarDay__selected_start,
    .CalendarDay__selected_end {
        &::after {
            content:'';
            position: absolute;
            top: 0;
            left: 0%;
            width: 100%;
            height: 100%;
            border-radius: 100px;
            background: #222;
            z-index: -1;
        }
    }
    .CalendarDay__selected_start,
    .CalendarDay__selected_end {
        &::before {
            content:'';
            position: absolute;
            top: 0;
            width: 50%;
            height: 100%;
            background: #f5f5f5;
            z-index: -2;
        }
    }
    .CalendarDay__selected_start::before {
        right:0;
    }
    .CalendarDay__selected_end::before {
        left:0;
    }
    .DateInput_fang {
        display: none;
    }
    .slick-slider {
        overflow: hidden;
        height:0;
        padding-top:66.25%;
        font-size:0;
        border-radius: 5px;
    }
    .slick-list {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .slick-prev, .slick-next {
        z-index: 1;
        &.slick-prev {
            left: 10px;
        }
        &.slick-next {
            right: 10px;
        }
    }
    .slick-track {
        display: flex !important;
        height: 100%;
    }
    .slick-slide > div {
        height: 100%;
    }
    .slick-slide img {
        height: 100%;
    }
`;
