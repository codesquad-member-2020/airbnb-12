import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const HeadersWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10%;
`;
const HeadersLogo = styled.h1`
  width: 120px;
  height: 37px;
  text-indent: -999em;
  background: url('data:image/png;base64,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')
    no-repeat;
  background-size: cover;
`;
const HeadersFilterBtn = styled.div`
  font-size: 12px;
  color: #888;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px;
  > span {
    display: inline-block;
    padding: 10px;
    font-weight: 300;
    line-height: 1;
    border-left: 1px solid rgba(0, 0, 0, 0.05);
    cursor: pointer;
    &:first-child {
      border-left: 0;
    }
  }
`;
const HeadersUtils = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 120px;
  > a {
    display: inline-flex;
    align-items: center;
    height: 34px;
    padding: 0 12px;
    font-size: 12px;
    color: #666;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 17px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
    transition: all 0.3s;
    &:hover {
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
    }
    &:first-child {
      border: 1px solid transparent;
      box-shadow: none;
      &:hover {
        border: 1px solid rgba(0, 0, 0, 0.05);
        background: #f9f9f9;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
      }
    }
  }
`;

const SearchHeaders = ({ onOpenForm }) => {
  const { checkInDate, checkOutDate } = useSelector(state => state.date);
  const { totalGuest, infants } = useSelector(state => state.guest);
  const dateCompleted = `${checkInDate} ~ ${checkOutDate}`;
  const infantsMessage = infants ? `, 유아 ${infants}명` : '';
  const onClickDate = () => onOpenForm('date');
  const onClickGuest = () => onOpenForm('guest');
  const onClickPrice = () => onOpenForm('price');
  return (
    <HeadersWrap>
      <HeadersLogo>에어비엔비 로고</HeadersLogo>
      <HeadersFilterBtn>
        <span onClick={onClickDate}>{checkInDate ? (checkOutDate ? dateCompleted : checkInDate) : '날짜'}</span>
        <span onClick={onClickGuest}>{totalGuest ? `게스트 ${totalGuest}명${infantsMessage} ` : '인원'}</span>
        <span onClick={onClickPrice}>요금</span>
      </HeadersFilterBtn>
      <HeadersUtils>
        <a href="#">도움말</a>
        <a href="#">로그인</a>
      </HeadersUtils>
    </HeadersWrap>
  );
};

export default SearchHeaders;
