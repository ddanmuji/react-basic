const calcRem = (size: number) => `${size / 16}rem`;

export const fontSizes = {
  xs: calcRem(12),
  sm: calcRem(14),
  md: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
} as const;

export const titleSize = {
  xs: calcRem(22),
  sm: calcRem(24),
  md: calcRem(26),
  lg: calcRem(28),
  xl: calcRem(30),
} as const;
