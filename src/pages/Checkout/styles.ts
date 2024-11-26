import styled from 'styled-components';

export const Container = styled.label`
  width: 100%;
  max-width: 112rem;

  margin-top: 10.4rem;

  padding: 4rem 16rem;
  
  display: flex;
  gap: 3.2rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  h2 {
    ${(props) => props.theme.fonts.titleXS};
    color: ${(props) => props.theme.colors['gray-950']};
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }
`;

export const FormsContainer = styled.div`
  padding: 4rem;
  border-radius: .6rem;
  background-color: ${(props) => props.theme.colors['gray-300']};
  width: 100%;
  min-width: 64rem;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const AddressContainer = styled(FormsContainer)``;

export const Heading = styled.div`
  display: flex;
  gap: 8px;

  div {
    span {
      color: ${(props) => props.theme.colors['gray-900']};
    }

    p {
      ${(props) => props.theme.fonts.textS};
    }
  }
`;

export const AddressHeading = styled(Heading)`
  svg {
    color: ${(props) => props.theme.colors['yellow-700']};
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
`;

export const PaymentContainer = styled(FormsContainer)``

export const PaymentHeading = styled(Heading)`
  svg {
    color: ${(props) => props.theme.colors['purple-500']};
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
`;

export const CoffeeInfo = styled.div`
  display: flex;
  gap: .8rem;

  > button {
    padding: 6px 8px;
    background-color: ${(props) => props.theme.colors['gray-500']};
    border-radius: .6rem;
    display: flex;
    align-items: center;
    gap: .8rem;

    transition: all 0.2s;

    &:hover {
      background-color: ${(props) => props.theme.colors['gray-600']};
    }

    > svg {
      color: ${(props) => props.theme.colors['purple-500']};
    }

    > span {
      ${(props) => props.theme.fonts.buttonM};
      text-transform: uppercase;
      color: ${(props) => props.theme.colors['gray-800']};
    }
  }
`;

export const CartTotal = styled.div`
  padding: 4rem;
  border-radius: .6rem 3.6rem;
  background-color: ${(props) => props.theme.colors['gray-300']};
  width: 100%;
  min-width: 44.8rem;

  > span {
    display: block;
    height: 1px;
    background-color: ${(props) => props.theme.colors['gray-500']};
    margin: 2.4rem 0;
  }

  p {
    margin-bottom: 1.6rem;
  }
`

export const CartTotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-child {
      ${(props) => props.theme.fonts.textS};
    }

    span:last-child {
      ${(props) => props.theme.fonts.textM};
    }
  }

  div:last-child {
    span {
      ${(props) => props.theme.fonts.textL};
      font-weight: bold;
    }
  }
`

export const CheckoutButton = styled.button`
  margin-top: 2.4rem;
  width: 100%;
  padding: 1.2rem;
  text-transform: uppercase;

  ${(props) => props.theme.fonts.buttonG};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors['yellow-500']};

  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.colors['yellow-700']};
  }

  border-radius: 6px;
`;

export const PaymentErrorMessage = styled.p`
  ${(props) => props.theme.fonts.textXS};
  font-weight: 400;
  color: red;
`;