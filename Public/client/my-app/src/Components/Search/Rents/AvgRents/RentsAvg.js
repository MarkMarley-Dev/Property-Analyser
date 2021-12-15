import axios from "axios";
import { useState } from "react";
import "./rentsAvg.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageHeader from "../../../PageHeader/PageHeader";
import Footer from "../../../Footer/Footer";

import { Bar } from "react-chartjs-2";

const RentsAvg = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [num, setNum] = useState("");

  const fetchData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://api.propertydata.co.uk/rents?key=TORGPUR3KY&postcode=${text}&bedrooms=${num}`
      );
      const arrData = Object.entries(res.data);
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

  const percentile = data.slice(5, data.length - 1);

  const labels = percentile.map((label) => label[1]);

  const figures = percentile.map((figure) => figure[1]);

  const dataBar = {
    labels: ["70% Range", "80% Range", "90% Range", "100% Range"],
    datasets: [
      {
        label: "Bottom Margin",
        backgroundColor: "#231f20",
        borderColor: "#eaeaea",
        borderWidth: 1,
        hoverBackgroundColor: "#eaeaea",
        hoverBorderColor: "#231f20",
        data: data.length
          ? [
              figures[0].long_let["70pc_range"][0],
              figures[0].long_let["80pc_range"][0],
              figures[0].long_let["90pc_range"][0],
              figures[0].long_let["100pc_range"][0],
            ]
          : [],
      },
      {
        label: "Top Margin",
        backgroundColor: "#B2993E",
        borderColor: "#D5C264",
        borderWidth: 1,
        hoverBackgroundColor: "#D5C264",
        hoverBorderColor: "#D5C264",
        data: data.length
          ? [
              figures[0].long_let["70pc_range"][1],
              figures[0].long_let["80pc_range"][1],
              figures[0].long_let["90pc_range"][1],
              figures[0].long_let["100pc_range"][1],
            ]
          : [],
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

  // ? .. Console Data Logs .. ? \\
  //   console.log("labels", labels);

  //   console.log(" data test", [data]);
  //   console.log("percentiles", percentile);

  return (
    <>
      <PageHeader />
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
      <div className="rents__avg-ctn">
        <h2 className="rents__avg-page-title">Average rental price Search</h2>
        <div className="rents__avg-title-info-ctn">
          <div className="rents__avg-title-info">
            <p className="rents__avg-title-info-text">
              Welcome to the Average rental Search, below are the search
              parameters.
            </p>
            <p className="rents__avg-title-info-text">
              Postcode must be entered without spaces & bedrooms can be only
              selected between 1 - 5 otherwise data won't be returned.
            </p>
            <p className="rents__avg-title-info-text">
              All rents are expressed as per week (for monthly values, multiply
              by 4.333).
            </p>
          </div>
          <form onSubmit={fetchData} className="rents__avg-form">
            <label className="rents__avg-form-label">
              Please Enter Postcode Below
            </label>
            <input
              placeholder="Postcode"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="rents__avg-form-input-postcode"
            />
            <label className="rents__avg-form-label">
              Please Enter the amount of rooms Below
            </label>
            <input
              type="number"
              value={num}
              onChange={(e) => setNum(e.target.value)}
              placeholder="1 - 5"
              className="rents__avg-form-input-rooms"
            />
            <button className="rents__avg-form-search-btn" type="submit">
              Search
            </button>
          </form>
        </div>
        {data.length ? (
          <div className="rents__avg-barchart">
            <Bar data={dataBar} options={{ maintainAspectRatio: false }} />

            <button
              onClick={() => setData([])}
              className="rents__avg-clear-btn"
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
export default RentsAvg;
