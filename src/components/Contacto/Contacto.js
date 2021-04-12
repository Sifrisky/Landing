import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';

class Contacto extends Component {
  render() {
    return (
      <section id="contact" className="section section-contact scrollspy">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <div className="card-panel teal white-text center">
                <i className="material-icons medium">email</i>
                <h5>Agencia de Viajes</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus sed praesentium delectus. Sit, mollitia
                  quo. Veniam repellat voluptas ipsum doloremque?</p>
              </div>
              <ul className="collection with-header">
                <li className="collection-header">
                  <h4>Oficinas</h4>
                </li>
                <li className="collection-item">Agencia de Viajes</li>
                <li className="collection-item"><i class="fas fa-map-marker-alt"></i> 1234 Palermo, Buenos Aires</li>
                <li className="collection-item"><i class="fas fa-phone"></i> (54) 1234-5678</li>
                <li className="collection-item"><i class="fas fa-envelope-square"></i> info@sifritravel.com.ar</li>
              </ul>
            </div>
            <div className="col s12 m6">
              <div className="card-panel grey lighten-3">
                <h5>
                  ¡Escribenos!</h5>
                <form>
                  <div className="input-field">
                    <input type="text" id="name" className="validate" />
                    <label for="name" className="teal-text">Nombre</label>
                  </div>
                  <div className="input-field">
                    <input type="email" id="email" />
                    <label for="email" className="teal-text">Correo Electronico</label>
                  </div>
                  <div className="input-field">
                    <input type="text" id="phone" />
                    <label for="phone" className="teal-text">Telefono</label>
                  </div>
                  <div className="input-field">
                    <textarea className="materialize-textarea" id="message" data-length="120"></textarea>
                    <label for="message" className="teal-text">Mensaje</label>
                  </div>
                  <input type="submit" value="Submit" className="btn teal" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contacto;