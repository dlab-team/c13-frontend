import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import styles from "../learning-path.module.css";

export default function LeargningPath() {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-8 ">
						<picture>
							<Image
								height={25}
								width={25}
								src="/images/icon-global.webp"
								alt="desafiolatam"
								priority={true}
								className={`text-center`}
							/>
						</picture>
					</div>
					<div className="col-4 ">
						<div className=" border border-black justify-content-center text-center py-3 bg-secondary">
							<picture>
								<Image
									height={25}
									width={25}
									src="/images/icon-global.webp"
									alt="desafiolatam"
									priority={true}
									className={`text-center`}
								/>
							</picture>{" "}
							<p className="d-inline">Nombre de usuario</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-4 bg-secondary">
						1
						<div className="text-center">
							<p>CAPITULOS</p>
							<div className=" d-flex align-items-center justify-content-center">
								<div className=" d-inline-flex align-items-center justify-content-center ">
									<Image
										height={25}
										width={25}
										src="/images/gg_check-o.png"
										alt="desafiolatam"
										priority={true}
										className={`d-flex text-center`}
									/>
									<div className="">
										<button type="button" class="text-center">
											Light
										</button>
									</div>
								</div>

								<p className="">------------------</p>
							</div>
							<div className=" d-flex align-items-center justify-content-center">
								<div className=" d-inline-flex align-items-center justify-content-center ">
									<Image
										height={25}
										width={25}
										src="/images/gg_check-o.png"
										alt="desafiolatam"
										priority={true}
										className={`d-flex text-center`}
									/>
									<div className="">
										<button type="button" class="text-center">
											Light
										</button>
									</div>
								</div>

								<p className="">------------------</p>
							</div>
							<div className=" d-flex align-items-center justify-content-center">
								<div className=" d-inline-flex align-items-center justify-content-center ">
									<Image
										height={25}
										width={25}
										src="/images/gg_check-o.png"
										alt="desafiolatam"
										priority={true}
										className={`d-flex text-center`}
									/>
									<div className="">
										<button type="button" class="text-center">
											Light
										</button>
									</div>
								</div>

								<p className="">------------------</p>
							</div>
							<div className=" d-flex align-items-center justify-content-center">
								<div className=" d-inline-flex align-items-center justify-content-center ">
									<Image
										height={25}
										width={25}
										src="/images/gg_check-o.png"
										alt="desafiolatam"
										priority={true}
										className={`d-flex text-center`}
									/>
									<div className="">
										<button type="button" class="text-center">
											Light
										</button>
									</div>
								</div>

								<p className="">------------------</p>
							</div>
						</div>
					</div>

					<div className="col-8 bg-danger">
						a2
						<div class="container">
							<div class="row justify-content-between">
								<div class="col-4 text-center">
									<button type="button" class="btn btn-primary btn-sm">
										PERFIL
									</button>
								</div>
								<div class="col-4 text-center">
									<button type="button" class="btn btn-primary btn-sm">
										SQL
									</button>
								</div>
							</div>
						</div>
						<div className="text-center fs-1">JAVASCRIPT</div>
						<div className="text-start fs-4">Lecciones</div>
						<div className="py-1">
							<div className=" bg-secondary border">
								<div className=" d-inline-flex align-items-center justify-content-center bg-secondary">
									<Image
										height={25}
										width={25}
										src="/images/gg_check-o.png"
										alt="desafiolatam"
										priority={true}
										className={`d-flex text-center`}
									/>
									<div className="">
										<button type="button" class="btn text-center">
											Tutorial
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="py-1">
							<div className="bg-secondary border">
								<div className=" d-inline-flex align-items-center justify-content-center bg-secondary">
									<Image
										height={25}
										width={25}
										src="/images/gg_check-o.png"
										alt="desafiolatam"
										priority={true}
										className={`d-flex text-center`}
									/>
									<div className="">
										<button type="button" class="btn text-center">
											Tarea #1
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="py-1">
							<div className=" bg-secondary border">
								<div className=" d-inline-flex align-items-center justify-content-center bg-secondary">
									<Image
										height={25}
										width={25}
										src="/images/gg_check-o.png"
										alt="desafiolatam"
										priority={true}
										className={`d-flex text-center`}
									/>
									<div className="">
										<button type="button" class="btn text-center">
											Tarea #1
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="py-1">
							<div className=" bg-secondary border">
								<div className=" d-inline-flex align-items-center justify-content-center bg-secondary">
									<Image
										height={25}
										width={25}
										src="/images/gg_check-o.png"
										alt="desafiolatam"
										priority={true}
										className={`d-flex text-center`}
									/>
									<div className="">
										<button type="button" class="btn text-center">
											Tarea #1
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="py-1">
							<div className="bg-secondary border">
								<div className=" d-inline-flex align-items-center justify-content-center bg-secondary">
									<Image
										height={25}
										width={25}
										src="/images/gg_check-o.png"
										alt="desafiolatam"
										priority={true}
										className={`d-flex text-center`}
									/>
									<div className="">
										<button type="button" class="btn text-center">
											Tarea #1
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="py-1">
							<div className="bg-secondary border">
								<div className=" d-inline-flex align-items-center justify-content-center bg-secondary">
									<Image
										height={25}
										width={25}
										src="/images/gg_check-o.png"
										alt="desafiolatam"
										priority={true}
										className={`d-flex text-center`}
									/>
									<div className="">
										<button type="button" class="btn text-center">
											Tarea #1
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="py-1">
							<div className="bg-secondary border">
								<div className=" d-inline-flex align-items-center justify-content-center bg-secondary">
									<Image
										height={25}
										width={25}
										src="/images/gg_check-o.png"
										alt="desafiolatam"
										priority={true}
										className={`d-flex text-center`}
									/>
									<div className="">
										<button type="button" class="btn text-center">
											Tarea #1
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="h-auto bg-primary">
						Este div tendrá altura basada en su contenido
					</div>
				</div>
			</div>
		</>
	);
}
