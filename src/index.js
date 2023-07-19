import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import About from './pages/About';
import "C:/Users/jbetr/OneDrive/Bureau/projet/projet-6/src/styles";
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home/>
    ),
  },
  {
    path: "about",
    element:( 
    <About/> 
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <div>Test</div>
  <RouterProvider router={router} />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
