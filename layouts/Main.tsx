import Head from "next/head";
import Header from "components/header";
import { useRouter } from "next/router";
import { getCategory, getFooter, getMenus } from "../utils/api";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Footer from "components/footer";
type LayoutType = {
  title?: string;
  children?: React.ReactNode;
};

export default ({ children, title = "Nông cụ " }: LayoutType) => {
  const router = useRouter();
  const [menus, setMenus] = useState(null);
  const [footer, setFooter] = useState(null);
  const [categories, setCategories] = useState(null);
  const [show, setShow] = useState(false);
  const pathname = router.pathname;
  const fetchFooter = async () => {
    try {
      const res = await getFooter();
      console.log(res);
      setFooter(res.attributes);
    } catch (error) {}
  };
  const getMenu = async () => {
    const res = await getMenus();
    const res2 = await getCategory();
    setCategories(res2);
    setMenus(res);
  };
  useEffect(() => {
    getMenu();
    fetchFooter();
  }, []);
  useEffect(() => {
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 1000);
  }, [router]);

  return (
    <div className="app-main">
      <Head>
        <title>{title}</title>
      </Head>
      {categories && <Header menus={menus} categories={categories} />}

      <main className={pathname !== "/" ? "main-page" : ""}>{children}</main>
      <Loading show={show} />
      {footer && <Footer footer={footer} />}
    </div>
  );
};
