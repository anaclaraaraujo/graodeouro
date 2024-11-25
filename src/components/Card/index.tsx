import { CheckFat, ShoppingCartSimple } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import { QuantityInput } from '../QuantityInput';
import { Container, CoffeeImg, Control, Description, Order, Price, Tags, Title } from './styles';
import { useEffect, useState } from 'react';
import { useCart } from '../../contexts/CartContext';

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

  useEffect(() => {
    let timeout: number;

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false);
      }, 1000);
    }

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