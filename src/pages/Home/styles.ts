import styled, { css } from "styled-components";
import bgHero from '/bg_hero.svg'

export const Container = styled.section`
  width: 100%;
`;

export const Hero = styled.div`
  width: 100%;
  background: url(${bgHero}) no-repeat center;
  background-size: cover;
  padding: 9.4rem 16rem;

  display: flex;
  gap: 5.6rem;
  align-items: center;
  justify-content: space-between;
`;

export const HeroContent = styled.div`
  max-width: 58.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 6.6rem;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  h1 {
    font-size: 4.8rem;
    font-weight: 900;
    line-height: 130%;

    font-family: "Baloo 2", serif;
    color: ${(props) => props.theme.colors['gray-950']};
  }

  p { 
    font-size: 2rem;
    font-weight: 400;

    font-family: "Roboto", serif;
    color: ${(props) => props.theme.colors['gray-900']}
  }
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 2rem;
`;

export const Item = styled.div<{ $variant: 'yellow-700' | 'gray-800' | 'yellow-500' | 'purple-500' }>`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  svg {
    padding: 8px;
    border-radius: 999px;
    color: ${(props) => props.theme.colors['gray-100']};

    ${({ $variant }) => css`
    background: ${(props) => props.theme.colors[`${$variant}`]};
  `}
  }

  span {
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors['gray-900']};
  }
`;



export const CoffeeContainer = styled.section`
  width: 100%;
  padding: 3.2rem 16rem;

  display: flex;
  flex-direction: column;
  gap: 5.4rem;

  
`;

export const CoffeeHeader = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
      font-size: 3.2rem;
      font-weight: 900;
      line-height: 130%;

      font-family: "Baloo 2", serif;
      color: ${(props) => props.theme.colors['gray-900']};
    }
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;
`;


export const FilterItem = styled.button`
  display: flex;
  border-radius: 999px;
  border: 1px solid #DBAC2C;
  
  padding: .6rem 1.2rem;

  background: none;

  text-transform: uppercase;
  color: ${(props) => props.theme.colors['yellow-700']};
  font-size: 1.2rem;
  font-weight: bold;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors['yellow-700']};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25.6rem, 1fr));
  gap: 3.2rem;
`;
