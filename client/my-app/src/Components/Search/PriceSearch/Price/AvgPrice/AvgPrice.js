import React, { useState, useEffect } from "react";

import axios from "axios";
import PageHeader from "../../../../PageHeader/PageHeader";
import Footer from "../../../../Footer/Footer";
// import { Bar } from "react-chartjs-2";
import AvgPriceBarChart from "./AvgPriceBar";
function AvgPrice() {
  // const [data, setData] = useState([]);
  // const [query, setQuery] = useState("");
  // const [dataOne, setDataOne] = useState("");

  // // const API_URL = (query) =>
  //   `https://api.propertydata.co.uk/prices?key=TORGPUR3KY&postcode=${query}`;

  // const fetchData = async () => {
  //   const result = await axios.get(API_URL(query));
  //   const newData = Object.entries(result.data.data);
  //   console.log("New data console log!!", newData);
  //   setData(newData);

  return (
    <>
      <PageHeader />

      <AvgPriceBarChart />
      <Footer />
    </>
  );
}
export default AvgPrice;
