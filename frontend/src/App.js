import {BrowserRouter as Router,Routes , Route} from 'react-router-dom';
import './App.css';
import CreateBook from './Pages/CreateBook';
import EditBook from './Pages/EditBook';
import HomePage from './Pages/Homepage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';

function App() {
  return (
    <Router>
      <main className="py-4">
        <Routes>
          <Route path='/' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/home' element={<HomePage/>} />
          <Route path='/create' element={<CreateBook/>} />
          <Route path='/update/:id' element={<EditBook/>} />
          
        </Routes>
      </main>
    </Router>
  );
}

export default App;
