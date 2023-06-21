import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Index';
import Home from './page/home/Index';
import Tentang from './page/tentang';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tentang" element={<Tentang />} />
        </Route>
      </Routes>
    </DataProvider>
  );
}

export default App;
