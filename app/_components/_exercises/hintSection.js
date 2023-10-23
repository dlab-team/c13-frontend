'use client'

import useSWR from "swr";
import Cookies from "js-cookie";
import SendButton from "../sendButton";
import Image from "next/image";
import SkeletonLoader from "../skeletonLoader";

const fetcher = (url) => {
  return fetch(url, { headers: { Authorization: `Bearer ${Cookies.get("JWT-cookie")}` } }).then((r) => r.json());
}

export default function HintSection({ id, query, queryError, result }) {
  const encodedQuery = encodeURIComponent(query);
  const encodedQueryError = encodeURIComponent(queryError);
  
  const url = queryError ? `${process.env.API_BASE_URL}/exercises/${id}/hint/?query=${encodedQuery}&error=${encodedQueryError}` : `${process.env.API_BASE_URL}/exercises/${id}/hint/?query=${encodedQuery}&current_result=${result}`

  const { data, error, isValidating, mutate } = useSWR(url, fetcher, {
    revalidateOnFocus: false
  });

  if (isValidating) {
    return <SkeletonLoader loaderColor={`text-success`}/>;  // Asegúrate de manejar el estado de carga.
  }
  if (error) {
    return <div>Error</div>;  // Asegúrate de manejar cualquier error que pueda surgir.
  }


  const sendOption = (option) => {

    fetch(`${process.env.API_BASE_URL}/exercises/${data.hint_id}/hint_evaluation/`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${Cookies.get('JWT-cookie')}`,
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      body: JSON.stringify({ 'hint_evaluation': option })
    })
      .then(response => response.json()
      )
      .then(data => {
        console.log(data)
      })
      .catch(apiError => {
        console.log(apiError)
      });

    if (option == false) {
      mutate(`${process.env.API_BASE_URL}/exercises/${id}/hint/?query=${query}&error=${queryError}`)
    }
  }

  return (
    <>
      <div className={"hintSection"}>
        <Image
          width={95}
          height={95}
          src={"/images/Hint.png"}
          alt="desafiolatam"
          priority={true}
          className={"hintImage mt-4"}
        />

        <div className="text-left p-4">
          <p>{data.content}</p>
        </div>
      </div>

      <div className={"hintQuestion"}>
        <h4>¿La pista entregada fue de ayuda?</h4>
        <SendButton className={"hintButton"} onClick={() => sendOption(true)} buttonText={'Si'} />
        <SendButton className={"hintButton"} onClick={() => sendOption(false)} buttonText={'No'} />
      </div>
    </>

  )

}

