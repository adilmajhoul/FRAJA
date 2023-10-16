import React from 'react';
import NavBar from './navBar';
import MyRoutes from './MyRoutes';
import Search from './search/Search';
export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <Search />
      {children}
      <MyRoutes />
    </div>
  );
}
