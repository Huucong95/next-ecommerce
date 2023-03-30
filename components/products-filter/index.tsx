import { useEffect, useState } from "react";
import Checkbox from "./form-builder/checkbox";

import productsTypes from "./../../utils/data/products-types";
import { useRouter } from "next/router";
import { getCategory } from "utils/api";

const ProductsFilter = () => {
  const router = useRouter();
  const {slug} = router.query
  const [categories, setCategories] = useState<any>(null);
  const getMenu = async () => {
    const res2 = await getCategory();

    setCategories(res2);
  };
  useEffect(() => {
    getMenu();
  }, []);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const addQueryParams = () => {
    // query params changes
  };

  return (
    <form className="products-filter" onChange={addQueryParams}>
      <button
        type="button"
        onClick={() => setFiltersOpen(!filtersOpen)}
        className={`products-filter__menu-btn ${
          filtersOpen ? "products-filter__menu-btn--active" : ""
        }`}
      >
        Add Filter <i className="icon-down-open"></i>
      </button>

      <div
        className={`products-filter__wrapper ${
          filtersOpen ? "products-filter__wrapper--open" : ""
        }`}
      >
        <div className="products-filter__block">
          <button type="button">Danh mục</button>
          <div className="products-filter__block__content">
            {categories?.map((item2: any, index2: number) => {
              return (
                <div key={index2} className="py-1">
                  <div className=" font-medium text-sm text-black   hover:text-orange-500 cursor-pointer">
                    <div className="text-black hover:text-black mb-4 border-bottom py-2 font-semibold text-md">
                      {item2.attributes.name}
                    </div>
                    {item2.attributes.category_children?.data.map(
                      (item3: any, index3: any) => {
                        return (
                          <div
                            key={index3}
                            onClick={() =>
                              router.push("/cua-hang/" + item3.attributes.slug)
                            }
                            className={`text-black pl-4 ${slug== item3.attributes.slug ?"text-orange-500":"text-black"} hover:text-orange-500 pb-2`}
                          >
                            {item3.attributes.name}
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              );
            })}
            {/* {productsTypes.map(type => (
              <Checkbox 
                key={type.id} 
                name="product-type" 
                label={type.name} 
              />
            ))} */}
          </div>
        </div>

        {/* <div className="products-filter__block">
          <button type="button">Khoảng giá</button>
          <div className="products-filter__block__content">
            <Range min={0} max={20} defaultValue={[3, 10]} tipFormatter={value => `${value}%`} />
          </div>
        </div> */}

        {/* <div className="products-filter__block">
          <button type="button">Size</button>
          <div className="products-filter__block__content checkbox-square-wrapper">
            {productsSizes.map(type => (
              <Checkbox 
                type="square" 
                key={type.id} 
                name="product-size" 
                label={type.label} />
            ))}
          </div>
        </div> */}

        {/* <div className="products-filter__block">
          <button type="button">Color</button>
          <div className="products-filter__block__content">
            <div className="checkbox-color-wrapper">
              {productsColors.map(type => (
                <CheckboxColor key={type.id} valueName={type.color} name="product-color" color={type.color} />
              ))}
            </div>
          </div>
        </div> */}

        <button
          type="submit"
          className="btn btn-submit btn--rounded btn--yellow"
        >
          Apply
        </button>
      </div>
    </form>
  );
};

export default ProductsFilter;
