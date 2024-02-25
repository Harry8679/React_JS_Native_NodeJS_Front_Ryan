import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/404';
import Main from './components/nav/Main';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Main />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
