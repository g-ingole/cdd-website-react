import Nav from './components/Nav';
import './App.css';
import Carousel from './components/Carousel';
import SignUp from './components/SignUp'
import Login from './components/Login'
import { Routes, Route } from 'react-router-dom';
import Thisisus from './components/Thisisus';
import Menu from './components/Menu';
import PrivateComponent from './components/PrivateComponent';
import Contact from './components/Contact';
import CartDetails from './components/CartDetails';
function App() {
  return (
    <div className="App">

      <Nav />
      <Routes>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route element={<PrivateComponent />}>
          <Route path='/home' element={<Carousel />}></Route>
          <Route path="/thisisus" element={<Thisisus />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/cartdetails/:id' element={<CartDetails />}></Route>
        </Route>

      </Routes>


    </div>
  );
}
 
export default App;
