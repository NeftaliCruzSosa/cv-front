import React, { useState, useEffect } from "react";
import "./Curriculum.scss";

const Curriculum = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/curriculums/byId/63680ccf53362cd308e37499")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>No se puede cargar el curriculum</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (<ul>
        <li>{items.basicData.name}</li>
        <li>{items.basicData.lastname}</li>
        <li>{items.basicData.city}</li>
        <li>{items.basicData.email}</li>
      </ul>)
  }
};

export default Curriculum;
