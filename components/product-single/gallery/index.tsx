import { URL } from "utils/env";

const Gallery = ({ images,image }: any) => {
 
  const featImage = image?.data.attributes.url;

  return (
    <section className="product-gallery">
      <div className="product-gallery__thumbs">
        {images?.data?.map((item: any, index: number) => {
          return (
            <div key={index} className="product-gallery__thumb">
              <img src={URL + item.attributes.url} alt="" />
            </div>
          );
        })}
      </div>

      <div className="product-gallery__image">
        <img src={URL + featImage} alt="" />
      </div>
    </section>
  );
};

export default Gallery;
