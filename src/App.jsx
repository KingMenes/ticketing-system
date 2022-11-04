import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Components
import Sidebar from './component/Sidebar';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import NewTicket from './pages/NewTicket'

function App() {
  return (
    <Router>
      <div className='w-full h-full'>
        <Navbar />
        <div className='w-full flex justify-between'>
          <div className='w-1/5'>
            <Sidebar />
          </div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/tickets/create' element={<NewTicket />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
