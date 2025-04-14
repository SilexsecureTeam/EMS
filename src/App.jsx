import './App.css'
import Home1 from './Pages/Home1'
import { Routes, Route } from 'react-router-dom';
import Home2 from './Pages/Home2';
import Home3 from './Pages/Home3';

function App() {

  return (
      <div>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/home3" element={<Home3 />} />
        </Routes>
      </div>
  )
}

export default App
