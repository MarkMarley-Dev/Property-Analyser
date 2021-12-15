import axios from "axios";
import { useState } from "react";
import "./soldPerSqFt.scss";
import PageHeader from "../../../PageHeader/PageHeader";
import Footer from "../../../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Bar } from "react-chartjs-2";

const SoldPerSqFt = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [num, setNum] = useState("");

  const fetchData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://api.propertydata.co.uk/sold-prices-per-sqf?key=TORGPUR3KY&postcode=${text}&bedrooms=${num}`
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

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // if (!data.length) return <p>Loading...</p>;

  const percentile = data.slice(5, data.length - 1);

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
      <div className="soldPerSqFt__ctn">
        <h2 className="soldPerSqFt__page-title">Average Sold Price Per SqFt</h2>
        <div className="soldPerSqFt__title-info-ctn">
          <div className="soldPerSqFt__title-info">
            <p className="soldPerSqFt__title-info-text">
              Welcome to the Average Sold Price Per SqFt search, below are the
              search parameters.
            </p>
            <p className="soldPerSqFt__title-info-text">
              Postcode must be entered without spaces & bedrooms can be only
              selected between 1 - 5 otherwise data won't be returned.
            </p>
          </div>
          <form onSubmit={fetchData} className="soldPerSqFt__form">
            <label className="soldPerSqFt__form-label">
              {" "}
              Please Enter Postcode Below
            </label>
            <input
              placeholder="Postcode"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="soldPerSqFt__form-input-postcode"
            />
            <label className="soldPerSqFt__form-label">
              {" "}
              Please Enter the amount of rooms Below
            </label>
            <input
              type="number"
              value={num}
              onChange={(e) => setNum(e.target.value)}
              placeholder="1 - 5"
              className="soldPerSqFt__form-input-rooms"
            />
            <button className="soldPerSqFt__form-search-btn" type="submit">
              Search
            </button>
          </form>
        </div>
        {data.length ? (
          <div className="soldPerSqFt__barchart">
            <Bar data={dataBar} options={{ maintainAspectRatio: false }} />
            <button
              onClick={() => setData([])}
              className="soldPerSqFt__clear-btn"
            >
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
export default SoldPerSqFt;
