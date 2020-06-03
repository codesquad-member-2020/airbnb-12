import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyle';
import Theme from './styles/Theme';
import SearchFormContainer from './containers/SearchFormContainer';
import SearchListContainer from './containers/SearchListContainer';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <SearchFormContainer />
      <SearchListContainer />
    </ThemeProvider>
  );
};

export default App;
