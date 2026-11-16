import { Outlet } from 'react-router';

import Footer from './footer/footer';

import * as styles from './layout.css';

const MainLayout = () => {
  return (
    <div className={styles.container}>
      {/* Header */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
