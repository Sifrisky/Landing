import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';


class Explorar extends Component {
  render() {
    return (
      <section id="explore" className="section section-icons grey lighten-4 center">
        <div className="container">
          <div className="row">
          <h4 className="center">
              <span className="teal-text darken-1">Explorar</span> SIFRI Travel</h4>
            <div className="col s6 m3">
              <div className="card-panel">
                <i className="material-icons medium teal-text">hotel</i>
                <h4>Hoteles</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
              </div>
            </div>
            <div className="col s6 m3">
              <div className="card-panel">
                <i class="material-icons medium teal-text">restaurant</i>
                <h4>Restaurante</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
              </div>
            </div>
            <div className="col s6 m3">
              <div className="card-panel">
                <i className="material-icons medium teal-text">local_cafe</i>
                <h4>Cafeterias</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
              </div>
            </div>
            <div className="col s6 m3">
              <div className="card-panel">
                <i className="material-icons medium teal-text">shopping_basket</i>
                <h4>Shopping</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Explorar;