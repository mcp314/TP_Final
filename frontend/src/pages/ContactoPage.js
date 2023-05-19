import React, {useState} from 'react';
import axios from 'axios';
import '../styles/components/pages/ContactoPage.css';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";


const ContactoPage = (props) =>{
  const initialForm = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  }

  const [sending, setSending] = useState(false);
  const [msg, SetMsg] = useState('');
  const [formData, setFormData] = useState(initialForm);

  const handleChange = e => {
    const { name, value} = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value 
    }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    SetMsg('');
    setSending(true)
    const response = await
    axios.post('http://localhost:3001/api/contacto', formData);
    setSending(false);
    SetMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm)
    }
  }
   return (
     <main className="holder contacto">
      <div>
        <h2>Contacto Rápido</h2>
        <form className="formulario" onSubmit = {handleSubmit}>
          <p>
            <label for="nombre"> Nombre</label>
            <input type="text" name="nombre" value= {formData.nombre} onChange={handleChange} />
          </p>
          <p>
            <label for="email"> Email</label>
            <input type="text" name="email" value= {formData.email} onChange={handleChange} />
          </p>
          <p>
            <label for="telefono"> Telefono</label>
            <input type="text" name="telefono" value= {formData.telefono} onChange={handleChange} />
          </p>
          <p>
            <label for="mensaje"> Mensaje</label>
            <textarea name="mensaje" value= {formData.mensaje} onChange={handleChange}/>
          </p>
          {sending ? <p>Enviando...</p> : null}
          {msg ? <p>{msg}</p> : null}
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
          <li><FaInstagram  /><a href="http://facebook.com">LookAgain</a></li>
          <li><FaFacebookSquare  /><a href="http://instagram.com">LookAgain</a></li>
        </ul>
      </div>
     </main>
   );
}

export default ContactoPage;