import { Global, css, useTheme } from '@emotion/react';
import emotionReset from 'emotion-reset';

const GlobalStyle = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        ${emotionReset}

        *, *::after, *::before {
          box-sizing: border-box;
          font-family: 'Noto Sans KR', sans-serif;
          font-size: 100%;
          line-height: 1.4;
          color: ${theme.colors.gray[900]};
          transition: color 250ms ease-in-out;
        }

        * {
          user-select: none;
          outline: none;
        }

        body {
          background-color: ${theme.colors.gray[100]};
          transition: background-color 250ms ease-in-out;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
      `}
    />
  );
};

export default GlobalStyle;
