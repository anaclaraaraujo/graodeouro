import styled from "styled-components";
import bgHero from '/images/bg_hero.svg';

export const Container = styled.section`
  width: 100%;
  margin-top:  10.4rem;
`;

export const Hero = styled.div`
  width: 100%;

  background: url(${bgHero}) no-repeat center;
  background-size: cover;

  padding: 9.2rem 0rem;

  display: flex;
  justify-content: center;

  > div {
    max-width: 111.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    max-width: 32rem;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 6.6rem;

  @media (min-width: 1024px) and (max-width: 1439px)  {
    padding: 0rem 16rem;
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  h1 {
    ${({ theme }) => theme.fonts.titleXL};
    color: ${({ theme }) => theme.colors['gray-950']};
  }

  p {
    ${({ theme }) => theme.fonts.textL};
    color: ${({ theme }) => theme.colors['gray-900']};
  }
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
    padding: 0.8rem;
    border-radius: 50%;
    background: ${({ theme, $variant }) => theme.colors[$variant]};
    color: ${({ theme }) => theme.colors['gray-100']};
  }

  span {
    ${({ theme }) => theme.fonts.textM};
    color: ${({ theme }) => theme.colors['gray-900']};
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
  max-width: 111.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    ${({ theme }) => theme.fonts.titleL};
    color: ${({ theme }) => theme.colors['gray-900']};
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  @media (max-width: 480px) {
    width: 100%;
    overflow-x: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const CoffeeList = styled.div`
max-width: 111.6rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ButtonSeeMore = styled.button`
  width: 32rem;
  padding: 1.6rem 3.2rem;
  text-transform: uppercase;
  border-radius: 6px;

  ${({ theme }) => theme.fonts.buttonG};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors['yellow-500']};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors['yellow-700']};
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;