import React, { useState, useEffect } from "react";
import Footer from "../../../Footer/Footer";
import PricePerSqFtBar from "./PricePerSqFtBar";

function PricePerSqft() {
  return (
    <>
      <PageHeader />

      <PricePerSqFtBar />
      <Footer />
    </>
  );
}
export default PricePerSqft;
