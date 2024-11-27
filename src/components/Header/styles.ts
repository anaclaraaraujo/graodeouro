import styled, { css, } from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.2rem 16rem;
  
  background: ${({ theme }) => theme.colors['gray-100']};

  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  > div {
    width: 100%;
    max-width: 111.6rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 1024px) {
    padding: 3.2rem 16rem;
  }

  @media (max-width: 768px) {
    padding: 3.2rem 4rem;
  }

  @media (max-width: 480px) {
    padding: 3.2rem 2.4rem;

    img {
      width: 6rem;
    }
  }
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
  padding: 0.8rem;
  position: relative;
  cursor: inherit;

  span {
    position: absolute;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    top: calc(-2rem / 2);
    right: calc(-2rem / 2);
    color: ${({ theme }) => theme.colors.white};

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: 700;
  }

  ${({ $variant }) => css`
    background: ${({ theme }) => theme.colors[`${$variant}-300`]};
    color: ${({ theme }) => theme.colors[`${$variant}-700`]};

    span { background: ${({ theme }) => theme.colors[`${$variant}-700`]}; }
  `}

  ${({ $variant }) =>
    $variant === 'purple' &&
    css`   
       svg { color: ${({ theme }) => theme.colors['purple-700']}; }
    `
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;

    svg {
      width: 1.6rem;
    }
  }
`;