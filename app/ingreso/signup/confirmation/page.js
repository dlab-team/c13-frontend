import Link from "next/link"
export default function page() {
    return (
      <>
      <div className="text-center">Se ha enviado un correo para confirmar su e-mail</div>
      <p className="text-center colour-link">Ir a <Link className="colour-link" href="/ingreso/login">login</Link></p>
      </>
    )
  }
  
  