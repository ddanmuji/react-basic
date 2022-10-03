import { css } from '@emotion/react';
import styled from '@emotion/styled';

const CIRCLE_SIZE = '26px' as const;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  margin-bottom: 30px;
`;

export const Switch = styled.div`
  position: relative;
  width: 60px;
  height: 34px;
  background-color: ${({ theme }) => theme.colors.gray[900]};
  border-radius: 50px;
  cursor: pointer;
`;

export const Circle = styled.span<{ active: boolean }>`
  background-color: ${({ theme }) => theme.colors.gray[200]};
  width: ${CIRCLE_SIZE};
  height: ${CIRCLE_SIZE};
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50px;
  position: absolute;
  left: 5%;
  transition: 250ms;

  ${({ active }) =>
    active &&
    css`
      left: ${`calc(95% - ${CIRCLE_SIZE})`};
    `}
`;

export const SelectBox = styled.div`
  position: relative;
  height: 34px;
`;

export const Select = styled.select`
  font-size: 0.9rem;
  padding: 2px 5px;
  height: 34px;
  width: 200px;
`;
