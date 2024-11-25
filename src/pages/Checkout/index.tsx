import { Fragment, useState } from 'react';
import { Bank, CreditCard, CurrencyDollar, MapPin, Money, Trash } from '@phosphor-icons/react';
import { TextInput } from '../../components/TextInput';
import { Radio } from '../../components/Radio';
import {
  AddressContainer,
  AddressForm,
  AddressHeading,
  CartTotal,
  CartTotalInfo,
  CheckoutButton,
  Coffee,
  CoffeeInfo,
  Container,
  InfoContainer,
  PaymentContainer,
  PaymentHeading,
  PaymentOptions,
} from './styles';

import img from '/images/coffees/cafe_com_leite.png';
import { QuantityInput } from '../../components/QuantityInput';
import { useCart } from '../../contexts/CartContext';

export function Checkout() {
  const [quantity, setQuantity] = useState(1);
  const [isItemAdded, setIsItemAdded] = useState(false);
  const { addItem } = useCart();
  function incrementQuantity() {
    setQuantity((state) => state + 1);
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1);
    }
  }

  // Mark item as added to cart and reset quantity
  function handleAddItem() {
    addItem();
    setIsItemAdded(true);
    setQuantity(1);
  }

  return (
    <Container>
      <InfoContainer>
        <h2>Complete seu pedido</h2>

        <form id="order">
          <AddressContainer>
            <AddressHeading>
              <MapPin size={22} />

              <div>
                <span>Endereço de Entrega</span>

                <p>Informe o endereço onde deseja receber o seu pedido</p>
              </div>
            </AddressHeading>

            <AddressForm>
              <TextInput
                placeholder="CEP"
                type="number"
                containerProps={{ style: { gridArea: 'cep' } }}
              />

              <TextInput
                placeholder="Rua"
                containerProps={{ style: { gridArea: 'street' } }}
              />

              <TextInput
                placeholder="Número"
                containerProps={{ style: { gridArea: 'number' } }}
              />

              <TextInput
                placeholder="Complemento"
                optional
                containerProps={{ style: { gridArea: 'fullAddress' } }}
              />

              <TextInput
                placeholder="Bairro"
                containerProps={{ style: { gridArea: 'neighborhood' } }}
              />

              <TextInput
                placeholder="Cidade"
                containerProps={{ style: { gridArea: 'city' } }}
              />

              <TextInput
                placeholder="UF"
                maxLength={2}
                containerProps={{ style: { gridArea: 'state' } }}
              />
            </AddressForm>
          </AddressContainer>

          <PaymentContainer>
            <PaymentHeading>
              <CurrencyDollar size={22} />

              <div>
                <span>Pagamento</span>

                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </PaymentHeading>

            <PaymentOptions>
              <div>
                <Radio
                  $isSelected={true}
                  value="credit"
                >
                  <CreditCard size={16} />
                  <span>Cartão de crédito</span>
                </Radio>

                <Radio
                  $isSelected={true}
                  value="debit"
                >
                  <Bank size={16} />
                  <span>Cartão de débito</span>
                </Radio>

                <Radio
                  $isSelected={true}
                  value="cash"
                >
                  <Money size={16} />
                  <span>Dinheiro</span>
                </Radio>
              </div>
            </PaymentOptions>
          </PaymentContainer>
        </form>
      </InfoContainer>

      <InfoContainer>
        <h2>Cafés selecionados</h2>

        <CartTotal>
          <Fragment>
            <Coffee>
              <div>
                <img src={img} alt="Expresso Tradicional" />

                <div>
                  <span>Expresso Tradicional</span>

                  <CoffeeInfo>
                    <QuantityInput
                      quantity={quantity}
                      incrementQuantity={incrementQuantity}
                      decrementQuantity={decrementQuantity}
                    />
                    <button>
                      <Trash />
                      <span>Remover</span>
                    </button>
                  </CoffeeInfo>
                </div>
              </div>

              <aside>R$ 9,90</aside>
            </Coffee>

            <span />
          </Fragment>

          <CartTotalInfo>
            <div>
              <span>Total de itens</span>
              <span> R$ 9.90 </span>
            </div>

            <div>
              <span>Entrega</span>
              <span> R$ 9.90 </span>
            </div>

            <div>
              <span>Total</span>
              <span> R$ 9.90 </span>
            </div>
          </CartTotalInfo>

          <CheckoutButton type="submit" form="order">
            Confirmar pedido
          </CheckoutButton>
        </CartTotal>
      </InfoContainer>
    </Container>
  )
}