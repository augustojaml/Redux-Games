import { BiMinusCircle, BiPlusCircle } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';
import { Container, Content } from './styled';

import data from '../../_global/data/db.json';

export function List() {
  const items = [0, 1, 2];

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
                <tr key={item}>
                  <td>
                    <img src={data.products[0].image} alt={data.products[0].title} />
                  </td>
                  <td>Lorem ipsum dolor sit amet consectetur.</td>
                  <td>$ 150.00</td>
                  <td>
                    <div>
                      <BiMinusCircle size={25} onClick={() => {}} />
                      <input readOnly value={2} />

                      <BiPlusCircle size={25} onClick={() => {}} />
                    </div>
                  </td>
                  <td>$ 300.00</td>
                  <td>
                    <BsTrash size={25} onClick={() => {}} />
                  </td>
                </tr>
              ))}
            </tbody>

            <tfoot>
              <tr>
                <td colSpan={4}>Total</td>
                <td colSpan={2}>$ {(199.0).toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
        </Content>
      </Container>
    </>
  );
}
