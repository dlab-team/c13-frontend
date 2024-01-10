import Cookies from "js-cookie";

async function executeCode(
  inputValue,
  setTokenContent,
  setToExecute,
  languageId,
  setResultado,
  setError
) {
  let exerciseData;
  const code = inputValue + " console.log(main());";
  console.log(code);
  const jsonData = {
    source_code: code,
    language_id: languageId,
  };

  try {
    console.log("JUDGE0_URL:", process.env.JUDGE0_URL);
    const response = await fetch(`${process.env.JUDGE0_URL}/submissions`, {
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

    const exerciseEndpoint =
      "https://tutorial-interactivo-sql-2.onrender.com/api/v2/courses/1/categories/351/exercises/3371";
    const exerciseResponse = await fetch(exerciseEndpoint);
    exerciseData = await exerciseResponse.json();

    try {
      if (token) {
        let accepted = false;
        while (!accepted) {
          const getResponse = await fetch(
            `${process.env.JUDGE0_URL}/submissions/${token}`
          );
          const getData = await getResponse.json();

          console.log(getData.status.id);
          switch (getData.status.id) {
            case 1:
              await new Promise((resolve) => setTimeout(resolve, 1000));
              break;
            case 2:
              await new Promise((resolve) => setTimeout(resolve, 1000));
              break;
            case 3:
              if (
                exerciseData &&
                exerciseData.test_cases &&
                exerciseData.test_cases.length > 0
              ) {
                const testCase = exerciseData.test_cases[0];
                const expectedOutput = testCase.results;

                if (getData.stdout.trim() === expectedOutput.trim()) {
                  if (
                    inputValue.trim() ===
                      "console.log(" + expectedOutput.trim() + ")" ||
                    inputValue.trim ===
                      "console.log('" + expectedOutput.trim() + "')"
                  ) {
                    setError("Hiciste trampa");
                  } else {
                    setError("Resultado Exitoso");
                  }
                } else {
                  console.log(
                    "Error: La salida no coincide con el resultado esperado."
                  );
                  setError(
                    "Error: La salida no coincide con el resultado esperado."
                  );
                }
              }
              accepted = true;
              setResultado(getData.stdout);
              break;
            default:
              console.log("Respuesta inesperada del servidor:", getData.stderr);
              setError(getData.stderr);
              setResultado("Error: Tu codigo parece estar mal");

              accepted = true;
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
