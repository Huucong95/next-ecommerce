import Link from "next/link";
// import { URL } from "utils/env";
import Logo from "../../assets/icons/logo";

const Footer = ({ footer }: any) => {
  console.log(footer);

  return (
    <footer className="site-footer shadow-teal-500">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description md:w-[80%] w-full ">
            <h6 className="w-32">
              <Logo />
            </h6>
            <p className="text-black pb-4 text-xl"> {footer?.description}</p>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTP.dung.cu.nong.nghiep&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="340"
              height="130"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              // allowFullScreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>

            {/* <ul className="site-footer__social-networks">
              <ul className="site-footer__social-networks">
                {footer.ListSocial.map((item: any, index: number) => {
                  return (
                    <li key={index}>
                      <a href={item.url} target="_blank">
                        <img
                          className="w-6"
                          src={URL + item.image.data.attributes.url}
                          alt=""
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </ul> */}
            {/* <p className="pt-6 text-black">{footer?.address}</p> */}
          </div>

          <div className="site-footer__links grid grid-cols-2 gap-2  justify-center">
            {footer.items.map((item: any, index: number) => {
              return (
                <ul key={index} className="w-full  ">
                  <li className="text-xl">{item.Name}</li>
                  {item.SubItem.map((item2: any, index: number) => {
                    return (
                      <li key={index} className="w-full">
                        <Link
                          href={
                            item2.type
                              ? item2.type == "email"
                                ? "mailto:" + item2.url
                                : "tel:" + item2.url
                              : item2.url
                          }
                        >
                          {item2.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
        </div>
      </div>

      <div className="site-footer__bottom text-black">
        <div className="container">
          <p>DESIGN BY ThanhPhat - © 2023. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
