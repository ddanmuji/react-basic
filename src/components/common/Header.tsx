import { useLocation } from 'react-router-dom';
import { NAV_DATAS } from '../../constants';
import * as S from './Header.styled';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <S.Container>
      <S.Title to="/">React Basic</S.Title>
      <S.NavWrapper>
        {NAV_DATAS.map(({ id, name, to }) => (
          <S.NavItem key={id} to={to} active={pathname === to ? 1 : undefined}>
            {name}
          </S.NavItem>
        ))}
      </S.NavWrapper>
    </S.Container>
  );
};

export default Header;
