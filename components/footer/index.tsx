import Link from "next/link";
import { URL } from "utils/env";
import Logo from "../../assets/icons/logo";

const Footer = ({ footer }: any) => {
  console.log(footer);

  return (
    <footer className="site-footer shadow-teal-500">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6>
              <Logo />
            </h6>
            <p>{footer?.description}</p>
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
            <p className="pt-6">{footer?.address}</p>
          </div>

          <div className="site-footer__links">
            {footer.items.map((item: any, index: number) => {
              return (
                <ul key={index}>
                  <li>{item.Name}</li>
                  {item.SubItem.map((item2: any, index: number) => {
                    return (
                      <li key={index}>
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

      <div className="site-footer__bottom">
        <div className="container">
          <p>DESIGN BY ThanhPhat - © 2023. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
