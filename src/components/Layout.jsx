import React from 'react';
import NavBar from './navBar';
import MyRoutes from './MyRoutes';
export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
      <MyRoutes />
    </div>
  );
}
