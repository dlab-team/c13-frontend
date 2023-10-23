import React from 'react'
import Footer from '../Footer';
import styles from '../queAprenderas.module.css'

export default function QueAprenderas() {
  const liStyles = {
    '--accent-color-1': '#729e2e',
    '--accent-color-2': '#e2a30b',
    '--accent-color-3': '#009ee3',
    '--accent-color-4': '#e9501d',
    '--accent-color-5': '#356753',
    '--accent-color-6': '#35313c',
  };

  return (
    <>
    <section id='aceleracion' className={styles.queAprenderas}>
      <h1 className={`text-center pb-5`}>¿Qué aprenderás durante el tutorial?</h1>
      <ul>
        <li style={{ '--accent-color': liStyles['--accent-color-1'] }}>
          <div className={styles.date}>Conceptos Básicos de SQL</div>
          <div className={`${styles.descr} mt-5`}>
            Aprenderás los conceptos fundamentales de SQL, como qué es una base de datos, una tabla, una fila, una columna, un registro y una consulta. Estos son los componentes básicos de cualquier sistema de gestión de bases de datos relacional (RDBMS).
          </div>
        </li>
        <li style={{ '--accent-color': liStyles['--accent-color-2'] }}>
          <div className={styles.date}>Manipulación de Datos</div>
          <div className={`${styles.descr} mt-5`}>
            Aprenderás a insertar, actualizar y eliminar datos en una base de datos utilizando instrucciones SQL. Esto es esencial para administrar la información en una base de datos.
          </div>
        </li>
        <li style={{ '--accent-color': liStyles['--accent-color-3'] }}>
          <div className={styles.date}>Consulta de Datos</div>
          <div className={`${styles.descr} mt-5`}>
            Te familiarizarás con cómo realizar consultas para recuperar datos específicos de una base de datos. Aprenderás a usar la cláusula SELECT, filtros WHERE, ordenamiento de resultados y cómo agrupar y resumir datos.
          </div>
        </li>
        <li style={{ '--accent-color': liStyles['--accent-color-4'] }}>
          <div className={styles.date}>Relaciones y Joins</div>
          <div className={`${styles.descr} mt-5`}>
            Entenderás cómo funcionan las relaciones entre tablas en una base de datos relacional y cómo realizar uniones (joins) entre tablas para combinar datos de múltiples fuentes.
          </div>
        </li>
        <li style={{ '--accent-color': liStyles['--accent-color-5'] }}>
          <div className={styles.date}>Funciones y Agregaciones</div>
          <div className={`${styles.descr} mt-5`}>
            Conocerás las funciones SQL que te permiten realizar cálculos y agregaciones en los datos, como SUM, COUNT, AVG, MAX y MIN.
          </div>
        </li>
        <li style={{ '--accent-color': liStyles['--accent-color-6'] }}>
          <div className={styles.date}>Subconsultas</div>
          <div className={`${styles.descr} mt-5`}>
            Aprenderás a realizar subconsultas, que son consultas anidadas dentro de otras consultas. Esto es útil para consultar datos de manera más compleja y obtener resultados específicos.
          </div>
        </li>
      </ul>
    </section>

    <Footer />
    </>
  )
}
