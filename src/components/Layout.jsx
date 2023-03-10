import { Outlet } from 'react-router-dom';
import Table from './Table';

const Layout = () => {
  return (
    <>
      <Table />
      <Outlet />
    </>
  );
};

export default Layout;
