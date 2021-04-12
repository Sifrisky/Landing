import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Buscar from './components/Buscar/Buscar';
import Explorar from './components/Explorar/Explorar';
import Populares from './components/Populares/Populares';
import Reservas from './components/Reservas/Reservas';
import Galeria from './components/Galeria/Galeria';
import Contacto from './components/Contacto/Contacto';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Fragment>
      <Navbar />
      <Banner />
      <Buscar />
      <Explorar />
      <Populares />
      <Reservas />
      <Galeria />
      <Contacto />
      <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
