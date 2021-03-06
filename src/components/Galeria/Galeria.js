import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import './Galeria.css';

const Foto = ({ img, alt }) => {
  return(
    <div className="col s12 m3 marg">
      <img className="materialboxed responsive-img" src={img} alt={alt} />
    </div>
  );
}

class FotoGaleria extends Component {

  state = {
      foto: [
      {
        id: 1,
        img: "https://source.unsplash.com/1600x900/?hotel",
        alt: "hotel"
      },
      {
        id: 2,
        img: "https://source.unsplash.com/1600x900/?restaurant",
        alt: "restaurant"
      },
      {
        id: 3,
        img: "https://source.unsplash.com/1600x900/?nature",
        alt: "nature"
      },
      {
        id: 4,
        img: "https://source.unsplash.com/1600x900/?beach",
        alt: "beach"
      },
      {
        id: 5,
        img: "https://source.unsplash.com/1600x900/?travel",
        alt: "travel"
      },
      {
        id: 6,
        img: "https://source.unsplash.com/1600x900/?city",
        alt: "city"
      },
      {
        id: 7,
        img: "https://source.unsplash.com/1600x900/?adventure",
        alt: "adventure"
      },
      {
        id: 8,
        img: "https://source.unsplash.com/1600x900/?sea",
        alt: "sea"
      },
      {
        id: 9,
        img: "https://source.unsplash.com/1600x900/?building",
        alt: "building"
      },
      {
        id: 10,
        img: "https://source.unsplash.com/1600x900/?climbing",
        alt: "climbing"
      },
      {
        id: 11,
        img: "https://source.unsplash.com/1600x900/?forest",
        alt: "forest"
      },
      {
        id: 12,
        img: "https://source.unsplash.com/1600x900/?resort",
        alt: "resort"
      }
    ]
  }

  render() {
    return (
      <div className="row">
        {this.state.foto.map(gal => (
        <Foto 
        key={gal.id} 
        img={gal.img} 
        alt={gal.alt}
        />
        ))}
      </div>
    );
  }
}





class Galeria extends Component {
  render() {
    return (
      <section id="gallery" className="section section-gallery scrollspy">
        <div className="container">
          <h4 className="center">
            <span className="teal-text darken-1">Galeria</span>de Fotos
          </h4>
          <FotoGaleria />
        </div>
      </section>
    );
  }
}

export default Galeria;