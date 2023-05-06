import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Login from './components/Login';
import Subscribe from './components/Subscribe';
import Billing from './components/Billing';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (

    <> 
      <BrowserRouter> 
          <NavBar></NavBar>
        <Routes>
          <Route path='/' element={
            <> 
              <Banner></Banner>
              <Movies></Movies>
            </>
          }>
          </Route>
          <Route path='/login' element= {
            <Login></Login>
          }>
          </Route>
          <Route path='/subscribe' element= {
            <Subscribe></Subscribe>
          }>
          </Route>
          <Route path='/billing' element= {
            <Billing></Billing>
          }>
          </Route>
          <Route path='/movies' element= {
            <Movies></Movies>
          }>
          </Route>

        </Routes>
      
      </BrowserRouter>



  
    </>
  );
}

export default App;
