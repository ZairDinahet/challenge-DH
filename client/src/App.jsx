import SideBar from './components/SideBar';
import { BrowserRouter } from 'react-router-dom';


function App() {

  return (
    <div >
      <div className="flex w-full h-full text-stone-400 bg-stone-50 text-base font-sans">
        <BrowserRouter>
          <SideBar />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
