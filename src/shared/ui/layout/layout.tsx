import { Outlet } from 'react-router';

import Footer from './footer/footer';

const MainLayout = () => {
  return (
    <>
      {/* Header */}
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
