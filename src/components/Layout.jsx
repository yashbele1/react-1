import Table from './Table';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Table />
      <Outlet />
    </>
  );
};

export default Layout;
