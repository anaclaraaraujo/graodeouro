import { Container } from './styles';

interface FilterItemProps {
  label: string;
  $isSelected: boolean;
  onSelect: (tag: string | null) => void;
}

export function FilterItem({ label, $isSelected, onSelect }: FilterItemProps) {
  return (
    <Container 
      $isSelected={$isSelected} 
      onClick={() => onSelect($isSelected ? null : label)}
    >
      {label}
    </Container>
  );
};