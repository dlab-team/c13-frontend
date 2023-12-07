"use client";
import LearningPath from "../_components/learningPath/learningPath";

async function getData() {
  const res = await fetch(`${process.env.HOST}/data.json`);
  const data = await res.json();

  console.log(data);
  return data;
}

export default async function Page() {
  const data = await getData();

  return <LearningPath learningPath={data} />;
}
