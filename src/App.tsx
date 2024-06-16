import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { lazy } from 'react';

const Dashboard = lazy(()=> import('./pages/MainDashboard'))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
