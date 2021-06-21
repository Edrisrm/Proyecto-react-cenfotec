import React from "react";
import './Principal.css'
import carousel1 from '../../assets/carousel1.jpg';
import carousel2 from '../../assets/carousel2.jpg';
import carousel3 from '../../assets/carousel3.jpg';

function Principal() {
  return (
    <div className="">
      <div className="row">
        <div className="col-lg-12 init-section ">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={carousel1} class="d-block w-100" alt="Carousel_1"/>
            <div class="carousel-caption d-none d-md-block">
              <h1>Guarda detalles valiosos de tu vida.</h1>
              <p>Almacena todos esos momentos innolvidables de tu vida diaria con My agenda.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={carousel2} class="d-block w-100" alt="Carousel_2"/>
            <div class="carousel-caption d-none d-md-block">
              <h1>Organiza tus citas importantes.</h1>
              <p>!Haz recordatorios de citas y eventos importantes como reuniones o entrevistas!.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={carousel3} class="d-block w-100" alt="Carousel_3"/>
            <div class="carousel-caption d-none d-md-block">
              <h1>Lleva un recuento de todas las cosas que te suceden.</h1>
              <p>Haz uso de My agenda como si fuera tu diario personal y apunta todos los acontecimientos que suceden en tu día a día.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

        </div>
      </div>
      <div className="row ">
          <div className="col-lg-12 second-section d-flex align-items-center flex-column">
            <h2 className="mt-5 ">¿Quieres ver o crear eventos?</h2>
            <hr className="sep-3"/>
            <p className="m-5 mt-1 mb-1">Puedes crear eventos o valiosos recuerdos que te han sucedido. 
            También puedes disfrutar de todos los eventos que te han sucedido, como un gran albúm personal.</p>
            <hr className="sep-3"/>
            <button type="button" class="btn btn-primary btn-lg mt-3 mb-3">Ir a Evento</button>
          </div>
      </div>
      <div className="row ">
          <div className="col-lg-12 third-section d-flex align-items-center flex-column">
              <h2 className="mt-5 ">¿Tienes tareas o recordatios pendientes?</h2>
              <hr className="sep-3"/>
              <p className="m-5 mt-1 mb-1">Anota todos tus recordarios, trabajos, tareas y fechas importantes y agendariza todos tus proyectos.</p>
              <hr className="sep-3"/>
              <button type="button" class="btn btn-primary btn-lg mt-3 mb-3">Ir a Tarea</button>
          </div>
      </div>
    </div>
  );
}
export default Principal;