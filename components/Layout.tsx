import React, { ReactNode } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "SIFCON" }: Props) => (
  <div>
    <Head>
      <link rel="icon" href="/utils/LOGO.ico"/>
    </Head>
    {children}
  </div>
);

export default Layout;
