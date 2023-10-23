import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import useSWR from "swr";

export default function CheckCertificate() {
  const [data, setData] = useState([]);
  const [latestItem, setLatestItem] = useState(null);

  useEffect(() => {
    // Función para obtener datos del endpoint (debe estar en tu código)
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.API_BASE_URL}/certificates/`, {
          headers: {
            Authorization: `Bearer ${Cookies.get('JWT-cookie')}`,
          }
        });
        const newData = await response.json();

        console.log(newData)

        newData.forEach((element) => {
          if (!data.some(item => item === element.name)) {
            // Agrega el nuevo elemento al inicio del arreglo
            setData(prevData => [element.name, ...prevData]);

            console.log(data)

            // Establece el último elemento como el más reciente
            setLatestItem(element.name);

            // Muestra la alerta
          } else if (!data.includes(element.name)) {
            
            alert(`Nuevo elemento: ${element.name}`);

          }
        });


      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []); // No dependencies to run the effect only once

  return (
    <></>
  );
}