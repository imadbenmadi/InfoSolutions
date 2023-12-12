import React from 'react'
import MenuBar from './Components/MenuBar'
import Header from './Components/Header'
import { Outlet } from 'react-router';
export default function App() {
  return (
      <div className="relative h-[100vh] max-h-[100vh] w-[100vw] overflow-hidden ">
          <MenuBar />
          <Header />
          <Outlet />
      </div>
  );
}
