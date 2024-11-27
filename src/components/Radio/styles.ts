import styled from 'styled-components';

export const Container = styled.label`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.6rem;

  border-radius: .6rem;
  border: 1px solid transparent;
  background: ${({ theme }) => theme.colors['gray-500']};
  
  ${({ theme }) => theme.fonts.buttonM};
  color: ${({ theme }) => theme.colors['gray-800']};
  text-transform: uppercase;
  
  transition: all 0.2s;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors['gray-600']};
  }

  &[data-state='true'] {
    background-color: ${({ theme }) => theme.colors['purple-300']};
    border-color: ${({ theme }) => theme.colors['purple-500']};
  }

  input {
    display: none;
  }

  svg {
    color: ${({ theme }) => theme.colors['purple-500']};
  }
`;