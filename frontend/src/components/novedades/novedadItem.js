import React from 'react';

const NovedadItem = (props) => {
    const { id,prenda,marca,talle,descripcion,precio,estado,imagen } = props;

    return(
        <div className="novedades">
        <h2>{id}</h2>
        <h1>{prenda}</h1>
        <h2>{marca}</h2>
        <h2>{talle}</h2>
        <h2>{descripcion}</h2>
        <h2>{precio}</h2>
        <h2>{estado}</h2>
        <img src={imagen} />
        <hr />
        </div>
    );
}

export default NovedadItem;