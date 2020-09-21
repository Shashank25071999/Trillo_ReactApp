import React from 'react';

import './App.scss';
import BodyLayout from './Component/BodyLayout/BodyLayout';
import HeaderLayout from './Component/HeaderLayout/HeaderLayout';
import SideBar from './Component/BodyLayout/SideBar/SideBar';
import LayoutContainer from './Container/LayoutContainer/LayoutContainer';
import MainLayout from './Component/BodyLayout/MainLayout/MainLayout';

function App() {
  return (
    <div className="">
      <LayoutContainer>
        <HeaderLayout />
        <BodyLayout>
          <SideBar>
          </SideBar>
          <MainLayout>
          </MainLayout>
        </BodyLayout>

      </LayoutContainer>

    </div>

  );
}

export default App;
