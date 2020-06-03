import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyle';
import FilterForm from './FilterForm';
import SearchResult from './SearchResult';
import Theme from '../styles/Theme';
import FormPrice from './FilterForm/FormPrice'

const App = () => {

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <FilterForm />
      {/* <FormPrice /> */}
      <SearchResult />
    </ThemeProvider>
  );
};

export default App;
