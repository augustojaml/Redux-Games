import { CartContainer, Container, Content } from './styled';
import { BiShoppingBag } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IStoreReducers } from '../../_global/store';
import { ICartState } from '../../_global/store/modules/carts/cartsTypes';

interface IHeaderProps {
  title?: string;
  quantity?: number;
}

export function Header({ title = 'Header' }: IHeaderProps) {
  const { items } = useSelector<IStoreReducers, ICartState>((state) => state.carts);

  return (
    <>
      <Container>
        <Content>
          <Link to="/">
            <h1>{title}</h1>
          </Link>

          <Link to="/cart">
            <CartContainer>
              <BiShoppingBag />
              {items.length > 0 && (
                <div>
                  <span>{items.length}</span>
                </div>
              )}
            </CartContainer>
          </Link>
        </Content>
      </Container>
    </>
  );
}
