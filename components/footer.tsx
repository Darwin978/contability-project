import React from "react";
import Link from 'next/link';
import styles from './styles/styles.module.css';

export function Footer() {
    return(
        <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          &copy; {new Date().getFullYear()} UCuenca. All rights reserved.
        </p>
        {/*<nav>*/}
        {/*  <ul className={styles.navList}>*/}
        {/*    <li className={styles.navItem}>*/}
        {/*      <Link href="/reports">*/}
        {/*        <h4 className={styles.navLink}>Home</h4>*/}
        {/*      </Link>*/}
        {/*    </li>*/}
        {/*    <li className={styles.navItem}>*/}
        {/*      <Link href="/biblioteca">*/}
        {/*        <h4 className={styles.navLink}>About</h4>*/}
        {/*      </Link>*/}
        {/*    </li>*/}
        {/*    <li className={styles.navItem}>*/}
        {/*      <Link href="/transactions">*/}
        {/*        <h4 className={styles.navLink}>Contact</h4>*/}
        {/*      </Link>*/}
        {/*    </li>*/}
        {/*  </ul>*/}
        {/*</nav>*/}
      </div>
    </footer>
    )
}