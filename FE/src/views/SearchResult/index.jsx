import React from 'react'
import SearchResultList from '../SearchResultList'
import SearchResultTitle from '../SearchResultTitle'
// getfetch 요청 하여 렌더링 하기위한 컨테이터 (껍데기)

const SearchResult = () => {
  return (
    <div>
      <SearchResultTitle />
      <SearchResultList/>
      {/* <SearchResultTitle count={count} />
      <SearchResultList items={items} /> */}
    </div>
  )
}

export default SearchResult
