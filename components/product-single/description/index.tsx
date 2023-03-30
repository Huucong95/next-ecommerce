import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { URL } from "utils/env";


const Description = ({content}:any) => {
  

  return (
    <section className="product-single__description">
        {content?.map((item: any, index: number) => {
            return (
              <div key={index} className="content-blog">
                {item.__component === "content.ricktext" && (
                  <ReactMarkdown
                    children={item.ricktext}
                    transformImageUri={(uri) =>
                      uri.startsWith("http")
                        ? uri
                        : `${URL}${uri}`
                    }
                  />
                )}
                {item.__component === "content.video" && (
                  <video className="w-[80%] mx-auto" controls>
                    <source
                      src={
                        process.env.NEXT_PUBLIC_URL + item.video.data.attributes.url
                      }
                      type={item.video.data.attributes.mime}
                    />
                  </video>
                )}
              </div>
            );
          })}
    </section>
  );
};

export default Description;
