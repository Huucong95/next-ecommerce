import { useSelector } from 'react-redux';
import CheckoutStatus from '../../components/checkout-status';
import Item from './item';
import { RootState } from 'store';
import { formatMoney } from 'utils/format';

const ShoppingCart = () => {
  const { cartItems } = useSelector((state: RootState)  => state.cart);

  const priceTotal = () => {
    let totalPrice = 0;
    if(cartItems.length > 0) {
      cartItems.map(item => totalPrice += item.price * item.count);
    }

    return totalPrice;
  }

  return (
    <section className="cart">
      <div className="container">
        <div className="cart__intro">
          <h3 className="cart__title">Giỏ hàng</h3>
          <CheckoutStatus step="cart" />
        </div>

        <div className="cart-list">
          {cartItems.length > 0 &&
            <table>
              <tbody>
                <tr>
                  <th style={{textAlign: 'left'}}>Tên sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Đơn giá</th>
                  <th>Thành tiền</th>
                  <th></th>
                </tr>

                {cartItems.map(item => (
                  <Item 
                    key={item.id}
                    id={item.id}
                    thumb={item.thumb}
                    name={item.name}
                    price={item.price}
                    count={item.count}
                  />
                ))}
              </tbody>
            </table> 
          } 
          
          {cartItems.length === 0 && 
            <p>Chưa có sản phẩm nào trong giỏ hàng</p>
          }
        </div>
      
        <div className="cart-actions">
          <a href="/cua-hang" className="cart__btn-back"><i className="icon-left"></i> Tiếp tục mua hàng</a>
          <div className="cart-actions__items-wrapper flex flex-col gap-8">
            <p className="cart-actions__total flex justify-between w-full">Tổng đơn hàng<strong>{formatMoney(priceTotal())}đ</strong></p>
            <a href="/gio-hang/dat-hang" className="btn btn--rounded btn--yellow">Xác nhận đặt hàng</a>
          </div>
        </div>
      </div>
    </section>
  )
};

  
export default ShoppingCart