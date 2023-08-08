import Login from './Components/login/login';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Category_page from './Components/category page/Category_page';
import Order from './Components/Order page/Order';
import Parent_product from './Components/Home/Parent products/Parent_product';
import Add_category from './Components/category page/Add_category';
import Edit_category from './Components/category page/Edit_category';
import Add_products from './Components/Home/products/Add_products';
import Edit_product from './Components/Home/products/Edit_product';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Products" element={<Parent_product />}></Route>
        <Route path='/products/add-products' element={<Add_products/>}/>
        <Route path='products/edit-products/:id' element={<Edit_product/>}/>
        <Route path="/category" element={<Category_page />}></Route>
        <Route path='/category/add-category' element={<Add_category/>}></Route>
        <Route path='/category/edit-category/:id' element={<Edit_category/>}/>
        <Route path="/Order" element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;
