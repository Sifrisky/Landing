import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import './Buscar.css';

class Buscar extends Component {
  render() {
    return (
      <section id="search" className="section section-search teal white-text center scrollspy">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="input-field">
                <input className="white grey-darken-3-text autocomplete" placeholder="Buscar lugares, hoteles, restaurantes, etc..." type="text" id="autocomplete-input" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Buscar;