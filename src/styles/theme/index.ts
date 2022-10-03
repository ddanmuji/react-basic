import { colors, darkColors, lightColors } from './colors';
import { fontSizes, titleSizes } from './sizes';

const common = { fontSizes, titleSizes };
const light = { colors: lightColors };
const dark = { colors: darkColors };

export { fontSizes, titleSizes, colors };
export const lightTheme = { ...common, ...light };
export const darkTheme = { ...common, ...dark };
