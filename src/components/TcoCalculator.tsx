import React from "react";
import { motion } from "framer-motion";
export default function TcoCalculator() {
  return (
    <section style={{ marginTop: "0px", marginBottom: "0px" }}>
       
      <iframe
        src="/tco-calculator.html"
        title="TCO Calculator"
        style={{
          width: "100%",
          height: "1300px", // adjust this based on your HTML file’s height
          border: "none",
          overflow: "hidden",
        }}
      />
    </section>
  );
}
