import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Form from './Component/Form.jsx'
import {Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(<>
    <Route path='/' element={<App/>}></Route>
    <Route path='edit' element={<Form/>}></Route>
  </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
