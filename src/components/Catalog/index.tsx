import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'styled-components';
import { StoreDispatch, IStoreReducers } from '../../_global/store';
import { getProducts } from '../../_global/store/modules/products/productsThunk';
import { IProductState } from '../../_global/store/modules/products/productsTypes';
import { Loading } from '../Loader';
import { Message } from '../Message';
import { Item } from './Item';
import { Container, Content } from './styled';

export function Catalog() {
  const dispatch: StoreDispatch = useDispatch();
  const theme = useTheme();

  const { products, error, isLoading } = useSelector<IStoreReducers, IProductState>(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (error) {
    return (
      <>
        <Message message={error.message} color={theme.colors.danger500} />
      </>
    );
  }

  if (isLoading) {
    return (
      <>
        <Loading padding={1} size={25} color={theme.colors.main002} />
      </>
    );
  }

  return (
    <>
      <Container>
        <Content>
          {products.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </Content>
      </Container>
    </>
  );
}
