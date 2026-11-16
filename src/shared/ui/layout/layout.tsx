import { Outlet } from 'react-router';

import Footer from './footer/footer';
import Header from './header/header';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
