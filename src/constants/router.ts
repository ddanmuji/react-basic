export const ROUTE_PATH = {
  ROOT: '/',
  KEYBOARD: '/keyboard',
  TEST2: '/test2',
} as const;

export const PATH_NAME = {
  KEYBOARD: 'keyboard',
} as const;

export const NAV_DATAS = [{ id: 1, to: ROUTE_PATH.KEYBOARD, name: PATH_NAME.KEYBOARD }] as const;
