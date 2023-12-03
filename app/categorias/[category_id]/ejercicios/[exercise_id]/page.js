// "use client";
// import Workspace from "./../../../../_components/workspace.js";
// import MarkdownRender from "./../../../../_components/_exercises/markdownRender";
// import { Roboto } from "next/font/google";
// import SendButton from "@/app/_components/sendButton.js";
// import BreadCrumb from "@/app/_components/breadCrumb.js";
// import Cookies from "js-cookie";
// import useSWR from "swr";
// import SkeletonLoader from "@/app/_components/skeletonLoader.js";
// import Link from "next/link.js";

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["300", "700"],
// });

// const fetcher = (url) => {
//   return fetch(url, {
//     headers: { Authorization: `Bearer ${Cookies.get("JWT-cookie")}` },
//   })
//     .then((r) => r.json())
//     .then((data) => {
//       return data;
//     });
// };

// export default function Page({ params }) {
//   const url = `${process.env.API_BASE_URL}/categories/${params["category_id"]}/exercises/${params["exercise_id"]}`;
//   const { data: exercise, error, isValidating } = useSWR(url, fetcher, {
//     revalidateOnFocus: false
//   }
//   );

//   if (error) {
//     return <div>Error </div>;
//   }
//   if (isValidating) {
//     return <SkeletonLoader loaderColor={`text-success`} />;
//   }
//   return (
//     <main className="container">
//       <BreadCrumb exercise={exercise} />
//       <div className={`${roboto.className} ${"descripcion"}`}>
//         <h3>{exercise.title}</h3>
//         <MarkdownRender content={exercise.content} />
//       </div>
//       <div className={`${roboto.className} ${"ejercicio"}`}>
//         <Workspace exercise={exercise} />
//         <div className="divButtons">
//           <Link href={`${exercise.last_exercise}`}>
//             <SendButton
//               type={"submit"}
//               className={`${roboto.className} registerButton `}
//               buttonText={"Anterior"}
//             />
//           </Link>
//           {exercise.next_exercise ? (
//             <Link href={`${exercise.next_exercise}`}>
//               <SendButton
//                 type={"submit"}
//                 className={`${roboto.className} registerButton`}
//                 buttonText={"Siguiente"}
//               />
//             </Link>
//           ) : (
//             <Link className="colour-link" href={`/categorias/`}>Volver a categorias</Link>
//           )}
//         </div>
//       </div>
//     </main>
//   );
// }
