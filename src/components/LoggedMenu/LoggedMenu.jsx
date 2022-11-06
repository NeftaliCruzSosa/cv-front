import React, { useState, useEffect } from 'react'
import "./LoggedMenu.scss"

const LoggedMenu = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/curriculums/byId/63680ccf53362cd308e37499")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        }
      );
  }, []);

  return (
    <div>
    <ul className="logged">
      <li>{items.basicData.name} {items.basicData.lastname}</li>
      <li className='separator'></li>
      <li>Perfil</li>
      <li>Editar Curriculum</li>
      <li>Compartir</li>
      <li className='separator'></li>
      <li>Salir</li>
    </ul>
  </div>
  )
}

export default LoggedMenu