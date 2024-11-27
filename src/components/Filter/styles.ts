import styled from "styled-components";

interface FilterItemProps {
  $isSelected: boolean;
}

export const Container = styled.button<FilterItemProps>`
  display: flex;
  border-radius: 999px;
  border: 1px solid ${(props) => (
    props.$isSelected 
    ? 'none' 
    : props.theme.colors['yellow-700'])};
  
  padding: .6rem 1.2rem;

  background: none;

  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: bold;

  color: ${props => (
    props.$isSelected 
    ? props.theme.colors["gray-100"]
    : props.theme.colors['yellow-700'])};

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors['yellow-700']};
    color: ${(props) => props.theme.colors.white};
  }

  transition: all 0.3s ease;
  
  background-color: ${props => (
    props.$isSelected 
    ? props.theme.colors['yellow-700'] 
    : 'transparent')};

  white-space: nowrap;
`;