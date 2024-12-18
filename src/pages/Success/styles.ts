import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  max-width: 112rem;
  margin: 10.4rem auto 0;
  padding: 8rem 0;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 4rem;

  img {
    margin-bottom: -1.3rem;
    width: 100%;
  }

  @media (max-width: 1024px) {
    padding: 3.2rem 16rem;

    img {
      width: 50%;
    }
  }

  @media (max-width: 768px) {
    padding: 3.2rem 4rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 3.2rem 2.4rem;
  }
`;

export const Order = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  h2 {
    ${({ theme }) => theme.fonts.titleL};
    color: ${({ theme }) => theme.colors['yellow-700']};
  }

  span {
    ${({ theme }) => theme.fonts.textL};
    color: ${({ theme }) => theme.colors['gray-900']};
  }
`;

export const Info = styled.div`
  border: 1px solid;
  border-radius: .6rem 3.6rem;
  width: 100%;

  border-color: transparent;
  background-origin: border-box;
  background-image: linear-gradient(
    to bottom right,
    ${({ theme }) => theme.colors['yellow-500']},
    ${({ theme }) => theme.colors['purple-500']}
  );
`;

export const InfoContent = styled.div`
  padding: 4rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: .6rem 3.6rem;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    > svg {
      padding: .8rem;
      border-radius: 50%;
    }
  }

  > div div {
    display: flex;
    flex-direction: column;
  }
`;