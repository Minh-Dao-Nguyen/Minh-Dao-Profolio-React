import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
}

const Reveal = ({ children, width = "fit-content" }: Props) => {
    return(
        <motion.div>

        </motion.div>
    );
}


export default Reveal;