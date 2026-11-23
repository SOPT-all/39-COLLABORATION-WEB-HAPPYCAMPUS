import { Outlet, ScrollRestoration } from 'react-router';

import Footer from './footer/footer';
import Header from './header/header';

import * as styles from './layout.css';

const MainLayout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default MainLayout;
