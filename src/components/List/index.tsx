import { useCallback } from 'react';
import { BiMinusCircle, BiPlusCircle } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { IStoreReducers, StoreDispatch } from '../../_global/store';
import { cartsSlice } from '../../_global/store/modules/carts/cartsSlice';
import { checkProductStockByIdAndAddToCart } from '../../_global/store/modules/carts/cartsThunk';
import { ICartState, IProduct } from '../../_global/store/modules/carts/cartsTypes';
import { Container, Content } from './styled';

export function List() {
  const { items, productOutOfStock } = useSelector<IStoreReducers, ICartState>(
    (state) => state.carts
  );

  const dispatch: StoreDispatch = useDispatch();

  const totals = items.reduce((accumulator, item) => {
    return (accumulator += item.quantity * item.product.price);
  }, 0);

  const handleAddProductQuantityToCard = useCallback(
    (product: IProduct) => {
      dispatch(checkProductStockByIdAndAddToCart(product));
    },
    [dispatch]
  );

  const handleRemoveProductQuantityToCard = useCallback(
    (product: IProduct) => {
      dispatch(cartsSlice.actions.removeProductQuantityToCart(product));
    },
    [dispatch]
  );

  const handleRemoveProductToCard = useCallback(
    (product: IProduct) => {
      dispatch(cartsSlice.actions.removeProductToCart(product));
    },
    [dispatch]
  );

  return (
    <>
      <Container>
        <Content>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th></th>
                <th>Unit price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.product.id}>
                  <td>
                    <img src={item.product.image} alt={item.product.title} />
                  </td>
                  <td>{item.product.title}</td>
                  <td>$ {item.product.price}</td>
                  <td>
                    <div>
                      <BiMinusCircle
                        size={25}
                        onClick={() => handleRemoveProductQuantityToCard(item.product)}
                      />

                      <input readOnly value={item.quantity} />

                      <BiPlusCircle
                        size={25}
                        onClick={() =>
                          !productOutOfStock.includes(item.product.id) &&
                          handleAddProductQuantityToCard(item.product)
                        }
                      />
                    </div>
                    {productOutOfStock.includes(item.product.id) && (
                      <strong>Insufficient stock</strong>
                    )}
                  </td>
                  <td>$ {item.quantity * item.product.price}</td>
                  <td>
                    <BsTrash size={25} onClick={() => handleRemoveProductToCard(item.product)} />
                  </td>
                </tr>
              ))}
            </tbody>

            <tfoot>
              <tr>
                <td colSpan={4}>Total</td>
                <td colSpan={2}>$ {totals.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
        </Content>
      </Container>
    </>
  );
}
