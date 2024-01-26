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
      </div>
    </footer>
    )
}