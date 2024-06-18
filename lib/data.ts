import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import pro1 from "@/public/pro1.png";
import pro2 from "@/public/pro2.png";
import pro3 from "@/public/pro3.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Data Analyst at XtraLeap",
    location: "Hyderabad",
    description:
      "Developed Python scripts to dynamically update JSON files based on database changes.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Trainee at Persistent Systems",
    location: "Hyderabad, Remote",
    description:
      "Engaged in advanced training on backend system scalability and high availability management using SAP HANA",
    icon: React.createElement(CgWorkAlt),
    date: "2023-2024",
  },
  {
    title: "Zynthetix",
    location: "Hyderabad",
    description:
      "Working as a Data Engineer, designing and implementing efficient data pipelines using Python, SQL, and data processing tools. Ensuring seamless data integration and transformation to drive business insights.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Real-time E-commerce Platform",
    description:
      "Java-based e-commerce platform with real-time frontend and MySQL backend for chat, product updates, and shopping cart.",
    tags: ["Java", "MySQL", "HTML", "CSS", "JavaScript"],
    imageUrl: pro1,
  },
  {
    title: "Location-Based App with AWS Amplify",
    description:
      "Responsive location app with real-time tracking, maps, route planning, and AWS services for scalability.",
      tags: ["React", "TypeScript", "AWS Amplify", "AWS Services"],
    imageUrl: pro2,
  },
  {
    title: "Spam Detection System with R",
    description:
      "Spam detection system using R and quanteda, exploring efficient data platforms for large datasets.",
      tags: ["R", "quanteda", "Data Analytics"],
    imageUrl: pro3,
  },
] as const;

export const skillsData = [
  "Java",
  "C",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "GitHub",
  "Plotly",
  "TensorFlow",
  "MySQL",
  "Auth0 (API)",
  "AWS"
] as const;
