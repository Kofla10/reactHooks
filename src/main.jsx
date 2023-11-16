import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Padre from './07-tarea-memo/Padre'
import { MainApp } from './09-contex/MainApp'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
    {/* <React.StrictMode> */}
      <MainApp/>  
    {/*  </React.StrictMode>, */}
  </BrowserRouter>
)
