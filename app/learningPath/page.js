//"use client";
import fsPromises from "fs/promises";
import path from "path";
import LearningPath from "../_components/learningPath/learningPath";

// async function getData() {
//   // Get the path of the json file
//   const filePath = path.join(process.cwd(), "https://tutorial-interactivo-sql-2.onrender.com/api/v2/courses/2/categories/351/exercises/");
//   // Read the json file
//   const jsonData = await fsPromises.readFile(filePath);
//   // Parse data as json
//   const data = JSON.parse(jsonData);

//   console.log(data);
//   return data;
// }

// export default async function Page() {
//   const data = await getData();

//   return <LearningPath learningPath={data} />;
// }

async function getData() {
  try {
    // Reemplaza la URL con la dirección real de tu API
    const apiUrl = "https://tutorial-interactivo-sql-2.onrender.com/api/v2/courses/2/categories/351/exercises/";
    // const apiUrlDos = "https://tutorial-interactivo-sql-2.onrender.com/api/v2/courses/2/categories/";

    // Obtén datos de la API remota
    const response = await fetch(apiUrl);

    // Verifica si la solicitud fue exitosa (código de estado 200)
    if (!response.ok) {
      throw new Error(`¡Error HTTP! Estado: ${response.status}`);
    }

    // Parsea la respuesta como JSON
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
    // Maneja errores, puedes mostrar un mensaje de error o redirigir al usuario
    console.error("Error en la página:", error);
    return <div>Error cargando datos</div>;
  }
}