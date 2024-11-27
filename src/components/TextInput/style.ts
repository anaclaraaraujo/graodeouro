import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;
`;

export const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: .6rem;
  border: 1px solid ${({ theme }) => theme.colors['gray-500']};
  border-radius: .6rem;

  background-color: ${({ theme }) => theme.colors['gray-400']};

  transition: all 0.2s;

  &[data-state='focused'] {
    border-color: ${({ theme }) => theme.colors['yellow-700']};
  }

  &[data-state='blurred'] {
    border-color: ${({ theme }) => theme.colors['gray-500']};
  }

  input {
    color: ${({ theme }) => theme.colors['gray-800']};
    width: 100%;
    
    background-color: transparent;
    border: none;
    padding: 1.2rem;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors['gray-700']};
    }
  }

  span {
    color: ${({ theme }) => theme.colors['gray-700']};
    padding-right: 1.2rem;

    ${({ theme }) => theme.fonts.textS};
    font-style: italic;
  }
`;

export const ErrorMessage = styled.p`
  ${({ theme }) => theme.fonts.textXS};
  font-weight: 400;
  color: red;
`;