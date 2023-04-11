"use client";
import { motion } from "framer-motion";
import { ReactNode, useRef } from "react";
import { useWindowSize } from "usehooks-ts";

type Props = {
  children?: ReactNode;
};

function Draggable(props: Props) {
  const html = typeof document != "undefined" ? document.documentElement : null;
  const docRef = useRef(html);
  const size = useWindowSize();
  if (typeof document === "undefined") return <div>{props.children}</div>;

  return (
    <motion.div
      key={JSON.stringify(size)}
      style={{ userSelect: "none" }}
      dragConstraints={docRef}
      draggable={false}
      drag={true}
      onClick={(e) => e.stopPropagation()}
      whileHover={{
        transition: { duration: 0.5 },
        cursor: "grab",
      }}
      initial={{
        zIndex: 100,
        position: "absolute",
        left: Math.random() * size.width * 0.75,
        top: Math.random() * size.height * 0.75,
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 2,
          type: "spring",
        },
      }}
      exit={{ opacity: 1 }}
    >
      {props.children}
    </motion.div>
  );
}

export default Draggable;
