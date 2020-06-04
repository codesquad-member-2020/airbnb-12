import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { SEARCH_FORM } from '../../constants';
const SearchButtonDiv = styled.div`
  padding: 20px 20%;
`;
const SearchBtn = styled.button`
  width: 33.3%;
  padding: 10px 20px;
  font-size: 16px;
  line-height: 20px;
  text-align: left;
  border: 2px solid transparent;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px;
  background: #fff;
  transition: all 0.1s;
  outline: none;
  &:hover {
    border: 2px solid #eee;
  }
  &.active {
    border: 2px solid #222;
    background: #f9f9f9;
    &:hover {
      border: 2px solid #222;
    }
  }
  > span {
    display: block;
    font-size: 12px;
    color: #888;
  }
`;
const SearchButton = ({ formType, onOpenForm, title, text, viewContents }) => {
  const onClick = () => onOpenForm(formType);
  return (
    <SearchBtn onClick={onClick} className={viewContents === formType ? 'active' : ''}>
      <span>{title}</span>
      {text}
    </SearchBtn>
  );
};
const SearchButtons = ({ onOpenForm, viewContents }) => {
  const { checkInDate, checkOutDate } = useSelector(state => state.date);
  const { totalGuest, infants } = useSelector(state => state.guest);
  const dateCompleted = `${checkInDate} ~ ${checkOutDate}`;
  const infantsMessage = infants ? `, 유아 ${infants}명` : '';
  return (
    <SearchButtonDiv>
      <SearchButton
        viewContents={viewContents}
        formType={SEARCH_FORM.TYPE.DATE}
        title="체크인 / 체크아웃"
        text={checkInDate ? (checkOutDate ? dateCompleted : checkInDate) : '날짜'}
        onOpenForm={onOpenForm}
      />
      <SearchButton
        viewContents={viewContents}
        formType={SEARCH_FORM.TYPE.GUEST}
        title="인원"
        text={totalGuest ? `게스트 ${totalGuest}명${infantsMessage} ` : '인원'}
        onOpenForm={onOpenForm}
      />
      <SearchButton viewContents={viewContents} formType={SEARCH_FORM.TYPE.PRICE} title="요금" text="요금" onOpenForm={onOpenForm} />
    </SearchButtonDiv>
  );
};
export default SearchButtons;
