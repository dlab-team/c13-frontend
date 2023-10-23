import useSWR from "swr";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Image from 'next/image'
import CheckCertificate from "./checkCertificate";
import Link from "next/link";
import {
    LinkedinShareButton,
    LinkedinIcon,
} from 'next-share'


const certificateFetcher = (url) => {
    return fetch(url, { headers: { Authorization: `Bearer ${Cookies.get("JWT-cookie")}` } }).then((r) => r.json());
}

export default function CertificateSection() {
    const [certificateData, setCertificateData] = useState(Array(6).fill(null));

    const certificatesUrl = `${process.env.API_BASE_URL}/certificates/`;

    
    const { data: newCertificateData, error: certificateError, isValidating: isCertificateValidating } = useSWR(certificatesUrl, certificateFetcher, {
        revalidateOnFocus: false
    });

    console.log(newCertificateData)
    
    useEffect(() => {
        if (newCertificateData) {
            setCertificateData((prevData) => {
                const newData = [...prevData];
                newCertificateData.forEach((item, index) => {
                    if (item && index < newData.length) {
                        newData[index] = item;
                    }
                });
                return newData;
            });
        }
    }, [newCertificateData]);

    return (
        <>
            <div className="row">
                {certificateData.map((element, index) => (
                    <div className="col-12 col-md-4 text-center certficates-container" key={index}>
                        {element ? (
                            <>
                                <div className="certificate-container-text">
                                    <p className=" texto-certificados"> {element.name}</p>
                                    <Link className="" href={`${element.link.url ? element.link.url : '#'}`} target="_blank">
                                        <Image
                                            height={100}
                                            width={150}
                                            src={`/images/certificado-progreso.png`}
                                            alt="desafiolatam"
                                            priority={true}
                                            className={`text-center ${element.link.url ? '' : 'not-granted'}`}
                                        />
                                    </Link>
                                </div>
                                <div className="certificate-share">
                                    <LinkedinShareButton url={element.link.url}>
                                        <LinkedinIcon size={32} round />
                                    </LinkedinShareButton>
                                </div>

                            </>
                        ) : (
                            <>
                                <p className=" texto-certificados-bloqueados">Certificado bloqueado</p>
                                <Image
                                    height={100}
                                    width={150}
                                    src={`/images/certificado-progreso.png`}
                                    alt="desafiolatam"
                                    priority={true}
                                    className={`text-center not-granted`}
                                />

                            </>
                        )}
                    </div>
                ))}

            </div>
        </>
    )
}
