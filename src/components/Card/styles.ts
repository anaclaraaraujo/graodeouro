import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors['gray-300']};
  padding: 0 2rem 2rem;
  border-radius: .6rem 3.6rem;
  
  width: 25.6rem;

  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const CoffeeImg = styled.img`
  margin-top: -2rem;
  max-width: 12rem;
  max-height: 12rem;
  align-self: center;
`;

export const Tags = styled.div`
  margin-top: 1.2rem;

  display: flex;
  align-items: center;
  align-self: center;
  gap: 4px;

  span {
    padding: .4rem .8rem;
    border-radius: 10rem;
    background-color: ${(props) => props.theme.colors['yellow-300']};
    color: ${(props) => props.theme.colors['yellow-700']};
    text-transform: uppercase;

    font-family: ${(props) => props.theme.font.roboto};
    font-size: 1rem;
    line-height: 130%;
    font-weight: 700;
  }
`;

export const Title = styled.h3`
  margin-top: 1.6rem;
  color: ${(props) => props.theme.colors['gray-950']};
  font-family: ${(props) => props.theme.font.baloo};
  font-size: 2rem;
  line-height: 130%;
  font-weight: 700;
`;

export const Description = styled.span`
  margin-top: 8px;
  width: 100%;

  color: ${(props) => props.theme.colors['gray-700']};
  font-family: ${(props) => props.theme.font.roboto};
  font-size: 1.4rem;
  line-height: 130%;
  font-weight: 400;
`;

export const Control = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 3.2rem;
`;

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;

  span:first-child {
    font-family: ${(props) => props.theme.font.roboto};
    font-size: 1.4rem;
    line-height: 130%;
    font-weight: 400;
    
    color: ${(props) => props.theme.colors['gray-800']};
  }

  span:last-child {
    font-family: ${(props) => props.theme.font.baloo};
    font-size: 2.4rem;
    line-height: 130%;
    font-weight: 800;

    color: ${(props) => props.theme.colors['gray-800']};
  }
`;

export const Order = styled.div<{ $itemAdded?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;

  > button {
    background-color: ${({ theme, $itemAdded }) =>
      $itemAdded ? theme.colors['yellow-700'] : theme.colors['purple-700']};
    transition: background-color 0.2s;
    border-radius: 6px;
    padding: 8px;
    display: flex;

    &:hover {
      background-color: ${({ theme, $itemAdded }) =>
        $itemAdded ? theme.colors['yellow-500'] : theme.colors['purple-500']};
    }
  }
`;
