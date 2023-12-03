"use client"
import { useState, useEffect } from "react";
import { Roboto, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "700"],
});

  async function getData () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    console.log(data)
  }
  
  function LearningPath() {
    getData()
    return (
        <h1>Learning Path</h1>
      
    )
  }

  // console.log(categories)


  // const [active, setActive] = useState([true, ...Array(categories.length - 1).fill(false)]);

  // const handleClick = (index) => {
  //   const newActive = Array(categories.length).fill(false); // Create a new array with all categories set to false

  //   // Set the clicked category to true
  //   newActive[index] = true;

  //   setActive(newActive);
  // }
  

export default LearningPath;
