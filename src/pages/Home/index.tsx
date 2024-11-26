import imgHero from '/images/hero.png';
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import { Card } from '../../components/Card';
import { coffees } from '../../../data.json';
import { useMemo, useState } from 'react';
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

  // const coffeeTags = [
  //   'tradicional',
  //   'especial',
  //   'com leite',
  //   'alcoólico',
  //   'gelado',
  // ];

  const filteredCoffees = useMemo(() => {
    return coffees.filter(filterCoffees);
  }, [selectedTag]);

  const coffeeTags = Array.from(new Set(coffees.flatMap(coffee => coffee.tags)));


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
              <ShoppingCart size={32} weight="fill" aria-label="Carrinho de compras" />
              <span>Compra simples e segura</span>
            </Item>
            <Item $variant="gray-800">
              <Package size={32} weight="fill" aria-label="Embalagem segura" />
              <span>Embalagem mantém o café intacto</span>
            </Item>
            <Item $variant="yellow-500">
              <Timer size={32} weight="fill" aria-label="Entrega rápida" />
              <span>Entrega rápida e rastreada</span>
            </Item>
            <Item $variant="purple-500">
              <Coffee size={32} weight="fill" aria-label="Café fresquinho" />
              <span>O café chega fresquinho até você</span>
            </Item>
          </Info>
        </HeroContent>

        <img src={imgHero} alt="Xícara de café e grãos ao fundo" />
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
                onSelect={() => setSelectedTag(tag)}
              />
            ))}
            <FilterItem
              key="todos"
              label="Todos"
              $isSelected={selectedTag === null || selectedTag === ''}
              onSelect={() => setSelectedTag(null)} 
            />
          </Filter>
        </CoffeeHeader>
        <CoffeeList>
          <CoffeeList>
          {filteredCoffees.length > 0 ? (
            filteredCoffees.map(coffee => <Card key={coffee.id} coffee={coffee} />)
          ) : (
            <p>Nenhum café encontrado para os filtros selecionados.</p>
          )}
          </CoffeeList>
        </CoffeeList>
      </CoffeeContainer>
    </Container >
  )
}