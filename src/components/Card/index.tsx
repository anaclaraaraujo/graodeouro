import { CheckFat, ShoppingCartSimple } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import { QuantityInput } from '../QuantityInput';
import { Container, CoffeeImg, Control, Description, Order, Price, Tags, Title } from './styles';
import { useEffect, useState } from 'react';
import { useCart } from '../../hooks/useCart';

type CardProps = {
  coffee: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
  };
};

export function Card({ coffee }: CardProps) {
  const [quantity, setQuantity] = useState(1);
  const [isItemAdded, setIsItemAdded] = useState(false);
  const { addItem } = useCart();
  
  const theme = useTheme();

  function incrementQuantity() {
    setQuantity((state) => state + 1);
  }

  function decrementQuantity() {
    setQuantity((state) => Math.max(state - 1, 1));
  }

  function handleAddItem() {
    if (quantity > 0) {
      addItem({ id: coffee.id, quantity });
      setIsItemAdded(true);
      setQuantity(1);
    }
  }

  useEffect(() => {
    if (isItemAdded) {
      const timeout = setTimeout(() => setIsItemAdded(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [isItemAdded]);

  function formatPrice(price: number): string {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  function renderButtonIcon() {
    if (isItemAdded) {
      return <CheckFat weight="fill" size={22} color={theme.colors['gray-300']} />;
    }

    return <ShoppingCartSimple weight="fill" size={22} color={theme.colors['gray-300']} />;
  }

  return (
    <Container>
      <CoffeeImg src={coffee.image} alt={`Imagem do café ${coffee.title}`} />

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
          <span>{formatPrice(coffee.price)}</span>
        </Price>

        <Order $itemAdded={isItemAdded}>
          <QuantityInput
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />

          <button
            disabled={isItemAdded}
            onClick={handleAddItem}
            aria-label={isItemAdded ? 'Item adicionado ao carrinho' : 'Adicionar item ao carrinho'}
          >
            {renderButtonIcon()}
          </button>
        </Order>
      </Control>
    </Container>
  );
}