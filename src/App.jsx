import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';

import About from './pages/About/About';
import Timer from './pages/timer/Timer';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route index path='/' element={<Timer />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
