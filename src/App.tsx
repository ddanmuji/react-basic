import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

import { RouterConfig } from './libs';
import { GlobalStyle, theme } from './styles';

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Suspense fallback={<span>Loading...</span>}>
        <RouterConfig />
      </Suspense>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
