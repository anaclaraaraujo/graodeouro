import styled from "styled-components";

interface FilterItemProps {
  $isSelected: boolean;
}

export const Container = styled.button<FilterItemProps>`
  display: flex;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => (
    theme.$isSelected 
    ? 'none' 
    : theme.colors['yellow-700'])};
  
  padding: .6rem 1.2rem;

  background: none;

  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: bold;

  color: ${({ theme })  => (
    theme.$isSelected 
    ? theme.colors["gray-100"]
    : theme.colors['yellow-700'])};

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors['yellow-700']};
    color: ${({ theme }) => theme.colors.white};
  }

  transition: all 0.3s ease;
  
  background-color: ${({ theme })  => (
    theme.$isSelected 
    ? theme.colors['yellow-700'] 
    : 'transparent')};

  white-space: nowrap;
`;