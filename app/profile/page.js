// Importa las bibliotecas necesarias y los componentes de React
"use client";
import React, { useState, useEffect } from "react";
import Footer from "../Footer";

// Datos ficticios
const fakeApiResponse = {
  user: {
    id: 123,
  },
  courses: {
    js: {
      name: "JavaScript",
      complete: 12,
      total: 12,
      backgroundImage: "images/imgJS.png",
      backgroundImagePC: "images/imgJSPC.jpg",
    },
    sql: {
      name: "SQL",
      complete: 100,
      total: 100,
      backgroundImage: "images/imgSQL.png",
      backgroundImagePC: "images/imgSQLPC.png",
    },
    python: {
      name: "Python",
      complete: 12,
      total: 100,
      backgroundImage: "images/imgPython.png",
      backgroundImagePC: "images/imgPythonPC.png",
    },
  },
  next_courses: ["CSS", "C++"],
};

// Componente para representar cada tarjeta de curso
const CourseCard = ({ name, complete, total, backgroundImage }) => {
  const percentage = ((complete / total) * 100).toFixed(2) || 0;
  const completionStatus =
    percentage == 100 ? "con-completed" : "con-incomplete";

  return (
    <div
      className={`col-md-6 mx-auto mt-5 mt-md-0 course-card ${name.toLowerCase()} `}
    >
      <div
        className={`py-5 border-secondary course-card-inner ${name.toLowerCase()}`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="diagonal">
          <div className={`circle ${name.toLowerCase()} ${completionStatus}`}>
            <span>{`${Math.round(percentage)}%`}</span>
          </div>
          {name && (
            <div className="course-name ">
              <span>{name}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Componente para representar cada tarjeta de "Siguiente Curso"
const NextCourseCard = ({ name, onSelect, selected }) => {
  return (
    <div
      className={`col-md-7 mx-auto mt-5 mt-lg-3 mx-5 siguiente-curso p-2 p-lg-3 ${
        selected ? "clicked" : ""
      }`}
      onClick={() => onSelect(name)}
    >
      <input
        type="radio"
        className="radio"
        name="next-course"
        value={name}
        checked={selected}
        onChange={() => {}}
      />
      <i
        className={`fa-regular fa-circle ${
          selected ? "fa-circle-selected" : ""
        }`}
      ></i>
      <label>{name}</label>
    </div>
  );
};

// Componente principal de la página
const Page = () => {
  // Estado para almacenar el curso seleccionado
  const [selectedCourse, setSelectedCourse] = useState("");

  // Función para calcular el porcentaje total de finalización de cursos
  const calculateTotalCompletion = () => {
    const completionValues = Object.values(fakeApiResponse.courses).map(
      (course) => (course.complete / course.total) * 100
    );

    return (
      (
        completionValues.reduce((acc, value) => acc + value, 0) /
        completionValues.length
      ).toFixed(2) || 0
    );
  };

  // Estado para almacenar el porcentaje total de finalización de cursos
  const [totalCompletion, setTotalCompletion] = useState(0);

  // Efecto secundario para actualizar el estilo de la barra de cursos
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--total-completion",
      `${totalCompletion}%`
    );
  }, [totalCompletion]);

  // Maneja la selección de un curso
  const handleSelectCourse = (courseName) => {
    setSelectedCourse(courseName);
  };

  // Efecto secundario para recalcular el porcentaje total al cargar la página
  useEffect(() => {
    setTotalCompletion(calculateTotalCompletion());
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />
      {/* Sección principal */}
      <section id="aceleracion">
        <div className="mb-4">
          <div className="d-flex justify-content-center">
            <h1 className="perfil">PERFIL</h1>
          </div>
        </div>
        <div className="pt-4 contador">
          <div className="d-flex justify-content-center">
            <p className="total-cursos d-flex justify-content-center">
              Total Cursos Completados
            </p>
          </div>
          <div className="d-flex justify-content-center custom-margin">
            <div className="rounded-pill col-9 col-md-8 col-lg-6 mb-md-5 barra-cursos">
              <div className="d-flex justify-content-center p-md-2 p-lg-3">
                {`${Math.round(totalCompletion)}%`}
              </div>
            </div>
          </div>
        </div>
        <div className="d-none d-sm-block mt-2">
          <div className="row justify-content-center">
            {/* Lógica de renderizado para la tarjeta específica */}
            {Object.values(fakeApiResponse.courses).map((course, index) => (
              <div
                key={course.name}
                className={`col-md-4 mx-5 card1 border mt-2 ${
                  (index + 1) % 2 === 0 ? "my-5" : ""
                } ${(index + 1) % 2 === 1 ? "my-5" : ""}
                ${index + 1 !== 1 && (index + 1) % 2 === 1 ? "mt-5" : ""}`}
                style={{ backgroundImage: `url(${course.backgroundImagePC})` }}
              >
                <div className="overlay">
                  <div className="diagonal-pc">
                    <div className="nombre-pc">{course.name}</div>
                  </div>
                  <div className="button-space d-flex justify-content-center">
                    <button className="boton">¿Qué Aprenderás?</button>
                    <button className="boton">
                      <i className="fa-solid fa-play"></i> Iniciar Curso
                    </button>
                  </div>
                </div>
                <div
                  className={`circle-pc ${
                    course.complete === course.total
                      ? "con-completed"
                      : "con-incomplete"
                  }`}
                >
                  <span>{`${Math.round(
                    (course.complete / course.total) * 100
                  )}%`}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="d-md-none mt-5 px-4">
          <div className="mx-auto">
            {Object.values(fakeApiResponse.courses).map((course) => (
              <CourseCard key={course.name} {...course} />
            ))}
          </div>
        </div>

        <div className="mt-5 pt-5 pt-md-0">
          <div class="d-sm-block d-md-none">
            <div class="d-flex justify-content-center">
              <div class="ayuda mx-5">
                Ayúdanos a elegir nuestro próximo
                <p class="mb-3 d-flex justify-content-center">Curso!</p>
              </div>
            </div>
          </div>

          <div class="d-none d-md-block">
            <div class="d-flex justify-content-center">
              <div class="total-cursos d-flex justify-content-center">
                Ayúdanos a elegir nuestro próximo Curso!
              </div>
            </div>
          </div>

          <form action="">
            <div className="row mx-5">
              {fakeApiResponse.next_courses.map((courseName) => (
                <NextCourseCard
                  key={courseName}
                  name={courseName}
                  onSelect={handleSelectCourse}
                  selected={selectedCourse === courseName}
                />
              ))}
            </div>
            <div className="d-flex justify-content-center mt-4 mt-lg-5">
              <button class="rounded-pill py-2 px-5 boton-enviar">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>

      <section></section>
      {/* Pie de página */}
      <Footer />
    </>
  );
};

export default Page;
