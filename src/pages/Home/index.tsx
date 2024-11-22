import imgHero from '/images/hero.png';
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import { Container, Hero, HeroContent, Heading, Info, Item, CoffeeList, CoffeeHeader, Filter, FilterItem, CoffeeContainer } from './styles';
import { Card } from '../../components/Card';


export function Home() {
  return (
    <Container>
      <Hero>
        <HeroContent>
          <Heading>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </Heading>
          <Info>
            <Item $variant="yellow-700">
            <ShoppingCart size={32} weight="fill" />
              <span>Compra simples e segura</span>
            </Item>

            <Item $variant="gray-800">
              <Package size={32} weight="fill" />
              <span>Embalagem mantém o café intacto</span>
            </Item>

            <Item $variant="yellow-500">
              <Timer size={32} weight="fill" />
              <span>Entrega rápida e rastreada</span>
            </Item>

            <Item $variant="purple-500">
              <Coffee size={32} weight="fill" />
              <span>O café chega fresquinho até você</span>
            </Item>
          </Info>

        </HeroContent>
        <img src={imgHero} alt="" />
      </Hero>

      <CoffeeContainer>
        <CoffeeHeader>
        <h1>Nossos cafés</h1>
        <Filter>
          <FilterItem>Tradicional</FilterItem>
          <FilterItem>especial</FilterItem>
          <FilterItem>com leite</FilterItem>
          <FilterItem>alcoólico</FilterItem>
          <FilterItem>gelado</FilterItem>
        </Filter>
        </CoffeeHeader>
        <CoffeeList>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CoffeeList>
      </CoffeeContainer>
    </Container >
  )
}