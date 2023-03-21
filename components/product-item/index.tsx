// import Link from "next/link";
import { some } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavProduct } from "store/reducers/user";
import { RootState } from "store";
import { ProductTypeList } from "types";
import { useRouter } from "next/router";

const ProductItem = ({
  discount,
  images,
  id,
  name,
  price,
  currentPrice,
}: ProductTypeList) => {
  const dispatch = useDispatch();
  const router = useRouter();
  console.log(discount);
  
  const { favProducts } = useSelector((state: RootState) => state.user);

  const isFavourite = some(favProducts, (productId) => productId === id);

  const toggleFav = () => {
    dispatch(
      toggleFavProduct({
        id,
      })
    );
  };

  return (
    // <div className="product-item">
    //   <div className="product__image">
    //     <button type="button" onClick={toggleFav} className={`btn-heart ${isFavourite ? 'btn-heart--active' : ''}`}><i className="icon-heart"></i></button>

    //     <Link href={`/product/${id}`}>
    //       <a>
    //         <img src={images ? images[0] : ''} alt="product" />
    //         {discount &&
    //           <span className="product__discount">{discount}%</span>
    //         }
    //       </a>
    //     </Link>
    //   </div>

    //   <div className="product__description">
    //     <h3>{name}</h3>
    //     <div className={"product__price " + (discount ? 'product__price--discount' : '')} >
    //       <h4>{ currentPrice }đ</h4>

    //       {discount &&
    //         <span>{ price }đ</span>
    //       }
    //     </div>
    //   </div>
    // </div>
    // <Link href={`/product/${id}`}>
    <div
      onClick={() => router.push(`/product/${id}`)}
      className="bg-white w-full shadow hover:shadow-lg rounded-lg h-full  relative"
    >
      <div
        className="bg-gray-400 h-64 rounded-t-lg p-4 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url(${images ? images[0] : ""} )`,
        }}
      ></div>
      <div className="flex flex-col justify-items-end pb-24">
        <div>
          <div className="flex  justify-between items-start px-2 pt-2">
            <div className="p-2 flex-grow">
              <h1 className="font-medium text-md font-poppins h-full">
                {name}
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-2">
          <div className="p-2 flex justify-between">
            <div className="text-orange-600 font-semibold text-lg font-poppins">
              {price}đ
            </div>
            <div className="text-xs text-gray-500 line-through font-poppins">
              {currentPrice}đ
            </div>
          </div>
          <div className="flex justify-between items-center  pb-2">
            <div className="flex">
              <div className="flex justify-center items-center p-2">
                <button
                  onClick={toggleFav}
                  className={` ${
                    isFavourite ? "text-orange-600 " : "t"
                  } block w-full bg-gray-100   px-3 py-2 rounded uppercase font-poppins font-medium`}
                >
                  <svg className="w-3 h-3" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex justify-center items-center p-2">
                <button className="block w-full bg-gray-100  text-orange-600  px-3 py-2 rounded uppercase font-poppins font-medium">
                  <svg viewBox="0 0 24 24" className="w-3 h-3">
                    <path
                      fill="currentColor"
                      d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-2">
              <button className="block w-full text-xs bg-gray-100 text-black hover:bg-orange-600 hover:text-white   border-2 border-orange-500 px-3 py-2 rounded uppercase font-poppins font-medium">
                Thêm giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </Link>
  );
};

export default ProductItem;
