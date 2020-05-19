import React, { useState } from 'react';
import FilterButtons from './FilterButtons';
import SearchResultList from './SearchResultList';
import SearchResultTitle from './SearchResultTitle';

const App = () => {
  const [count, setCount] = useState(300);
  const [items, setItems] = useState([]);
  return (
    <div>
      <FilterButtons />
      <SearchResultTitle count={count} />
      <SearchResultList items={items}/>
    </div>
  );
};

export default App;
