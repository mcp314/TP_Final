import React from "react";
import '../styles/components/pages/ContactoPage.css';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";


const ContactoPage = (props) =>{
   return (
     <main className="holder contacto">
      <div>
        <h2>Contacto Rápido</h2>
        <form action="" method="" className="formulario">
          <p>
            <label for="nombre"> Nombre</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="email"> Email</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="telefono"> Telefono</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="mensaje"> Mensaje</label>
            <textarea name="" />
          </p>
          <p class="acciones"><input type="submit" value="Enviar"/>
          </p>
        </form>
      </div>
      <div class="datos">
        <h2>Otras vias de comunicación</h2>
        <p>También puede contactarse con nosotros usando los siguientes medios</p>
        <ul>
          <li><FaMailBulk  /><a href="mailto:mcp314@gmail.com">mail: contacto@colibri.com.ar</a></li>
          <li><FaWhatsapp /><a href="https://wa.me/2215430858/">2215430858</a></li>
          <li><FaInstagram  /><a href="">LookAgain</a></li>
          <li><FaFacebookSquare  /><a href="">LookAgain</a></li>
        </ul>
      </div>
     </main>
   );
}

export default ContactoPage;