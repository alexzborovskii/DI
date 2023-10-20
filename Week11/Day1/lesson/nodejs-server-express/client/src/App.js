import Products from './components/Products';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Product from './components/Product';
import Nav from './components/Nav';
import LoginRegister from '../src/components/LoginRegister.js'
import {useState, createContext} from 'react';
import { Auth } from './auth/Auth';

export const AppContext = createContext(null);

function App() {
  const [token, setToken] = useState();
  
  return (
    <AppContext.Provider value={({token, setToken})} >
      <Nav />
    <div className="App">
      <Routes>
        <Route path='/' element={<Auth><Products /></Auth>} />
        <Route path='/:id' element={<Product />} />
        <Route path='/login' element={<LoginRegister title="Login" />}/>
        <Route path='/register' element={<LoginRegister title="Register" />}/>
      </Routes>
    </div>

    </AppContext.Provider>
  );
}

export default App;
