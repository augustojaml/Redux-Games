import { Container } from './styled';

import data from '../../../_global/data/db.json';
import { Button } from '../Button/intex';

interface IItem {
  id: number;
  image: string;
  title: string;
  price: number;
}

interface IItemProps {
  item?: IItem;
}

export function Item({ item = data.products[0] }: IItemProps) {
  return (
    <>
      <Container>
        <img src={item.image} alt={item.title} />
        <div>
          <span>{item.title}</span>
        </div>
        <strong>$ {item.price}</strong>
        <Button title="Add to cart" />
      </Container>
    </>
  );
}
