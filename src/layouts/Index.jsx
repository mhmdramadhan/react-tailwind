import { Fragment } from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
};

export default Layout;
