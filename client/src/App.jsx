import React from 'react';
import SideBar from './components/SideBar';
import ContentWrapper from './components/ContentWrapper';


function App() {

  return (
      <div id="wrapper">
        <div>
          <SideBar />
          <ContentWrapper />
        </div>
      </div>
  )
}

export default App
