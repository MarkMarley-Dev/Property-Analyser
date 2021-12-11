import axios from "axios";
import { useState } from "react";
import "./pricePerSqFt.scss";
import PageHeader from "../../../PageHeader/PageHeader";
import Footer from "../../../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Bar } from "react-chartjs-2";

const PricePerSqFtBar = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [num, setNum] = useState("");

  const fetchData = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `https://api.propertydata.co.uk/prices-per-sqf?key=TORGPUR3KY&postcode=${text}`
      );
      const arrData = Object.entries(res.data.data);
      setData(arrData);
      setText("");
      setNum("");
    } catch (error) {
      toast.error(
        " ⛔️ Please Ensure You have Entered Your Search Queries Correctly ⛔️",
        {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
  };

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
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <PageHeader />
      <div className="perSqFt__ctn">
        <h2 className="perSqFt__page-title">Prices Per SqFt</h2>
        <div className="perSqFt__title-info-ctn">
          <div className="perSqFt__title-info">
            <p className="perSqFt__title-info-text">
              Welcome to the Prices Per SqFt, below are the search parameters.
            </p>
            <p className="perSqFt__title-info-text">
              Postcode must be entered without spaces & bedrooms can be only
              selected between 1 - 5 otherwise data won't be returned.
            </p>
          </div>
          <form onSubmit={fetchData} className="perSqFt__form">
            <label className="perSqFt__form-label">
              {" "}
              Please Enter Postcode Below
            </label>
            <input
              placeholder="Postcode"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="perSqFt__form-input-postcode"
            />
            <label className="perSqFt__form-label">
              {" "}
              Please Enter the amount of rooms Below
            </label>
            <input
              type="number"
              value={num}
              onChange={(e) => setNum(e.target.value)}
              placeholder="1 - 5"
              className="perSqFt__form-input-rooms"
            />
            <button className="perSqFt__form-search-btn" type="submit">
              Search
            </button>
          </form>
        </div>
        {data.length ? (
          <div className="perSqFt__barchart">
            <Bar data={dataBar} options={{ maintainAspectRatio: false }} />
            <button onClick={() => setData([])} className="perSqFt__clear-btn">
              Clear Data
            </button>
          </div>
        ) : (
          <p></p>
        )}
      </div>
      <Footer />
    </>
  );
};
export default PricePerSqFtBar;
