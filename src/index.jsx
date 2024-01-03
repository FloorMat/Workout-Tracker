import React from "react";
import  ReactDOM  from "react-dom";
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Link
  } from "react-router-dom"
import Layout from "./elements/Layout"
import NewEntry from "./elements/NewEntry";
import Home from "./elements/Home.jsx";
import "./index.css"


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="newEntry" element={<NewEntry />} />
  </Route>
))


function App(){
  return <RouterProvider router={router} />
}
  
ReactDOM.createRoot(document.getElementById("root")).render(<App />)