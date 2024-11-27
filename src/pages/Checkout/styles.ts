import styled from 'styled-components';

export const Container = styled.label`
  width: 100%;
  margin-top: 10.4rem;
  
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 100%;
    max-width: 111.6rem;

    display: flex;
    gap: 3.2rem;

    @media (max-width: 1024px) {
    padding: 3.2rem 16rem;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 3.2rem 4rem;

  }

  @media (max-width: 480px) {
    padding: 3.2rem 2.4rem;
  }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  h2 {
    ${({ theme }) => theme.fonts.titleXS};
    color: ${({ theme }) => theme.colors['gray-950']};
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }
`;

export const FormsContainer = styled.div`
  padding: 4rem;
  border-radius: 0.6rem;
  background-color: ${({ theme }) => theme.colors['gray-300']};  
  min-width: 64rem;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (min-width: 769px) and (max-width: 1280px) {
    min-width: 40rem;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    min-width: 100%;

    padding: 2rem;
  }
`;

export const AddressContainer = styled(FormsContainer)``;

export const Heading = styled.div`
  display: flex;
  gap: 1rem;

  div {
    span {
      color: ${({ theme }) => theme.colors['gray-900']};
    }

    p {
      ${({ theme }) => theme.fonts.textS};
    }
  }
`;

export const AddressHeading = styled(Heading)`
  svg {
    color: ${({ theme }) => theme.colors['yellow-700']};
    width: 3.2rem;
  }
`;

export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  grid-template-columns: 20rem 1fr 6rem;
  grid-gap: 1.6rem 1.2rem;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;

    width: 100%;
  }
`;

export const PaymentContainer = styled(FormsContainer)``

export const PaymentHeading = styled(Heading)`
  svg {
    color: ${({ theme }) => theme.colors['purple-500']};
    width: 3.2rem;
  }
`;

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.2rem;
  }

  @media (max-width: 768px) {
    > div {
      flex-direction: column;
    }
  }
`;

export const Coffee = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    > img {
      width: 6.4rem;
      height: 6.4rem;
    }

    display: flex;
    align-items: stretch;
    gap: 2rem;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  > aside {
    font-weight: bold;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1.6rem;
    align-items: flex-end;

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      width: 100%;

      > img {
        width: 4.8rem;
        height: 4.8rem;
      }

      > div {
        gap: 1rem;
      }
    }
  }
`;

export const CoffeeInfo = styled.div`
  display: flex;
  gap: .8rem;

  > button {
    padding: 6px 8px;
    background-color: ${({ theme }) => theme.colors['gray-500']};
    border-radius: .6rem;
    display: flex;
    align-items: center;
    gap: .8rem;

    transition: all 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors['gray-600']};
    }

    > svg {
      color: ${({ theme }) => theme.colors['purple-500']};
    }

    > span {
      ${({ theme }) => theme.fonts.buttonM};
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors['gray-800']};
    }
  }
`;

export const CartTotal = styled.div`
  padding: 4rem;
  border-radius: .6rem 3.6rem;
  background-color: ${({ theme }) => theme.colors['gray-300']};
  min-width: 44.8rem;

  > span {
    display: block;
    height: 1px;
    background-color: ${({ theme }) => theme.colors['gray-500']};
    margin: 2.4rem 0;
  }

  p {
    margin-bottom: 1.6rem;
  }


  @media (max-width: 480px) {
    padding: 2rem;
    min-width: 100%;
  }
`;

export const CartTotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-child {
      ${({ theme }) => theme.fonts.textS};
    }

    span:last-child {
      ${({ theme }) => theme.fonts.textM};
    }
  }

  div:last-child {
    span {
      ${({ theme }) => theme.fonts.textL};
      font-weight: bold;
    }
  }
`;

export const CheckoutButton = styled.button`
  margin-top: 2.4rem;
  width: 100%;
  padding: 1.2rem;
  text-transform: uppercase;

  ${({ theme }) => theme.fonts.buttonG};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors['yellow-500']};

  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors['yellow-700']};
  }

  border-radius: 6px;
`;

export const PaymentErrorMessage = styled.p`
  ${({ theme }) => theme.fonts.textXS};
  color: red;
`;