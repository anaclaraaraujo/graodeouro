import imgHero from '/images/hero.png';
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import { Card } from '../../components/Card';
import { coffees } from '../../../data.json';
import { useState } from 'react';
import { FilterItem } from '../../components/Filter';
import { 
  Container,
  Hero,
  HeroContent,
  Heading,
  Info,
  Item,
  CoffeeList,
  CoffeeHeader,
  Filter,
  CoffeeContainer } 
from './styles';

export function Home() {

  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filterCoffees = (coffee: typeof coffees[0]) => {
    if (!selectedTag) return true;
    return coffee.tags.includes(selectedTag);
  }

  const coffeeTags = [
    'tradicional',
    'especial',
    'com leite',
    'alcoólico',
    'gelado',
  ];

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
            {coffeeTags.map(tag => (
              <FilterItem
                key={tag}
                label={tag}
                $isSelected={selectedTag === tag}
                onSelect={setSelectedTag}
              />
            ))}
            <FilterItem
              key="todos"
              label="Todos"
              $isSelected={selectedTag === null || selectedTag === ''}
              onSelect={() => setSelectedTag('')} 
            />
          </Filter>
        </CoffeeHeader>
        <CoffeeList>
          <CoffeeList>
            {coffees.filter(filterCoffees).map((coffee) => (
              <Card key={coffee.id} coffee={coffee} />
            ))}
          </CoffeeList>
        </CoffeeList>
      </CoffeeContainer>
    </Container >
  )
}