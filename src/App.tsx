import { ThemeProvider } from '@emotion/react';
import { GlobalStyle, theme } from './styles';

const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  </div>
);

export default App;
