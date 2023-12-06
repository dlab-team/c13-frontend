"use client"
import { useState } from "react";
import { Roboto, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Button } from "bootstrap";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "700"],
});


  
  const LearningPath = ({ learningPath }) => {
    
    // console.log(getData)

    const [active, setActive] = useState([true, ...Array(learningPath.length - 1).fill(false)]);
      
      const handleClick = (index) => {
        const newActive = Array(learningPath.length).fill(false); // Create a new array with all categories set to false
    
        // Set the clicked category to true
        newActive[index] = true;
    
        setActive(newActive);
      }
    return  (
        <>
      {/* <div className="row">
        <div className="collapse-navbar col-12 d-md-none">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  {learningPath.map((element, index) => (
                    <li key={element.id} className="nav-item">
                      <Link className="nav-link active" style={{
                        color: ` ${active[index] ? "#739E2D" : "#000"}`,
                      }} aria-current="page" href="#" onClick={() => handleClick(index)}>
                        {element.names}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div> */}

      <div className="dashboard">
        <div className={`${roboto.className} sidebar`}>
          <ul className="navbar-nav">
            {learningPath.map((element, index) => (
              <li key={element.id}>
                <Link style={{
                  color: ` ${active[index] ? "#739E2D" : "#000"}`,
                }}
                  href="#" onClick={() => handleClick(index)}>
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
                        href={`/categorias/${element.id}/ejercicios/${sub.id}`}
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
