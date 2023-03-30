import { useSelector } from 'react-redux';
import { URL } from 'utils/env';
import { formatMoney } from 'utils/format';

const CheckoutItems = () => {
  const { cartItems } = useSelector(state => state.cart);

  return (
    <ul className="checkout-items">
      {cartItems.map((item,index) => (
        <li className="checkout-item" key={index}>
          <div className="checkout-item__content">
            <div className="checkout-item__img">
              <img src={URL+item.thumb} />
            </div>

            <div className="checkout-item__data">
              <h3>{item.name}  x {item.count}</h3>
              <span>#{item.id}</span>
            </div>
          </div>
          <h3>{formatMoney(item.price)}đ</h3>
        </li>
      ))}
    </ul>
  )
};

  
export default CheckoutItems