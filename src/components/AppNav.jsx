import React from 'react';
import { Link } from 'react-router-dom';
import styles from '@/scss/global.module.scss';

function AppNav() {
    return (
      <div className={styles.AppNav}>
        <Link to="/">A</Link>
        <Link to="/b">B</Link>
        <Link to="/c">C</Link>
      </div>
    );
}

export default AppNav;