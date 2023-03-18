 import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "./mainLayout/mainLayout";
import { Home , AdminPanel} from "./pages";
import { Wishlist , Cart } from "./counter";


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="adminPanel" element={<AdminPanel />} />
        <Route path="cart" element={<Cart />} />
        <Route path="wishlist" element={<Wishlist />} />
      </Route>
      <Route path='*' element={<>
        <h1 className='mx-auto  text-7xl text-center pt-20'>
          Page Not Found 404 
        </h1>
      </>} />
    </Routes>
  );
}

export default App;
