import { Minus, Plus } from '@phosphor-icons/react';
import { Container } from './styles';
import { useTheme } from 'styled-components';

type QuantityInputProps = {
  quantity: number,
  incrementQuantity: () => void,
  decrementQuantity: () => void,
}

export function QuantityInput({ quantity, incrementQuantity, decrementQuantity }: QuantityInputProps) {
  const theme = useTheme()

  return (
    <Container>
      <button onClick={decrementQuantity} aria-label="Diminuir quantidade">
        <Minus weight="bold" size={14} color={theme.colors['purple-500']}/>
      </button>
      <span>{quantity}</span>
      <button onClick={incrementQuantity} aria-label="Aumentar quantidade" >
        <Plus weight="bold" size={14} color={theme.colors['purple-500']} />
      </button>
    </Container>
  )
}