
import Login from './Components/login/login';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Components/Home/Navbar/Navbar';
import Category_page from './Components/category page/Category_page';
import Order from './Components/Order page/Order';
import Parent_product from './Components/Home/Parent products/Parent_product';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={Login}></Route>
        <Route path='/Products' Component={Parent_product}></Route>
        <Route path='/category' Component={Category_page}></Route>
        <Route path='/Order' Component={Order}></Route>

      </Routes>
    </div>
  );
}

export default App;
