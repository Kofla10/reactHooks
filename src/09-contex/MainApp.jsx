import React from 'react'


import { Navigate, Route, Link, Routes } from 'react-router-dom' //para crear las rutas nos aseguramos de realizar el import
import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage'
import { LoginPage } from './LoginPage'
import { NavBar } from './NavBar'

export const MainApp = () => {
  return (
    <>
        <h1>Main App</h1>
        
        <NavBar/>
        <hr />

        {/* Forma de declarar las rutas */}
        <Routes>
          <Route path="/" element = { <HomePage/> } />
          <Route path="/login" element = { <LoginPage/> } />
          <Route path="/about" element = { <AboutPage/> } />

          {/* esta forma se puede declarar una ruta por defecto en caso tal de que no se encuentre la ruta que se ingreso y usando esta forma la url no se modifica */}
          {/* <Route path='/*' element={ <LoginPage/> } /> */}

          {/* otro caso y el mas recomendado podemos usar el navigate, usando el navigate, la url se modifica con la ruta que le asignemos */}
          <Route path='/*' element={ <Navigate to='/login' /> } />

        </Routes>
    
    </>
  )
}


















