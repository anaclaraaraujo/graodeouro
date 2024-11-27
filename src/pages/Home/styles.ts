import styled, { css } from "styled-components";
import bgHero from '/images/bg_hero.svg';

export const Container = styled.section`
  width: 100%;

  margin-top:  10.4rem;
`;

export const Hero = styled.div`
  width: 100%;

  background: url(${bgHero}) no-repeat center;
  background-size: cover;
  padding: 9.2rem 16rem;

  display: flex;
  gap: 5.6rem;
  align-items: center;
  justify-content: space-between;

  img {
    width: 80%;
  }

  @media (max-width: 1024px) {
    img {
      display: none;
    }
  }

  @media (max-width: 768px) {
    padding: 9.2rem 4rem;
  }

  @media (max-width: 480px) {
    padding: 9.2rem 2.4rem;
  }
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

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
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

  align-items: center;

  @media (max-width: 768px) {
    padding: 3.2rem 4rem;
  }

  @media (max-width: 480px) {
    padding: 3.2rem 2.4rem;
  }
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

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 1rem;
  }
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;

  @media (max-width: 480px) {
    width: 100%;
    overflow: scroll;

    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const CoffeeList = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  gap: 3.2rem; */

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const ButtonSeeMore = styled.button`
  width: 32rem;
  padding: 1.6rem 3.2rem;
  text-transform: uppercase;

  ${(props) => props.theme.fonts.buttonG};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors['yellow-500']};

  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.colors['yellow-700']};
  }

  border-radius: 6px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;