import { Outlet } from 'react-router';

import Header from '@shared/ui/layout/header/header';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* Footer */}
    </>
  );
};

export default MainLayout;
