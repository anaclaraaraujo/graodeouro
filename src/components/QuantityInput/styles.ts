import styled from 'styled-components';

export const Container = styled.div`
  padding: .8rem;
  background-color: ${({ theme }) => theme.colors['gray-500']};
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: .8rem;
  max-width: 7.2rem;
  max-height: 3.8rem;

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
  }

  button svg {
    color: ${({ theme }) => theme.purple};

    transition: all 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors['purple-700']};
    }
  }

  span {
    padding-top: 2px;
    color: ${({ theme }) => theme.colors['gray-950']};
  }
`;