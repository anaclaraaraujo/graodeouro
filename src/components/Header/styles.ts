import styled, { css, } from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10.4rem;
  background: ${(props) => props.theme.colors['gray-100']};

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  padding: 3.2rem 16rem;
`;

export const HeaderNav = styled.div`
  display: flex;
  align-items: center;

  gap: 1.6rem;
`;

export const HeaderButton = styled.button<{ $variant: 'purple' | 'yellow' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 3.8rem;
  height: 3.8rem;
  border-radius: 6px;
  border: none;
  padding: 0.8rem 1.6rem;
  position: relative;
  cursor: inherit;

  span {
    position: absolute;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    top: calc(-2rem / 2);
    right: calc(-2rem / 2);
    color: ${(props) => props.theme.colors.white};

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    font-weight: 700;
  }

  ${({ $variant }) => css`
    background: ${(props) => props.theme.colors[`${$variant}-300`]};
    color: ${(props) => props.theme.colors[`${$variant}-700`]};

    span { background: ${(props) => props.theme.colors[`${$variant}-700`]}; }
  `}

  ${({ $variant }) =>
    $variant === 'purple' &&
    css`   
       svg { color: ${(props) => props.theme.colors['purple-700']}; }
    `
  }
`;
