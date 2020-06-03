import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { configureDate } from '../../modules/date';

const FormDate = () => {
  const dispatch = useDispatch();
  const [dateRange, setdateRange] = useState({
    startDate: null,
    endDate: null,
  });
  const [focus, setFocus] = useState(null);

  const { startDate, endDate } = dateRange;

  const handleOnDateChange = (startDate, endDate) => {
    setdateRange(startDate, endDate);
    dispatch(
      configureDate({
        checkin: startDate,
        checkout: endDate,
      })
    );
  };
  useEffect(() => {
    dateRange.startDate && dateRange.endDate
      ? console.log('[체크인]', dateRange.startDate._d, '[체크아웃]', dateRange.endDate._d)
      // ? handleOnDateChange(dateRange.startDate, dateRange.endDate)
      : console.log('날짜를 선택해주세요.');
  }, [dateRange]);
  return (
    <>
      <DateRangePicker
        startDatePlaceholderText='CheckIn'
        startDate={startDate}
        onDatesChange={handleOnDateChange}
        endDatePlaceholderText='CheckOut'
        endDate={endDate}
        numberOfMonths={2}
        displayFormat='YYYY-MM-DD'
        showClearDates={true}
        focusedInput={focus}
        onFocusChange={focus => setFocus(focus)}
        startDateId='startDateMookh'
        endDateId='endDateMookh'
        minimumNights={0}
        hideKeyboardShortcutsPanel={true}
      />
    </>
  );
};

export default FormDate;
