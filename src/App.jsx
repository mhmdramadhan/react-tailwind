import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Index';
import Home from './page/home/Index';
import Tentang from './page/tentang';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<Tentang />} />
      </Route>
    </Routes>
  );
}

export default App;
