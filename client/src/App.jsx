import SideBar from './components/SideBar';
import { BrowserRouter } from 'react-router-dom';


function App() {

  return (
    <div >
      <div className="grid w-full h-screen gap-0"
        style={{
          gridTemplateColumns: '300px auto',
          gridTemplateRows: '80px auto',
          gridTemplateAreas: "'menu search' 'menu content'"
        }}>
        <BrowserRouter>
          <SideBar />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
