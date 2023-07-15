import { useDispatch } from 'react-redux';
import { removeProduct, setCount } from 'store/reducers/cart';
import { ProductStoreType } from 'types';
import { URL } from 'utils/env';
import { formatMoney } from 'utils/format';
// color, size,
const ShoppingCart = ({ thumb, name, id,  count, price }: ProductStoreType) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(removeProduct(
      { 
        thumb, 
        name, 
        id, 
        // color, 
        // size, 
        count, 
        price
      }
    ))
  }

  const setProductCount = (count: number) => {
    if(count <= 0) {
      return;
    }

    const payload = {
      product: { 
        thumb, 
        name, 
        id, 
    
        count, 
        price
      },
      count,
    }

    dispatch(setCount(payload))
  }

  return (
    <tr className='flex'>
      <td>
        <div className="cart-product">
          <div className="cart-product__img">
            <img src={URL+thumb} alt="" />
          </div>

          <div className="cart-product__content">
            <h3>{name}</h3>
            <p>#{id}</p>
          </div>
        </div>
      </td>
      <td className='cart-item-before' data-label="Số lượng">
        <div className="quantity-button">
          <button type="button" onClick={() => setProductCount(count - 1)} className="quantity-button__btn">
            -
          </button>
          <span>{ count }</span>
          <button type="button" onClick={() => setProductCount(count + 1)} className="quantity-button__btn">
            +
          </button>
        </div>
      </td>
      <td className='cart-item-before' data-label="Đơn giá">{formatMoney(price)}đ</td>
      <td className='cart-item-before' data-label="Thành tiền">{formatMoney(count*price)}đ</td>
      <td className="cart-item-cancel"><i className="icon-cancel" onClick={() => removeFromCart()}></i></td>
    </tr>
  )
};

  
export default ShoppingCart