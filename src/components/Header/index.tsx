import { CartContainer, Container, Content } from './styled';
import { BiShoppingBag } from 'react-icons/bi';
import { Link } from 'react-router-dom';

interface IHeaderProps {
  title?: string;
  quantity?: number;
}

export function Header({ title = 'Header' }: IHeaderProps) {
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
              <div>
                <span>{0}</span>
              </div>
            </CartContainer>
          </Link>
        </Content>
      </Container>
    </>
  );
}
