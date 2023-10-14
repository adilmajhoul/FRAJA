import React from 'react';
import NavBar from './navBar';

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}
