import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import Img1 from '../../images/banner5.jpg';
import Img2 from '../../images/banner7.jpg';
import Img3 from '../../images/aventura.jpg';
import './Banner.css';
import { Link } from 'react-router-dom';

class Banner extends Component {
  render() {
    return (
      <section className="slider" id="home">
        <ul className="slides">
          <li>
            <img src={Img1} alt="Vacation" />
            <div className="caption center-align">
              <h2>Escoge el destino</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam non illo earum cumque id est!</h5>
              <Link to="#" className="btn btn-large teal">Ver mas</Link>
            </div>
          </li>
          <li>
            <img src={Img2} alt="Budgets" />
            <div className="caption left-align">
              <h2>Busca el viaje ideal</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam non illo earum cumque id est!</h5>
              <Link to="#" className="btn btn-large teal">Ver mas</Link>
            </div>
          </li>
          <li>
          <img src={Img3} alt="Getaways" />
            <div className="caption right-align">
              <h2>Disfruta de la naturaleza</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam non illo earum cumque id est!</h5>
              <Link to="#" className="btn btn-large teal">Ver mas</Link>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}

export default Banner;