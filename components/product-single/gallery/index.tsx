import { useState } from "react";
import { URL } from "utils/env";

const Gallery = ({ images, image }: any) => {
  const [featImage, setFeatImage] = useState(image?.data.attributes.url);

  return (
    <section className="product-gallery flex flex-col-reverse md:flex-row gap-2">
      <div className="product-gallery__thumbs flex w-full overflow-x-scroll md:overflow-x-hidden gap-2 ">
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
