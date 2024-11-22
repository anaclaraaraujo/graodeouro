import { ShoppingCartSimple } from '@phosphor-icons/react';
import {
  Container,
  CoffeeImg,
  Control,
  Description,
  Order,
  Price,
  Tags,
  Title,
} from './styles';
import { useTheme } from 'styled-components'
import imgCoffee from '/images/mochaccino.png';
import { QuantityInput } from '../Form';

export function Card() {
  const theme = useTheme()

  return (
    <Container>
      <CoffeeImg src={imgCoffee} alt="" />
      <Tags>
        <span>Tradicional</span>
        
        <span>Com leite</span>
      </Tags>
      <Title>Mocaccino</Title>
      <Description>Café expresso com calda de chocolate, pouco leite e espuma</Description>
      <Control>
        <Price>
          <span>R$</span>
          <span>9,90</span>
        </Price>
        <Order>
          <QuantityInput />
          <button>
            {/* <CheckFat weight="fill" size={22}/> color={theme.colors['base-card']} */}
            <ShoppingCartSimple weight="fill" size={22} color={theme.colors['gray-300']} />
          </button>
        </Order>
      </Control>
    </Container>
  )
}