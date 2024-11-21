import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { HeaderButton, HeaderContainer, HeaderNav } from './styles';
import { MapPin, ShoppingCart } from '@phosphor-icons/react';

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>

      <HeaderNav>
        <HeaderButton variant="purple">
          <MapPin size={20} weight="fill" />
          Catalão, GO
        </HeaderButton>

        <NavLink to="/checkout" title="Checkout">
          <HeaderButton variant="yellow">
            1
            <ShoppingCart size={20} weight="fill" />
          </HeaderButton>
        </NavLink>
      </HeaderNav>
    </HeaderContainer>
  )
}