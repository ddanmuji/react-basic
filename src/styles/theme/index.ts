import { colors, darkColors, lightColors } from './colors';
import { fontSizes, titleSize } from './sizes';

const common = { fontSizes, titleSize };
const light = { colors: lightColors };
const dark = { colors: darkColors };

export { fontSizes, titleSize, colors };
export const lightTheme = { ...common, ...light };
export const darkTheme = { ...common, ...dark };
