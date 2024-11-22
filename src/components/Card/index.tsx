import { CheckFat, ShoppingCartSimple } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import { QuantityInput } from '../Form/QuantityInput';
import { Container, CoffeeImg, Control, Description, Order, Price, Tags, Title } from './styles';
import { useEffect, useState } from 'react';

type Props = {
  coffee: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
  };
};

export function Card({ coffee }: Props) {
  // Estado para controlar a quantidade do item selecionado
  const [quantity, setQuantity] = useState(1);

  // Estado para indicar se o item foi adicionado ao carrinho
  const [isItemAdded, setIsItemAdded] = useState(false);
  
  const theme = useTheme();

  // Incrementa a quantidade do item
  function incrementQuantity() {
    setQuantity((state) => state + 1);
  }

  // Decrementa a quantidade do item (mantendo no mínimo 1)
  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1);
    }
  }

  // Marca o item como adicionado ao carrinho e reseta a quantidade
  function handleAddItem() {
    setIsItemAdded(true);
    setQuantity(1);
  }

  // Efeito para exibir o estado "adicionado" por 1 segundo
  useEffect(() => {
    let timeout: number;

    if (isItemAdded) {
      // Define um temporizador para resetar o estado após 1 segundo
      timeout = setTimeout(() => {
        setIsItemAdded(false);
      }, 1000);
    }

    // Limpa o temporizador quando o componente for desmontado ou o estado mudar
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isItemAdded]);

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

        <Order $itemAdded={isItemAdded}>
          <QuantityInput
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />

          <button disabled={isItemAdded} onClick={handleAddItem}>
            {isItemAdded ? (
              <CheckFat weight="fill" size={22} color={theme.colors['gray-300']} />
            ) : (
              <ShoppingCartSimple weight="fill" size={22} color={theme.colors['gray-300']} />
            )}
          </button>
        </Order>
      </Control>
    </Container>
  );
}