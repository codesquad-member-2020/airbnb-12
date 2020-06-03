import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { MESSAGE } from '../../constants';

const Summary = styled.p`
  margin-bottom: 15px;
  font-weight: 300;
  > span + span::before {
    content: '∙';
  }
`;
const Title = styled.h2`
  font-weight: bold;
  font-size: 32px;
`;

const SearchTitle = ({ totalCount }) => {
  const { totalGuest, infants } = useSelector(state => state.guest);
  const { checkInDate, checkOutDate } = useSelector(state => state.date);
  const countMessage = totalCount > 100 ? <span>{Math.floor(totalCount / 100) * 100}개 이상의 숙소</span> : <span>{totalCount}개 숙소</span>;
  return (
    <div>
      <Summary>
        {countMessage}
        {checkInDate && <span>{checkOutDate ? `${checkInDate} ~ ${checkOutDate}` : checkInDate}</span>}
        {totalGuest && (
          <span>
            게스트 {totalGuest}명 {infants && `유아 ${infants}명`}
          </span>
        )}
      </Summary>
      <Title>{MESSAGE.TITLE}</Title>
    </div>
  );
};

export default SearchTitle;
