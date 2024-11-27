import { NavLink } from 'react-router-dom';
import logo from '/images/logo.svg';
import { HeaderButton, HeaderContainer, HeaderNav } from './styles';
import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import { useCart } from '../../hooks/useCart';

export function Header() {
  const { cart } = useCart();

  return (
    <HeaderContainer>
      <div>
        <NavLink to="/">
          <img src={logo} alt="Logotipo da Coffee Delivery" />
        </NavLink>

        <HeaderNav>
          <HeaderButton $variant="purple">
            <MapPin size={20} weight="fill" />
            Catalão, GO
          </HeaderButton>

          <NavLink to={cart.length > 0 ? "/checkout" : "#"} title="Checkout">
            <HeaderButton $variant="yellow" disabled={cart.length === 0}>
              <ShoppingCart size={20} weight="fill" />
              {cart.length > 0 ? <span>{cart.length}</span> : null}
            </HeaderButton>
          </NavLink>
        </HeaderNav>
      </div>
    </HeaderContainer>
  )
}