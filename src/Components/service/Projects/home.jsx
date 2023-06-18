import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ServiceMapers from "../../utils";
import { FaAngleRight } from "react-icons/fa";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../hooks/useAnimation";
import BottomLine from "../../bottomLine";
import ServiceCom from "./Service";

const JasaLayanan = () => {
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  return (
    <div className="py-20 parent" style={{ fontFamily: "Roboto, sans-serif" }}>
      <motion.div
        className="mb-12"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      ></motion.div>

      <motion.div
        className="grid grid-cols-3 gap-6 justify-center"
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        {ServiceMapers?.map((service) => (
          <div
            key={service.id}
            className={`${
              service.id % 2 === 0
                ? "bg-base-100 impactfull-card shadow-lg"
                : "bg-base-100 impactfull-card shadow-lg"
            } rounded-lg p-6 duration-300`}
          >
            <div
              style={{
                backgroundColor: "#24b47e",
                padding: "16px",
                borderRadius: "8px",
                marginRight: "15px",
              }}
            >
              <h3
                className="mb-0 text-2xl font-semibold text-center text-white"
                style={{ color: "white" }}
              >
                {service.title}
              </h3>
            </div>
            {service.description && (
              <ul
                className="text-accent list-disc pl-8"
                style={{ paddingBottom: "20px" }}
              >
                {service.description
                  .split("\n")
                  .filter((s) => s.trim() !== "")
                  .map((s, i) => (
                    <li key={i + 1} className="mb-4 text-justify text-gray-500">
                      {s.trim()}
                    </li>
                  ))}
              </ul>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default JasaLayanan;
