import * as React from 'react';
import './style.css';
import { Contact } from './components/contact';
import { Home } from './components/home';
import { About } from './components/about';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Contact></Contact>
      <About></About>
      <Home></Home>
      <BrowserRouter>
      
      </BrowserRouter>
    </div>
  );
}
