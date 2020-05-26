import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyle';
import FilterForm from './FilterForm';
import SearchResultTitle from './SearchResultTitle';
import SearchResultList from './SearchResultList';
import Theme from '../styles/Theme';

const App = () => {

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <FilterForm />
      <SearchResultTitle count={count} />
      <SearchResultList items={items} />
    </ThemeProvider>
  );
};

export default App;
