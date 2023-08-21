import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import List from './components/List';
import Detail from './components/Detail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/actors/:id' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
