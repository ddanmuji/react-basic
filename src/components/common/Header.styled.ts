import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 18px 36px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

export const Title = styled(Link)`
  font-size: ${({ theme }) => theme.titleSizes.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    filter: brightness(80%);
  }
`;

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavItem = styled(Link)<{ active?: number }>`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ active, theme }) => (active ? theme.colors.primary : theme.colors.gray[500])};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
