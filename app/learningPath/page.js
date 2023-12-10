"use client"
import { useState, useEffect } from "react";
import { Roboto, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import LearningPath from "../_components/learningPath/learningPath";

  async function getData () {
    const res = await fetch('/public/data.json')
    const data = await res.json()
    
    console.log(data)
    return data;
  }
  
 export default async function Page() {
   const data = await getData();
    

    return <LearningPath learningPath={data}/>
     
  }


