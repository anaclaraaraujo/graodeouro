import styled from 'styled-components';

export const Container = styled.label`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.6rem;

  border-radius: .6rem;
  border: 1px solid transparent;
  background-color: ${(props) => props.theme.colors['gray-950']};
  
  ${(props) => props.theme.fonts.buttonM};
  color: ${(props) => props.theme.colors['gray-800']};
  text-transform: uppercase;
  
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.colors['gray-600']};
  }

  &[data-state='true'] {
    background-color: ${(props) => props.theme.colors['purple-300']};
    border-color: ${(props) => props.theme.colors['purple-500']};
  }

  input {
    display: none;
  }

  svg {
    color: ${(props) => props.theme.colors['purple-500']};
  }
`;