import { Minus, Plus } from '@phosphor-icons/react';
import { Container } from './styles';
import { useTheme } from 'styled-components';

export function QuantityInput() {
  const theme = useTheme()

  return (
    <Container>
      <button>
        <Minus weight="bold" size={14} color={theme.colors['purple-500']}/>
      </button>
      <span>1</span>
      <button>
        <Plus weight="bold" size={14} color={theme.colors['purple-500']} />
      </button>
    </Container>
  )
}