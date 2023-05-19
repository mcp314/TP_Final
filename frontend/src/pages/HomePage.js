import React from "react";
import "../styles/components/pages/Homepage.css"
import Carousel from 'react-bootstrap/Carousel';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="images/car1.png" class="d-block w-100" alt="Foto 1" />
                        </div>
                        <div class="carousel-item">
                            <img src="images/car2.png" class="d-block w-100" alt="Foto 2" />
                        </div>
                        <div class="carousel-item">
                            <img src="images/car3.png" class="d-block w-100" alt="Foto 3" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="columnas">
            <h2>bienvenidos</h2>
                <div className="bienvenidos">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

            </div>
            <div class="container text-center">
        <div class="row">
          <div class="col">
            <div class="card">
              <img src="images/vestidos.png" class="card-img-top" alt="..." />
            
              <div class="card-body">
                <h5 class="card-title">Vestidos</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="images/zapatos.png" class="card-img-top" alt="..." />
            
              <div class="card-body">
                <h5 class="card-title">Zapatos</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="images/carteras.png" class="card-img-top" alt="..." />
            
              <div class="card-body">
                <h5 class="card-title">Carteras</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div> 
        </div>
      </div>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <div class="card">
              <img src="images/bebes.png" class="card-img-top" alt="..." />
            
              <div class="card-body">
                <h5 class="card-title">Bebés</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="images/niñas.png" class="card-img-top" alt="..." />
            
              <div class="card-body">
                <h5 class="card-title">Niñas</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="images/niños.png" class="card-img-top" alt="..." />
            
              <div class="card-body">
                <h5 class="card-title">Niños</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>   
        </div>
      </div>
        </main>

    );
}
export default HomePage;