import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import './Reservas.css'

class Reservas extends Component {
  render() {
    return (
      <section className="section section-book teal darken-2 white-text center">
        <div className="container">
        <div className="row">
            <div className="col s12 center">
              <a href="!#" className="btn btn-large waves-effect white teal-text text-darken-3">
                <i className="material-icons left">send</i> Reservar ahora!
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Reservas;