import { ShoppingCartSimple } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import { QuantityInput } from '../Form';
import { Container, CoffeeImg, Control, Description, Order, Price, Tags, Title } from './styles';

type Props = {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function Card({ coffee }: Props) {
  const theme = useTheme()

  return (
    <Container>
      <CoffeeImg src={coffee.image} alt={coffee.title} />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <Title>{coffee.title}</Title>
      <Description>{coffee.description}</Description>

      <Control>
        <Price>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </Price>

        <Order>
          <QuantityInput />
          <button>
            <ShoppingCartSimple weight="fill" size={22} color={theme.colors['gray-300']} />
          </button>
        </Order>
      </Control>
    </Container>
  )
}