import Link from "next/link";
import { URL } from "utils/env";
import Logo from "../../assets/icons/logo";

const Footer = ({ footer }: any) => {
  console.log(footer);

  return (
    <footer className="site-footer shadow-teal-500">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description md:w-[33%] w-full ">
            <h6 className="w-32">
              <Logo />
            </h6>
            <p className="text-black"> {footer?.description}</p>

            <div className="fb-page" data-href="https://www.facebook.com/TP.dung.cu.nong.nghiep" data-tabs="" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/TP.dung.cu.nong.nghiep" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/TP.dung.cu.nong.nghiep">Thành Phát - Bạn nhà nông</a></blockquote></div>
            <ul className="site-footer__social-networks">
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
            </ul>
            <p className="pt-6 text-black">{footer?.address}</p>
          </div>

          <div className="site-footer__links grid grid-cols-2 gap-2 ">
            {footer.items.map((item: any, index: number) => {
              return (
                <ul key={index} className="w-full">
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
      <div id="fb-root"></div>
              <script
                async
                defer
                crossOrigin="anonymous"
                src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v16.0"
                nonce="JXSdhVsx"
              ></script>
    </footer>
  );
};

export default Footer;
