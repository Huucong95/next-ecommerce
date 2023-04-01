import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import useOnClickOutside from "use-onclickoutside";
import Logo from "../../assets/icons/logo/";
import Link from "next/link";
import { useRouter } from "next/router";
import { RootState } from "store";

type HeaderType = {
  isErrorPage?: Boolean;
  menus: any;
  categories: any;
};

const Header = ({ isErrorPage, menus, categories }: HeaderType) => {
  const router = useRouter();
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const arrayPaths = ["/"];

  // const [onTop, setOnTop] = useState(( !arrayPaths.includes(router.pathname) || isErrorPage ) ? false : true);
  const [menuOpen, setMenuOpen] = useState(false);
  // const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef(null);
  // const searchRef = useRef(null);

  // const headerClass = () => {
  //   if(window.pageYOffset === 0) {
  //     setOnTop(true);
  //   } else {
  //     setOnTop(false);
  //   }
  // }

  useEffect(() => {
    if (!arrayPaths.includes(router.pathname) || isErrorPage) {
      return;
    }

    // headerClass();
    // window.onscroll = function() {
    //   headerClass();
    // };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // const closeSearch = () => {
  //   setSearchOpen(false);
  // };

  // on click outside
  useOnClickOutside(navRef, closeMenu);
  // useOnClickOutside(searchRef, closeSearch);

  return (
    // <header className={`site-header ${!onTop ? 'site-header--fixed' : ''}`}>
    <header className={`site-header ${true ? "site-header--fixed" : ""}`}>
      <div className="container">
        <Link href="/">
          <a>
            <h1 className="site-logo w-40 md:w-52">
              <Logo />
            </h1>
          </a>
        </Link>
        <nav
          ref={navRef}
          className={`site-nav flex flex-col pt-2 md:pt-0 md:flex-row gap-3 md:flex ${menuOpen ? "site-nav--open" : ""}`}
        >
          <>
            {menus?.map((item: any, index: number) => {
              return (
                <div
                  className="group relative dropdown  px-4 text-black hover:text-orange-500 cursor-pointer font-bold text-base uppercase tracking-wide"
                  key={index}
                >
                  <div
                    onClick={() => {
                      if (item?.attributes?.items) {
                        router.push("/" + item.attributes.slug);
                      }
                    }}
                  >
                    {item?.attributes.title}
                  </div>
                  {item?.attributes.slug === "cua-hang" ? (
                    <>
                      {categories?.length > 0 && (
                        <div className="group-hover:block dropdown-menu md:absolute hidden h-auto  min-w-max ">
                          <ul className="top-0 w-80 bg-white md:shadow px-6 md:py-8 md:flex gap-8 min-w-max">
                            {categories.map((item2: any, index2: number) => {
                              return (
                                <li key={index2} className="py-1">
                                  <div className=" font-medium text-sm text-black uppercase  hover:text-orange-500 cursor-pointer">
                                    <div className="text-black hover:text-black mb-4 border-bottom">
                                      {item2.attributes.name}
                                    </div>
                                    {item2.attributes.category_children?.data.map(
                                      (item3: any, index3: any) => {
                                        return (
                                          <div
                                            key={index3}
                                            onClick={() =>
                                              router.push("/cua-hang/"+item3.attributes.slug)
                                            }
                                            className="text-black hover:text-orange-500 text-xs pb-2"
                                          >
                                            {item3.attributes.name}
                                          </div>
                                        );
                                      }
                                    )}
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      {item?.attributes?.items?.data.length > 0 && (
                        <div className="group-hover:block dropdown-menu md:absolute hidden h-auto ">
                          <ul className="top-0 min-w-max bg-white md:shadow px-6 md:py-8">
                            {item?.attributes?.items?.data.map(
                              (item2: any, index2: number) => {
                                return (
                                  <li
                                    key={index2}
                                    className="py-1"
                                    onClick={() =>
                                      router.push(item2.attributes.url)
                                    }
                                  >
                                    <div className=" font-medium text-sm text-black uppercase hover:text-orange-500 cursor-pointer">
                                      {item2.attributes.title}
                                    </div>
                                  </li>
                                );
                              }
                            )}
                          </ul>
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </>

          {/* <button className="site-nav__btn">
            <p>Account</p>
          </button> */}
        </nav>

        <div className="site-header__actions">
          {/* <button
            ref={searchRef}
            className={`search-form-wrapper ${
              searchOpen ? "search-form--active" : ""
            }`}
          >
            <form className={`search-form`}>
              <i
                className="icon-cancel"
                onClick={() => setSearchOpen(!searchOpen)}
              ></i>
              <input
                type="text"
                name="search"
                placeholder="Enter the product you are looking for"
              />
            </form>
            <i
              onClick={() => setSearchOpen(!searchOpen)}
              className="icon-search"
            ></i>
          </button> */}
          <Link href="/gio-hang">
            <button className="btn-cart">
              <i className="icon-cart"></i>
              {cartItems.length > 0 && (
                <span className="btn-cart__count">{cartItems.length}</span>
              )}
            </button>
          </Link>
          {/* <Link href="/login">
            <button className="site-header__btn-avatar">
              <i className="icon-avatar"></i>
            </button>
          </Link> */}
          <button
            onClick={() => setMenuOpen(true)}
            className="site-header__btn-menu"
          >
            <i className="btn-hamburger">
              <span></span>
            </i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
