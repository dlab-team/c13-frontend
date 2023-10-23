import Link from "next/link"

export default function page() {
    return (
      <>
      <div className="text-center">Se ha enviado un correo al email ingresado para modificar tu password</div>
      <p className="text-center">Ir a <Link className="colour-link" href="/ingreso/login">login</Link></p>
      </>
    )
  }
  
  