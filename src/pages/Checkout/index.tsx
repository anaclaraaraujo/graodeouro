import { Fragment, useMemo } from 'react';
import { Bank, CreditCard, CurrencyDollar, MapPin, Money, Trash } from '@phosphor-icons/react';
import { TextInput } from '../../components/TextInput';
import { Radio } from '../../components/Radio';
import { QuantityInput } from '../../components/QuantityInput';
import { useCart } from '../../hooks/useCart';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { coffees } from '../../../data.json';

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
  PaymentErrorMessage,
  PaymentHeading,
  PaymentOptions,
} from './styles';

type FormInputs = {
  cep: number
  street: string
  number: string
  fullAddress: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

const newOrder = z.object({
  cep: z.number({ invalid_type_error: 'Informe o CEP' }),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1, 'Informe o número'),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe a UF'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export type OrderInfo = z.infer<typeof newOrder>

const shippingPrice = 3.5

export function Checkout() {
  const { cart, checkout, incrementItemQuantity, decrementItemQuantity, removeItem } = useCart()

  const coffeesInCart = useMemo(() => {
    return cart.map((item) => {
      const coffeeInfo = coffees.find((coffee) => coffee.id === item.id);

      if (!coffeeInfo) {
        throw new Error('Invalid coffee.')
      }

      return { ...coffeeInfo, quantity: item.quantity };
    }).filter(Boolean);
  }, [cart]);

  const totalItemsPrice = useMemo(() => {
    return coffeesInCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [coffeesInCart]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(newOrder),
  })

  const selectedPaymentMethod = watch('paymentMethod')

  function handleItemIncrement(itemId: string) {
    incrementItemQuantity(itemId)
  }

  function handleItemDecrement(itemId: string) {
    decrementItemQuantity(itemId)
  }

  function handleItemRemove(itemId: string) {
    removeItem(itemId)
  }

  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    if (cart.length === 0) {
      return alert('É preciso ter pelo menos um item no carrinho')
    }

    checkout(data)
  }

  return (
    <Container>
      <div>
        <InfoContainer>
          <h2>Complete seu pedido</h2>

          <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
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
                  error={errors.cep}
                  {...register('cep', { valueAsNumber: true })}
                />

                <TextInput
                  placeholder="Rua"
                  containerProps={{ style: { gridArea: 'street' } }}
                  error={errors.street}
                  {...register('street')}
                />

                <TextInput
                  placeholder="Número"
                  containerProps={{ style: { gridArea: 'number' } }}
                  error={errors.number}
                  {...register('number')}
                />

                <TextInput
                  placeholder="Complemento"
                  optional
                  containerProps={{ style: { gridArea: 'fullAddress' } }}
                  error={errors.fullAddress}
                  {...register('fullAddress')}
                />

                <TextInput
                  placeholder="Bairro"
                  containerProps={{ style: { gridArea: 'neighborhood' } }}
                  error={errors.neighborhood}
                  {...register('neighborhood')}
                />

                <TextInput
                  placeholder="Cidade"
                  containerProps={{ style: { gridArea: 'city' } }}
                  error={errors.city}
                  {...register('city')}
                />

                <TextInput
                  placeholder="UF"
                  maxLength={2}
                  containerProps={{ style: { gridArea: 'state' } }}
                  error={errors.state}
                  {...register('state')}
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
                    $isSelected={selectedPaymentMethod === 'credit'}
                    {...register('paymentMethod')}
                    value="credit"
                  >
                    <CreditCard size={16} />
                    <span>Cartão de crédito</span>
                  </Radio>

                  <Radio
                    $isSelected={selectedPaymentMethod === 'debit'}
                    {...register('paymentMethod')}
                    value="debit"
                  >
                    <Bank size={16} />
                    <span>Cartão de débito</span>
                  </Radio>

                  <Radio
                    $isSelected={selectedPaymentMethod === 'cash'}
                    {...register('paymentMethod')}
                    value="cash"
                  >
                    <Money size={16} />
                    <span>Dinheiro</span>
                  </Radio>
                </div>

                {errors.paymentMethod ? (
                  <PaymentErrorMessage role="alert">
                    {errors.paymentMethod.message}
                  </PaymentErrorMessage>
                ) : null}

              </PaymentOptions>
            </PaymentContainer>
          </form>
        </InfoContainer>

        <InfoContainer>
          <h2>Cafés selecionados</h2>

          <CartTotal>
            {coffeesInCart.length === 0 ? (
              <p>Seu carrinho está vazio. <br /> Adicione itens para continuar.</p>
            ) : (
              coffeesInCart.map((coffee) => (
                <Fragment key={coffee.id}>
                  <Coffee>
                    <div>
                      <img src={coffee.image} alt={coffee.title} />
                      <div>
                        <span>{coffee.title}</span>
                        <CoffeeInfo>
                          <QuantityInput
                            quantity={coffee.quantity}
                            incrementQuantity={() => handleItemIncrement(coffee.id)}
                            decrementQuantity={() => handleItemDecrement(coffee.id)}
                          />
                          <button onClick={() => handleItemRemove(coffee.id)}>
                            <Trash />
                            <span>Remover</span>
                          </button>
                        </CoffeeInfo>
                      </div>
                    </div>
                    <aside>R$ {coffee.price?.toFixed(2)}</aside>
                  </Coffee>
                  <span />
                </Fragment>
              ))
            )}


            <CartTotalInfo>
              <div>
                <span>Total de itens</span>
                <span>
                  {new Intl.NumberFormat('pt-br', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(totalItemsPrice)}
                </span>
              </div>

              <div>
                <span>Entrega</span>
                <span>
                  {new Intl.NumberFormat('pt-br', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(shippingPrice)}
                </span>
              </div>

              <div>
                <span>Total</span>
                <span>
                  {new Intl.NumberFormat('pt-br', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(totalItemsPrice + shippingPrice)}
                </span>
              </div>
            </CartTotalInfo>

            <CheckoutButton
              type="submit"
              form="order"
              disabled={!cart.length || Object.keys(errors).length > 0}
            >
              Confirmar pedido
            </CheckoutButton>

          </CartTotal>
        </InfoContainer>
      </div>
    </Container>
  )
}