import React from 'react'
import '../styles/Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState, useEffect } from 'react';



export const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-off-white">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img src="/Logo.svg" alt="logo" width="70" height="70"/>
          </a>
          <div class="navbar-nav mx-auto">
            <a class="nav-link" href="/">Inicio</a>
            <a class="nav-link" href="/me">Quien Soy</a>
            <a class="nav-link" href="/proyectos">Proyectos</a>
          </div>
        </div>
      </nav>
      
    )
}
