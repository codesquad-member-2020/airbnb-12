import React from 'react'
import Item from './Item'

interface ISearchResultList {
  items: Array<object>;
}

const SearchResultList: React.FunctionComponent<ISearchResultList> = ({items}) => {
  return (
    <div>
      <Item />
    </div>
  )
}

export default SearchResultList
