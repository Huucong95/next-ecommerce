// import { useState } from 'react';
import List from './list';

const ProductsContent = ({products}:any) => {
  // const [orderProductsOpen, setOrderProductsOpen] = useState(false);
  
  return (
    <section className="products-content">
      {/* <div className="products-content__intro">
        <button type="button" onClick={() => setOrderProductsOpen(!orderProductsOpen)} className="products-filter-btn"><i className="icon-filters"></i></button>
        <form className={`products-content__filter ${orderProductsOpen ? 'products-order-open' : ''}`}>
         
        </form>
      </div> */}

      <List products={products} />
    </section>
  );
};
  
export default ProductsContent
  