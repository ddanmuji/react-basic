import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from '@emotion/react';

import { RouterConfig } from './libs';
import { GlobalStyle, darkTheme, lightTheme } from './styles';
import { theme } from './recoil';

const App = () => {
  const isDarkMode = useRecoilValue(theme.isDarkMode);

  return (
    <BrowserRouter>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Suspense fallback={<span>Loading...</span>}>
          <RouterConfig />
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
