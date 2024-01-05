import Image from "next/image"
import "./testimonio-home.css"

export default function Testimonios({ src_perfil, src_test }) {
  return (

    <div className="test_card">
      <div className="img_test">
        <Image src={src_perfil}
          alt="perfil"
          width={75}
          height={150}></Image>
      </div>
      <Image
      style={{borderRadius:"10px"}}
        src={src_test}
        alt="testimonio"
        width={350}
        height={104}
      ></Image>
    </div>
  )
}