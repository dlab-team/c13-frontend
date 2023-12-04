"use client";
import { useState } from "react";
import { Roboto, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Button } from "bootstrap";
import styles from "../../learning-path.module.css";
import Footer from "../../Footer";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["300", "700"],
});

const LearningPath = ({ learningPath }) => {
	// console.log(getData)

	const [active, setActive] = useState([
		true,
		...Array(learningPath.length - 1).fill(false),
	]);

	const handleClick = (index) => {
		const newActive = Array(learningPath.length).fill(false); // Create a new array with all categories set to false

		// Set the clicked category to true
		newActive[index] = true;

		setActive(newActive);
	};
	return (
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
								<Link
									style={{
										color: ` ${active[index] ? "#739E2D" : "#000"}`,
									}}
									href="#"
									onClick={() => handleClick(index)}
								>
									{element.name}
									<small>{""}</small>
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div className={`${roboto.className} content`}>
					<div class="container mb-5">
						<div class="row justify-content-between">
							<div class="col-4 text-center">
								<button
									type="button"
									className={`${styles.BotonEstilos} row btn bg-body-danger fw-bold fs-5 py-1 px-3`}
								>
									<Link href={"/learningPath"}>  Javascript</Link>
								</button>
							</div>

							<div class="col-4 text-center">
								<button
									type="button"
									className={`${styles.BotonEstilos} row btn bg-body-danger fw-bold fs-5 py-1 px-3 `}
								>
									<a className="text-decoration-none"s href={"/categorias"}> SQL </a>  {/* //Cambio //link por a */}
								</button>
							</div>
						</div>
					</div>
					{learningPath.map((element, index) => (
						<div key={element.id}>
							<h3
								key={index}
								className={`${
									active[index] ? "submenu active" : "d-none"
								} mb-4`}
							>
								{element.company.name}
							</h3>

							{/* <p className={`${active[index] ? "submenu active" : "d-none"} mb-4`}>
                Texto por definir para cada categoria
              </p> */}
							<ul
								key={learningPath.id}
								className={`${active[index] ? "submenu active" : "d-none"}  `}
							>
								{learningPath.map((sub) => (
									<li key={sub.id}>
										<Link className={`${"link-menu"}`} href={``}>
											<button className="span-categories ">
												{sub.completed ? (
													<Image
														src="/images/success-vector.png"
														height={17}
														width={17}
														alt="Academia Desafío Latam"
														title="Academia Desafío Latam"
													/>
												) : (
													<Image
														src="/images/elipse.png"
														height={17}
														width={17}
														alt="Academia Desafío Latam"
														title="Academia Desafío Latam"
													/>
												)}
												{sub.company.name}
											</button>
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
      
        <Footer />
		</>
	);
};

export default LearningPath;
