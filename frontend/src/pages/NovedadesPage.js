import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/novedadItem';

const NovedadesPage = (props) =>{
  const [loading, setLoading] = useState(false);
  const[novedades, setNovedades] = useState([]);

  useEffect(() => {
    const cargarNovedades = async () => {
      setLoading(true);
      const response = await axios.get('http://localhost:3001/api/novedades');
      setNovedades(response.data);
      setLoading(false);
    };
    cargarNovedades();
  }, []);

   return (
     <section className="holder">
      <h2>Novedades</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        novedades.map(item => <NovedadItem key ={item.id}
        prenda={item.prenda}  marca={item.marca}
        talle={item.talle} descripcion={item.descripcion} 
        precio= {item.precio} estado={item.estado} imagen={item.imagen} />)
      )}
     </section>
   );
}

export default NovedadesPage;