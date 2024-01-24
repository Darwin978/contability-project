import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Menu from "./menu"
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { Footer } from "./footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "SIFCON" }: Props) => (
  <div>
    <header>
      <Menu></Menu>
    </header>
    {children}
    <Footer></Footer>
  </div>
);

export default Layout;
