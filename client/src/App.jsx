import SideBar from './components/SideBar';
import { BrowserRouter } from 'react-router-dom';
import TopBarMobile from './components/TopBarMobile';


function App() {

  return (
    <div >
      <div className="flex w-screen h-full text-stone-400 bg-stone-50 text-base font-sans">
        <BrowserRouter>
          <div className='block w-screen h-screen sm:hidden'>
            <TopBarMobile/>
          </div>
          <div className='hidden w-screen sm:flex'>
          <SideBar />
          </div>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
