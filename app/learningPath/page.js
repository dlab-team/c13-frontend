//"use client";
import fsPromises from "fs/promises";
import path from "path";
import LearningPath from "../_components/learningPath/learningPath";

async function getData() {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), "app/learningPath/data.json");
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath);
  // Parse data as json
  const data = JSON.parse(jsonData);

  console.log(data);
  return data;
}

export default async function Page() {
  const data = await getData();

  return <LearningPath learningPath={data} />;
}
