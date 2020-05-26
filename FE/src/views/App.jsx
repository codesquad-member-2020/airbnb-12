import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyle';
import FilterForm from './FilterForm';
import SearchResult from './SearchResult';
import Theme from '../styles/Theme';

const App = () => {

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <FilterForm />
      <SearchResult />
    </ThemeProvider>
  );
};

export default App;
