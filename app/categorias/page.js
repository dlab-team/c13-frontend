"use client";
import useSWR from "swr";
import Categories from "./../_components/categories/categories";
import Cookies from "js-cookie";
import SkeletonLoader from "../_components/skeletonLoader";
import LearningPath from "./../_components/learningPath/learningPath";

const fetcher = (url) => {
  return fetch(url, { headers: { Authorization: `Bearer ${Cookies.get("JWT-cookie")}` } }).then((r) => r.json());
}

export default function Page() {
  const { data, error, isLoading } = useSWR(`${process.env.API_BASE_URL}/categories/menu`, fetcher);

  if (isLoading) {
    return <SkeletonLoader loaderColor={`text-success`}/>;  // Asegúrate de manejar el estado de carga.
  }
  if (error) {
    return <div>Error </div>;  // Asegúrate de manejar cualquier error que pueda surgir.
  }

  return <Categories categories={data} />, <LearningPath categories={data}/>;
}
