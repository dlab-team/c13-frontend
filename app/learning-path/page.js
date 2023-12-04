import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import styles from "../learning-path.module.css";

export default function LeargningPath() {
	return (
		<>
			<div className="container-fluid">
				<div className="row bg-body-secondary">
					<div className="col-10 d-flex align-items-center">
						<picture className={`${styles.IconUsuario} `}>
							<Image
								height={55}
								width={55}
								src="/images/Ellipse-icon.png"
								alt="desafiolatam"
								priority={true}
								className={`justify-content-center`}
							/>
						</picture>
					</div>
					<div className="col-2 py-4">
						<div className={` ${styles.BotonEstilos} border justify-content-center text-center p-2 bg-secondary `}>
							<picture className="p-2">
								<Image
									height={25}
									width={25}
									src="/images/PersonIcon.png"
									alt="desafiolatam"
									priority={true}
									className={`text-center`}
								/>
							</picture>
							<p className="d-inline text-white">Nombre Usuario</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-4 bg-secondary">
						<div className="text-center">
							<p className="p-3 text-white fs-3">Capítulos</p>
							<div className=" d-flex align-items-center justify-content-center">
								<div className=" d-inline-flex align-items-center justify-content-center mb-5">
									<Image
										height={25}
										width={25}
										src="/images/gg_check-o.png"
										alt="desafiolatam"
										priority={true}
										className={`d-flex text-center`}
									/>
									<div className="">
										<button type="button" class="text-center btn btn-secondary">
											<Image
												height={4}
												width={190}
												src="/images/Line.png"
												alt="desafiolatam"
												priority={true}
												className={`d-flex text-center`}
											/>
										</button>
									</div>
								</div>
							</div>
							<div className=" d-flex align-items-center justify-content-center">
								<div className=" d-inline-flex align-items-center justify-content-center mb-5">
									<Image
										height={25}
										width={25}
										src="/images/gg_check-o.png"
										alt="desafiolatam"
										priority={true}
										className={`d-flex text-center`}
									/>
									<div className="">
										<button type="button" class="text-center btn btn-secondary">
											<Image
												height={4}
												width={190}
												src="/images/Line.png"
												alt="desafiolatam"
												priority={true}
												className={`d-flex text-center`}
											/>
										</button>
									</div>
								</div>
							</div>
              				<div className=" d-flex align-items-center justify-content-center">
								<div className=" d-inline-flex align-items-center justify-content-center mb-5">
									<Image
										height={25}
										width={25}
										src="/images/gg_check-o.png"
										alt="desafiolatam"
										priority={true}
										className={`d-flex text-center`}
									/>
									<div className="">
										<button type="button" class="text-center btn btn-secondary">
											<Image
												height={4}
												width={190}
												src="/images/Line.png"
												alt="desafiolatam"
												priority={true}
												className={`d-flex text-center`}
											/>
										</button>
									</div>
								</div>
							</div>
              				<div className=" d-flex align-items-center justify-content-center">
								<div className=" d-inline-flex align-items-center justify-content-center mb-5">
									<Image
										height={25}
										width={25}
										src="/images/gg_check-o.png"
										alt="desafiolatam"
										priority={true}
										className={`d-flex text-center`}
									/>
									<div className="">
										<button type="button" class="text-center btn btn-secondary">
											<Image
												height={4}
												width={190}
												src="/images/Line.png"
												alt="desafiolatam"
												priority={true}
												className={`d-flex text-center`}
											/>
										</button>
									</div>
								</div>
							</div>
              				<div className=" d-flex align-items-center justify-content-center">
								<div className=" d-inline-flex align-items-center justify-content-center mb-5">
									<Image
										height={25}
										width={25}
										src="/images/gg_check-o.png"
										alt="desafiolatam"
										priority={true}
										className={`d-flex text-center`}
									/>
									<div className="">
										<button type="button" class="text-center btn btn-secondary">
											<Image
												height={4}
												width={190}
												src="/images/Line.png"
												alt="desafiolatam"
												priority={true}
												className={`d-flex text-center`}
											/>
										</button>
									</div>
								</div>
							</div>
              				<div className=" d-flex align-items-center justify-content-center">
								<div className=" d-inline-flex align-items-center justify-content-center mb-5">
									<Image
										height={25}
										width={25}
										src="/images/gg_check-o.png"
										alt="desafiolatam"
										priority={true}
										className={`d-flex text-center`}
									/>
									<div className="">
										<button type="button" class="text-center btn btn-secondary">
											<Image
												height={4}
												width={190}
												src="/images/Line.png"
												alt="desafiolatam"
												priority={true}
												className={`d-flex text-center`}
											/>
										</button>
									</div>
								</div>
							</div>
              				<div className=" d-flex align-items-center justify-content-center">
								<div className=" d-inline-flex align-items-center justify-content-center mb-5">
									<Image
										height={25}
										width={25}
										src="/images/gg_check-o.png"
										alt="desafiolatam"
										priority={true}
										className={`d-flex text-center`}
									/>
									<div className="">
										<button type="button" class="text-center btn btn-secondary">
											<Image
												height={4}
												width={190}
												src="/images/Line.png"
												alt="desafiolatam"
												priority={true}
												className={`d-flex text-center`}
											/>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
{/* ______________SECCIÓN DE LECCIONES______________ */}
					<div className= "col-8">
						<div class="container mb-5">
							<div class="row justify-content-between">
								<div class="col-4 text-center" >
									<button type="button" class= {`${styles.BotonEstilos} row btn bg-body-danger fw-bold fs-5 py-1 px-3`}>
										PERFIL
									</button> 
								</div>
								<div class="col-4 text-center">
									<button type="button" class= {`${styles.BotonEstilos} row btn bg-body-success btn-sm fw-bold fs-5 px-4 py-1`}>
										SQL
									</button>
								</div>
							</div>
						</div>
						<div className="text-center fs-1 fw-bold">
              				JavaScript
            			</div>
					<div className="col-10 ms-5 justity-content-center"> 
					<div className="col-1 ms-5"><p className="text-start fs-4 fw-bold">Lecciones</p></div>
					<div className=" d-flex justify-content-center m-2 mb-3">
						<div className="col-10 py-1 px-3 d-inline-flex align-items-center bg-body-secondary">
							<Image
							height={18}
							width={18}
							src="/images/check-mark.png"
							alt="desafiolatam"
							priority={true}
							className={`d-flex text-center m-2`}
							/>
							<div className="fs-5">
								<button type="button" class="btn text-center fw-bold px-3">
									Tutorial
								</button>
							</div>
						</div>
					</div>
					<div className=" d-flex justify-content-center m-2 mb-3">
						<div className="col-10 py-1 px-3 d-inline-flex align-items-center bg-body-secondary">
							<Image
							height={18}
							width={18}
							src="/images/check-mark.png"
							alt="desafiolatam"
							priority={true}
							className={`d-flex text-center m-2`}
							/>
							<div className="fs-5">
								<button type="button" class="btn text-center fw-bold px-3">
									Tutorial #2
								</button>
							</div>
						</div>
					</div>
					<div className=" d-flex justify-content-center m-2 mb-3">
						<div className="col-10 py-1 px-3 d-inline-flex align-items-center bg-body-secondary">
							<Image
							height={18}
							width={18}
							src="/images/check-mark.png"
							alt="desafiolatam"
							priority={true}
							className={`d-flex text-center m-2`}
							/>
							<div className="fs-5">
								<button type="button" class="btn text-center fw-bold px-3">
									Tutorial #3
								</button>
							</div>
						</div>
					</div>
					<div className=" d-flex justify-content-center m-2 mb-3">
						<div className="col-10 py-1 px-3 d-inline-flex align-items-center bg-body-secondary">
							<Image
							height={18}
							width={18}
							src="/images/check-mark.png"
							alt="desafiolatam"
							priority={true}
							className={`d-flex text-center m-2`}
							/>
							<div className="fs-5">
								<button type="button" class="btn text-center fw-bold px-3">
									Tutorial #4
								</button>
							</div>
						</div>
					</div>
					<div className=" d-flex justify-content-center m-2 mb-3">
						<div className="col-10 py-1 px-3 d-inline-flex align-items-center bg-body-secondary">
							<Image
							height={18}
							width={18}
							src="/images/check-mark.png"
							alt="desafiolatam"
							priority={true}
							className={`d-flex text-center m-2`}
							/>
							<div className="fs-5">
								<button type="button" class="btn text-center fw-bold px-3">
									Tutorial #5
								</button>
							</div>
						</div>
					</div>
				</div>
				</div>
			</div>
			</div>
      <section>
        <div class="py-5 bg-body-secondary"></div>
        <div class="py-5 bg-body-secondary"></div>
      </section>
		</>
	);
}
