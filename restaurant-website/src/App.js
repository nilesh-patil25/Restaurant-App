import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import PageNotFound from './pages/PageNotFound'
import Contact from './pages/Contact'
import Menu from './pages/Menu'


function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/menu" element={<Menu />} />
  <Route path="/*" element={<PageNotFound />} />
  <Route path="/about" element={<About />} />
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
