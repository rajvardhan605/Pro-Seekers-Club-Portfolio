import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Footer = ()=>{
  <>
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div>Hello from foot er kfldsjf jdslk sdkjl lkdsfj kljdsf lksdj lksjd ;ksdj l;fjsl fdjlk jsdlk fjsdklgj kldjg klsjg lsjakl
      </motion.div>
    </div>
  </>
}

export default Footer;