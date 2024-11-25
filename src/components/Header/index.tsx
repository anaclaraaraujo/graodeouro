import { NavLink } from 'react-router-dom';
import logo from '/images/logo.svg';
import { HeaderButton, HeaderContainer, HeaderNav } from './styles';
import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import { useCart } from '../../contexts/CartContext';

export function Header() {
  const { totalItems } = useCart();

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>

      <HeaderNav>
        <HeaderButton $variant="purple">
          <MapPin size={20} weight="fill" />
          Catalão, GO
        </HeaderButton>

        <NavLink to="/checkout" title="Checkout">
          <HeaderButton $variant="yellow">
            <ShoppingCart size={20} weight="fill" />
            {totalItems > 0 ? (
            <span>
              {totalItems}
            </span>
          ) : null}
          </HeaderButton>
        </NavLink>
      </HeaderNav>
    </HeaderContainer>
  )
}