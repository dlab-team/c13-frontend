"use client"
import { useState, useEffect } from "react";
import { Roboto, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import LearningPath from "../_components/learningPath/learningPath";

 
  async function getData () {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    
    console.log(data)
    return data;
  }
  
 export default async function Page() {
   const users = await getData();

    return (
      <>
        <LearningPath learningPath={users}/>
      </>
        )
  }

