import axios from "axios";
import { useState } from "react";
import "./avgPrice.scss";

import { Bar } from "react-chartjs-2";

const AvgPriceBarChart = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [num, setNum] = useState("");

  const fetchData = async (e) => {
    e.preventDefault();
    const res = await axios.get(
      `https://api.propertydata.co.uk/prices?key=TORGPUR3KY&postcode=${text}&bedrooms=${num}`
    );
    const arrData = Object.entries(res.data.data);
    setData(arrData);
    setText("");
    setNum("");
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // if (!data.length) return <p>Loading...</p>;

  const percentile = data.slice(3, data.length - 1);

  const labels = percentile.map((label) => label[0]);

  const figures = percentile.map((figure) => figure[1]);

  const dataBar = {
    labels: labels,
    datasets: [
      {
        label: "Bottom Margin",
        backgroundColor: "#231f20",
        borderColor: "#eaeaea",
        borderWidth: 1,
        hoverBackgroundColor: "#eaeaea",
        hoverBorderColor: "#231f20",
        data: figures.map((figure) => figure[0]),
      },
      {
        label: "Top Margin",
        backgroundColor: "#B2993E",
        borderColor: "#D5C264",
        borderWidth: 1,
        hoverBackgroundColor: "#D5C264",
        hoverBorderColor: "#D5C264",
        data: figures.map((figure) => figure[1]),
      },
    ],
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 100,
            },
          },
        ],
      },
    },
  };

  console.log(labels);
  console.log(figures);
  console.log(" data test", data);

  return (
    <div className="avgPrice__ctn">
      <h2 className="avgPrice__page-title">Average Price Search</h2>
      <div className="avgPrice__title-info-ctn">
        <div className="avgPrice__title-info">
          <p className="avgPrice__title-info-text">
            Welcome to the Average Price Search, below are the search
            parameters.
          </p>
          <p className="avgPrice__title-info-text">
            Postcode must be entered without spaces & bedrooms can be only
            selected between 1 - 5 otherwise data won't be returned.
          </p>
        </div>
        <form onSubmit={fetchData} className="avgPrice__form">
          <label className="avgPrice__form-label">
            {" "}
            Please Enter Postcode Below
          </label>
          <input
            placeholder="Postcode"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="avgPrice__form-input-postcode"
          />
          <label className="avgPrice__form-label">
            {" "}
            Please Enter the amount of rooms Below
          </label>
          <input
            type="number"
            value={num}
            onChange={(e) => setNum(e.target.value)}
            placeholder="1 - 5"
            className="avgPrice__form-input-rooms"
          />
          <button className="avgPrice__form-search-btn" type="submit">
            Search
          </button>
        </form>
      </div>
      {data.length ? (
        <div className="avgPrice__barchart">
          <Bar data={dataBar} options={{ maintainAspectRatio: false }} />
          <button onClick={() => setData([])} className="avgPrice__clear-btn">
            Clear Data
          </button>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};
export default AvgPriceBarChart;
