import React from "react";
import '../Footer/Footer.css';
import logo from '../../../assets/My_agenda.png'
function Footer() {
  return (
    <footer className="page-footer font-small blue pt-4 footerColor ">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-4 mt-md-0 mt-3 text-center">
            <img className="rounded-circle" src={logo} width="80px" alt="my_agenda" />
            <h3 className="mt-5 mb-5 letraFooter"><i>My agenda</i></h3>
          </div>
          

          <hr className="clearfix w-100 d-md-none pb-3" />

          <div className="col-md-4 mb-md-0 mb-3">
            <h3 className="text-uppercase letraFooter">Contáctenos</h3>

            <ul className="list-unstyled letraFooter">
              <li>
                <p>Edris Ríos Morales.</p>
              </li>
              <li>
                <p>Liberia, Costa Rica.</p>
              </li>
              <li>
                <p>Teléfonos: 6060-6733 </p>
              </li>
              <li>
                <p>
                  Correo electrónico: <br/>edrisriosmorales@gmail.com
                </p>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-md-0 mb-3">
            <h3 className="text-uppercase letraFooter">Redes sociales</h3>

            <ul className="list-unstyled">
              <li className="m-auto">
                <a href="https://www.facebook.com">
                  <i
                    className="fab fa-facebook-f fa-lg fa-2x "
                 
                  ></i>
                </a>
                <a href="https://www.twitter.com">
                  <i
                    className="fab fa-twitter fa-lg fa-2x"
                  
                  ></i>
                </a>
                <a href="https://www.instagram.com">
                  <i
                    className="fab fa-instagram fa-lg fa-2x"
                   
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3 letraFooter">
        © 2021 Copyright:
      </div>
    </footer>
  );
}

export default Footer;
