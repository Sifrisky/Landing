import React, { Component } from 'react';
import Hotel1 from '../../images/london.jpg';
import Hotel2 from '../../images/chicago.jpg';
import Hotel3 from '../../images/ibiza.jpg';
import { HashLink as Link } from 'react-router-hash-link';

class Populares extends Component {
  render() {
    return (
      <section id="adventure" className="section section-popular scrollspy">
        <div className="container">
          <div className="row">
            <h4 className="center">
              <span className="teal-text darken-1">Sifri Travel</span> Aventuras</h4>
            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={Hotel1} alt="" />
                  <span className="card-title">Londres</span>
                  <Link class="btn-floating activator halfway-fab waves-effect waves-light pink accent-2" href="#"><i class="material-icons">+</i></Link>
                </div>
                <div className="card-content">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas aliquid fugiat corporis laudantium, architecto
                    delectus?
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Londres<i class="material-icons right">X</i></span>
                  <p>Mas información sobre este viaje</p>
                </div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={Hotel2} alt="" />
                  <span className="card-title">Chicago</span>
                  <Link class="btn-floating activator halfway-fab waves-effect waves-light pink accent-2"><i class="material-icons">+</i></Link>
                </div>
                <div className="card-content">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas aliquid fugiat corporis laudantium, architecto
                    delectus?
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Chicago<i class="material-icons right">X</i></span>
                  <p>Mas información sobre este viaje</p>
                </div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={Hotel3} alt="" />
                  <span className="card-title">Ibiza</span>
                  <Link class="btn-floating activator halfway-fab waves-effect waves-light pink accent-2"><i class="material-icons">+</i></Link>
                </div>
                <div className="card-content">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas aliquid fugiat corporis laudantium, architecto
                    delectus?
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Ibiza<i class="material-icons right">X</i></span>
                  <p>Mas información sobre este viaje</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Populares;