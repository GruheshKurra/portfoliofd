"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  A <span className="font-medium">passionate software developer</span> with a <span className="font-medium">B.Tech in Computer Science</span> from KL University. Skilled in programming languages like Java, Python, and frontend technologies like React.js. Experienced in working with frameworks, libraries, and tools such as Pandas, NumPy, TensorFlow, and AWS.
</p>
<p className="mb-3">
  Proven ability to deliver high-quality solutions through projects like developing an e-commerce website, automating JSON updates, and building a location-based app. Committed to <span className="font-medium">continuous learning</span>, as demonstrated by certifications in TensorFlow and ServiceNow. Eager to contribute expertise to innovative projects and create remarkable software.
</p>
    </motion.section>
  );
}
