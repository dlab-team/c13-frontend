"use client"
import React, { useState, useEffect } from 'react'
import Footer from '../../Footer';
import styles from '../../queAprenderas.module.css'

const ex_fetch = {
  sql: {
    "Conceptos Básicos de SQL": "Aprenderás los conceptos fundamentales de SQL, como qué es una base de datos, una tabla, una fila, una columna, un registro y una consulta. Estos son los componentes básicos de cualquier sistema de gestión de bases de datos relacional (RDBMS).",
    "Manipulación de Datos": "Aprenderás a insertar, actualizar y eliminar datos en una base de datos utilizando instrucciones SQL. Esto es esencial para administrar la información en una base de datos.",
    "Consulta de Datos": "Te familiarizarás con cómo realizar consultas para recuperar datos específicos de una base de datos. Aprenderás a usar la cláusula SELECT, filtros WHERE, ordenamiento de resultados y cómo agrupar y resumir datos.",
    "Relaciones y Joins": "Entenderás cómo funcionan las relaciones entre tablas en una base de datos relacional y cómo realizar uniones (joins) entre tablas para combinar datos de múltiples fuentes.",
    "Funciones y Agregaciones": "Conocerás las funciones SQL que te permiten realizar cálculos y agregaciones en los datos, como SUM, COUNT, AVG, MAX y MIN.",
    "Subconsultas": "Aprenderás a realizar subconsultas, que son consultas anidadas dentro de otras consultas. Esto es útil para consultar datos de manera más compleja y obtener resultados específicos."
  },
  javascript: {
    "Fundamentos de JavaScript": "Comprenderás los conceptos fundamentales de JavaScript, incluyendo variables, tipos de datos, operadores y estructuras de control de flujo.",
    "Manipulación del DOM": "Aprenderás a interactuar con el Document Object Model (DOM) para manipular la estructura y el contenido de las páginas web de forma dinámica.",
    "Eventos y Asincronía": "Te familiarizarás con el manejo de eventos para responder a las interacciones del usuario y entenderás los conceptos de programación asíncrona en JavaScript.",
    "Funciones y Objetos": "Conocerás el uso de funciones para estructurar tu código y trabajar con objetos para modelar y organizar la información.",
    "Frameworks y Bibliotecas": "Explorarás el ecosistema de JavaScript, incluyendo bibliotecas como jQuery y frameworks como React, Angular y Vue.js.",
    "Desarrollo del Lado del Servidor": "Comprenderás cómo utilizar JavaScript en el lado del servidor con Node.js, lo que te permitirá construir aplicaciones web completas."
  },
  python: {
    "Introducción a Python": "Aprenderás los fundamentos de Python, incluyendo sintaxis, variables, tipos de datos y estructuras de control de flujo.",
    "Funciones y Módulos": "Comprenderás cómo definir y utilizar funciones en Python, así como la importancia de organizar el código en módulos reutilizables.",
    "Estructuras de Datos": "Explorarás las diferentes estructuras de datos en Python, como listas, tuplas, conjuntos y diccionarios, y aprenderás a trabajar con ellas de manera efectiva.",
    "Programación Orientada a Objetos": "Conocerás los principios de la programación orientada a objetos (POO) en Python y cómo crear clases y objetos.",
    "Manejo de Archivos y Excepciones": "Aprenderás a trabajar con archivos, manejar excepciones y garantizar la integridad y seguridad de tu código.",
    "Proyectos Prácticos": "Aplicarás tus conocimientos mediante la creación de proyectos prácticos, consolidando tus habilidades en el desarrollo con Python."
  }
}

export default function QueAprenderas({ params }) {
  const [content, setContent] = useState(null)

  const liStyles = {
    '--accent-color-1': '#729e2e',
    '--accent-color-2': '#e2a30b',
    '--accent-color-3': '#009ee3',
    '--accent-color-4': '#e9501d',
    '--accent-color-5': '#356753',
    '--accent-color-6': '#35313c',
  };



  useEffect(() => {
    const param_lower = params.lenguage? params.lenguage.toLowerCase(): null;
    setContent(ex_fetch[param_lower])

  }, [params.lenguage]);


  return (
    <>
      <section id='aceleracion' className={styles.queAprenderas}>
        <h1 className={`text-center pb-5`}>¿Qué aprenderás durante el tutorial?</h1>
        <ul>
          {content ? (
            Object.entries(content).map(([k, v], index) => (
              <li key={index} style={{ '--accent-color': liStyles['--accent-color-1'] }}>
                <div className={styles.date}>{k}</div>
                <div className={`${styles.descr} mt-5`}>{v}</div>
              </li>
            ))
          ) : (
            <li>Cargando...</li>
          )}
        </ul>
      </section>

      <Footer />
    </>
  )
}
