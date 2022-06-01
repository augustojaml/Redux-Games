import { Container } from './styled';

import data from '../../../_global/data/db.json';
import { Button } from '../Button/intex';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { ICartState, IProduct } from '../../../_global/store/modules/carts/cartsTypes';
import { IStoreReducers, StoreDispatch } from '../../../_global/store';
import { checkProductStockByIdAndAddToCart } from '../../../_global/store/modules/carts/cartsThunk';

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
  const dispatch: StoreDispatch = useDispatch();
  const { items, productOutOfStock, isLoading } = useSelector<IStoreReducers, ICartState>(
    (state) => state.carts
  );

  const handleAddProductQuantityToCard = useCallback(
    (product: IProduct) => {
      dispatch(checkProductStockByIdAndAddToCart(product));
    },
    [dispatch]
  );

  const cartItem = items.find((cart) => cart.product.id === item.id);

  const checkStock = productOutOfStock.includes(item.id);

  return (
    <>
      <Container>
        <img src={item.image} alt={item.title} />
        <div>
          <span>{item.title}</span>
        </div>
        <strong>$ {item.price}</strong>
        <Button
          title={checkStock ? 'Out of stock' : 'Add to cart'}
          disabled={checkStock || isLoading}
          onClick={() => handleAddProductQuantityToCard(item)}
          quantity={cartItem?.quantity}
        />
      </Container>
    </>
  );
}
