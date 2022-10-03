import { FC, ReactNode } from 'react';
import * as S from './AppLayout.styled';

interface AppLayoutProps {
  children?: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => <S.Container>{children}</S.Container>;

export default AppLayout;
