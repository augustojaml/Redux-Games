import { BiShapePolygon } from 'react-icons/bi';
import { Banner } from '../../components/Banner';
import { List } from '../../components/List';
import { Container } from './styled';

export function Cart() {
  return (
    <>
      <Container>
        <Banner title="My Shop Game" subtitle="Come and discover our news" icon={BiShapePolygon} />
        <List />
      </Container>
    </>
  );
}
