export const colors = {
  primary: '#40a9ff',
  secondary: '#ff9640',
  white: '#ffffff',
  black: '#000000',
} as const;

export const lightColors = {
  ...colors,

  gray: {
    '100': '#f8f9fa',
    '200': '#e9ecef',
    '300': '#dee2e6',
    '400': '#ced4da',
    '500': '#adb5bd',
    '600': '#6c757d',
    '700': '#495057',
    '800': '#343a40',
    '900': '#212529',
  },
} as const;

export const darkColors = {
  ...colors,
  gray: {
    '100': '#212529',
    '200': '#343a40',
    '300': '#495057',
    '400': '#6c757d',
    '500': '#adb5bd',
    '600': '#ced4da',
    '700': '#dee2e6',
    '800': '#e9ecef',
    '900': '#f8f9fa',
  },
} as const;
