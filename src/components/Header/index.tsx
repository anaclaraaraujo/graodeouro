import { NavLink } from 'react-router-dom';
import logo from '/images/logo.svg';
import { HeaderButton, HeaderContainer, HeaderNav } from './styles';
import { MapPin, ShoppingCart } from '@phosphor-icons/react';

export function Header() {
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
            <span>1</span>
          </HeaderButton>
        </NavLink>
      </HeaderNav>
    </HeaderContainer>
  )
}