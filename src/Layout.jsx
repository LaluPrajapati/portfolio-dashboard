import { Outlet } from 'react-router-dom';

import Sidebar from "./components/Sidebar/Sidebar";


function App() {
  return <div className="portfolio-dashboard">
    <Sidebar />
    <div className='dashboard-content section-bg'>
      <div className='content'>
        <Outlet />
      </div>
    </div>
  </div>
}

export default App
