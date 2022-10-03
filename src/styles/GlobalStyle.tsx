import { Global, css, useTheme } from '@emotion/react';
import emotionReset from 'emotion-reset';
import { FONT_LIST } from '../constants';

interface GlobalStyleProps {
  fontFamily: typeof FONT_LIST[number];
}

const GlobalStyle = ({ fontFamily }: GlobalStyleProps) => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        ${emotionReset}

        *, *::after, *::before {
          box-sizing: border-box;
          font-family: ${fontFamily};
          font-size: 100%;
          line-height: 1.4;
          color: ${theme.colors.gray[900]};
          transition: all 250ms ease-in-out;
        }

        body {
          background-color: ${theme.colors.gray[100]};
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
