import React from 'react';
import NavBar from '../navbar/navBar';
import MyRoutes from '../routes/MyRoutes';
import Search from '../search/Search';
export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
      <MyRoutes />
    </div>
  );
}
