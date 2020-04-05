import React from 'react';
import { Link } from 'react-router-dom';
import styles from '@/scss/global.module.scss';

function AppNav() {
    return (
      <div className={styles.AppNav}>
        <ul>
          <li><Link to="/">カウンター</Link></li>
          <li><Link to="/qiita">Qiita</Link></li>
          <li><Link to="/graph">グラフ</Link></li>
        </ul>
      </div>
    );
}

export default AppNav;