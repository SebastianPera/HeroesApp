import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from 'react-router-dom';

import { router } from './router/index';
import "./styles.css";
import { AuthProvider } from './auth/context/AuthProvider';

ReactDOM.createRoot(document.getElementById("root")).render(

  <AuthProvider>
    <RouterProvider router={ router }/>
  </AuthProvider>

);
