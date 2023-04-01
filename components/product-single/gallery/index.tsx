import { useState } from "react";
import { URL } from "utils/env";

const Gallery = ({ images, image }: any) => {
  const [featImage, setFeatImage] = useState(image?.data.attributes.url);

  return (
    <section className="product-gallery ">
      <div className="product-gallery__thumbs">
        {images?.data?.map((item: any, index: number) => {
          return (
            <div
              key={index}
              onClick={() => {
                setFeatImage(images.data[index].attributes.url);
              }}
              className="product-gallery__thumb cursor-pointer"
            >
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
