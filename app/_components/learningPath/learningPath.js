"use client"
import { useState, useEffect } from "react";
import { Roboto, Inter } from "next/font/google";
import styles from "/app/learning-path.module.css";
import Image from "next/image";
import Link from "next/link";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["300", "700"],
});



  const LearningPath = ({ learningPath }) => {
    
    // console.log(getData)

    const [active, setActive] = useState([true, ...Array(learningPath.length - 1).fill(false)]);
    const [apiId, setApiId] = useState(null);
      
      const handleClick = (index, subId) => {
        const newActive = Array(learningPath.length).fill(false); // Create a new array with all categories set to false
    
        // Set the clicked category to true
        newActive[index] = true;
    
        setActive(newActive);
        setApiId(subId);
      }

      const getCategoryBySubId = (subId) => {
        if (subId >= 3100 && subId <= 3106) {
          return '/javascript';
        } else if (subId >= 3107 && subId <= 3309) {
          return '/html';
        } else {
          
          return 'otra-categoria';
        }
      };

    return  (
      <>
      <div className="dashboard">
        <div className={`${roboto.className} sidebar`}>
          <ul className="navbar-nav">
            {learningPath.map((element, index) => (
              <li key={element.id}>
                <Link style={{
                  color: ` ${active[index] ? "#739E2D" : "#000"}`,
                }}
                  href={'#'} onClick={() => handleClick(index)}>
                  {element.name}
                  <small>
                    {""}
                
                  </small>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${roboto.className} content`}>
          <div><h1 className={` ${styles.TituloJs}`} >JavaScript</h1></div>
          {learningPath.map((element, index) => (
            <div key={element.id}>
              <h3 key={index} className={`${active[index] ? "submenu active" : "d-none"} mb-4`}>
                {element.name}
              </h3>

							{/* <p className={`${active[index] ? "submenu active" : "d-none"} mb-4`}>
                Texto por definir para cada categoria
              </p> */}
              <ul key={learningPath.id} className={`${active[index] ? "submenu active" : "d-none"}  `}>
                {element.exercises.map((sub) => (
                    <li key={sub.id}
                    >
                      <Link
                        className={`${"link-menu"}`}
                        href={`/categorias/${getCategoryBySubId(sub.id)}`}
                        as={`/categorias/${getCategoryBySubId(sub.id)}`}
                      >
                        <button className="span-categories ">
                          {sub.completed ? (
                            <Image src="/images/success-vector.png" height={17} width={17} alt="Academia Desafío Latam" title="Academia Desafío Latam" />
                          ) : (
                            <Image src="/images/elipse.png" height={17} width={17} alt="Academia Desafío Latam" title="Academia Desafío Latam" />
                          )}
                          {sub.title}
                        </button>
                      </Link>
                    </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
    )
  }

 

export default LearningPath;
