import SideBar from './components/SideBar';
import { BrowserRouter } from 'react-router-dom';
import TopBarMobile from './components/TopBarMobile';
import SessionProvider from './context/DataContext';


function App() {

  return (
    <div>
      <div className="flex w-screen h-screen text-stone-400 bg-stone-50 text-base font-sans">
        <BrowserRouter>
        <SessionProvider>
          <div className='block w-screen h-screen sm:hidden'>
            <TopBarMobile/>
          </div>
          <div className='hidden w-screen h-screen sm:flex'>
            <SideBar />
          </div>
          </SessionProvider>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
