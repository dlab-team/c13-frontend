// CodeExecution.js

//corregir el caso donde la palabra console por si sola da una buena ejecucion

async function executeCode(inputValue, setTokenContent, setToExecute) {
  const jsonData = {
    source_code: inputValue,
    language_id: 63,
  };

  try {
    const response = await fetch("http://127.0.0.1:2358/submissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    });

    const responseData = await response.json();
    console.log("Respuesta del servidor:", responseData);

    const token = responseData.token;
    setTokenContent(token);
    setToExecute(true);

    // Realizar la solicitud GET adicional con espera
    try {
      if (token) {
        let accepted = false;

        while (!accepted) {
          const getResponse = await fetch(
            `http://127.0.0.1:2358/submissions/${token}`
          );
          const getData = await getResponse.json();

          console.log(getData.status.id);
          switch (getData.status.id) {
            case 1:
              // En Queue, volver a intentarlo
              await new Promise((resolve) => setTimeout(resolve, 1000));
              break;
            case 2:
              // Processing, volver a preguntar
              await new Promise((resolve) => setTimeout(resolve, 1000));
              break;
            case 3:
              // Accepted, mostrar la respuesta en la consola y alerta de éxito y datos de salida (stdout)
              console.log("Respuesta de la solicitud GET:", getData);
              alert(
                "Código ejecutado correctamente. Salida (stdout): " +
                  getData.stdout
              );
              accepted = true;
              break;
            case 4:
              // Wrong Answer, mostrar alerta de error y datos de error (stderr)
              console.log("Error en tu código:", getData.stderr);
              accepted = true;
              break;
            default:
              // Cualquier otro código de estado, mostrar alerta de error genérico
              console.log("Respuesta inesperada del servidor:", getData.stderr);

              accepted = true; // Salir del bucle en caso de error genérico
              break;
          }
        }
      } else {
        console.error("Token no disponible");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud GET:", error);
    }
  } catch (error) {
    console.error("Error al realizar la solicitud POST:", error);
  }
}

export default executeCode;
