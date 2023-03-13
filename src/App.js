 import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "./mainLayout/mainLayout";
import { Home , AdminPanel} from "./pages";


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="adminPanel" element={<AdminPanel />} />
      </Route>
    </Routes>
  );
}

export default App;
