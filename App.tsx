import React from 'react';
import {AppContainer} from '~/navigation/AppContainer';
import {ThemeProvider} from '@shopify/restyle';
import restyleTheme from '~/theme';

const App = () => {
  return (
    <ThemeProvider theme={restyleTheme}>
      <AppContainer />
    </ThemeProvider>
  );
};

export default App;
 