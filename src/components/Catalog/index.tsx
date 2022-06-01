import { Item } from './Item';
import { Container, Content } from './styled';

export function Catalog() {
  return (
    <>
      <Container>
        <Content>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </Content>
      </Container>
    </>
  );
}
