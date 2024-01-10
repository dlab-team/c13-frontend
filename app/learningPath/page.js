//"use client";
import LearningPath from "../_components/learningPath/learningPath";

async function getData() {
  try {

    const apiUrl = "https://tutorial-interactivo-sql-2.onrender.com/api/v2/courses/2/categories/menu";
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`¡Error HTTP! Estado: ${response.status}`);
    }

    // Parseando la respuesta a JSON
    const data = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw error;
  }
}

export default async function Page() {
  try {
    const data = await getData();

    return <LearningPath learningPath={data} />;
  } catch (error) {
    // Manejando mensajes de error
    console.error("Error en la página:", error);
    return <div>Error cargando datos</div>;
  }
}

