import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { SEARCH_FORM } from '../../constants';

const SearchButtonDiv = styled.div`
  padding: 20px 0;
`;
const SearchBtn = styled.button`
  width: calc(33.3% - 60px);
`;
const SearchResultBtn = styled.button`
  width: 180px;
`;
const SearchButton = ({ formType, onOpenForm, title }) => {
  const onClick = () => onOpenForm(formType);
  return <SearchBtn onClick={onClick}>{title}</SearchBtn>;
};

const SearchButtons = ({ onOpenForm }) => {
  const { checkInDate, checkOutDate } = useSelector(state => state.date);
  const { totalGuest, infants } = useSelector(state => state.guest);
  const dateCompleted = `${checkInDate} ~ ${checkOutDate}`;
  const infantsMessage = infants ? ` 유아 ${infants}명` : '';
  return (
    <SearchButtonDiv>
      <SearchButton
        formType={SEARCH_FORM.TYPE.DATE}
        title={checkInDate ? (checkOutDate ? dateCompleted : checkInDate) : '날짜'}
        onOpenForm={onOpenForm}
      />
      <SearchButton
        formType={SEARCH_FORM.TYPE.GUEST}
        title={totalGuest ? `게스트 ${totalGuest}명${infantsMessage} ` : '인원'}
        onOpenForm={onOpenForm}
      />
      <SearchButton formType={SEARCH_FORM.TYPE.PRICE} title="요금" onOpenForm={onOpenForm} />
      <SearchResultBtn>검색</SearchResultBtn>
    </SearchButtonDiv>
  );
};

export default SearchButtons;
