import React from "react";

import "./App.css";
import EditableTable from "./components/tables/EditableTable";
import { createRoot } from "react-dom/client";
  import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./components/ui/Header";
import AllCertificateForm from "./pages/AllCertificateForm";
  

const App: React.FC = () => {

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>
    },
    {
      path: "/certificates",
      element: <AllCertificateForm/>,
    },
  ]);

  return (
    <div>
      <Header/>
      <RouterProvider router={router} />
    </div>
    
  );
};

export default App;
