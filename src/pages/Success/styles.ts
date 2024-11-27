import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  max-width: 112rem;

  padding: 8rem 0;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 4rem;

  margin: 10.4rem auto 0 auto;

  img {
    margin-bottom: -1.3rem;
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
  gap: .4rem;

  h2 {
    ${(props) => props.theme.fonts.titleL};
    color: ${(props) => props.theme.colors['yellow-700']};
  }

  span {
    ${(props) => props.theme.fonts.textL};
    color: ${(props) => props.theme.colors['gray-900']};
  }
`;

export const Info = styled.div`
  border: 1px solid;
  border-radius: .6rem 3.6rem;
  width: 100%;

  border-color: transparent;
  background-origin: border-box;
  background-image: ${(props) =>
    `linear-gradient(to bottom right, ${props.theme.colors['yellow-500']}, ${props.theme.colors['purple-500']})`};
`;

export const InfoContent = styled.div`
  padding: 4rem;
  background-color: white;
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