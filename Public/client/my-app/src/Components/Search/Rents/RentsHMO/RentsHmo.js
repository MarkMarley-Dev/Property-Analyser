import axios from "axios";
import { useState } from "react";
import "./rentsHmo.scss";
import PageHeader from "../../../PageHeader/PageHeader";
import Footer from "../../../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Bar } from "react-chartjs-2";

const RentsHmo = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  const fetchData = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `https://api.propertydata.co.uk/rents-hmo?key=TORGPUR3KY&postcode=${text}`
      );
      const arrData = Object.entries(res.data.data);
      setData(arrData);
      setText("");
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

  const percentile = data.slice(0, data.length - 1);

  const labels = percentile.map((label) => label[0]);

  const figures = percentile.map((figure) => figure[(1, 1)]);
  console.log(labels);
  console.log(figures);
  console.log(" data test", data);

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
              [data[0][1]["70pc_range"][0]],
              [data[0][1]["80pc_range"][0]],
              [data[0][1]["90pc_range"][0]],
              [data[0][1]["100pc_range"][0]],
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
              [data[0][1]["70pc_range"][1]],
              [data[0][1]["80pc_range"][1]],
              [data[0][1]["90pc_range"][1]],
              [data[0][1]["100pc_range"][1]],
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

  const dataBarTwo = {
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
              [data[1][1]["70pc_range"][0]],
              [data[1][1]["80pc_range"][0]],
              [data[1][1]["90pc_range"][0]],
              [data[1][1]["100pc_range"][0]],
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
              [data[1][1]["70pc_range"][1]],
              [data[1][1]["80pc_range"][1]],
              [data[1][1]["90pc_range"][1]],
              [data[1][1]["100pc_range"][1]],
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
  const dataBarThree = {
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
              [data[2][1]["70pc_range"][0]],
              [data[2][1]["80pc_range"][0]],
              [data[2][1]["90pc_range"][0]],
              [data[2][1]["100pc_range"][0]],
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
              [data[2][1]["70pc_range"][1]],
              [data[2][1]["80pc_range"][1]],
              [data[2][1]["90pc_range"][1]],
              [data[2][1]["100pc_range"][1]],
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
  const dataBarFour = {
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
              [data[3][1]["70pc_range"][0]],
              [data[3][1]["80pc_range"][0]],
              [data[3][1]["90pc_range"][0]],
              [data[3][1]["100pc_range"][0]],
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
              [data[3][1]["70pc_range"][1]],
              [data[3][1]["80pc_range"][1]],
              [data[3][1]["90pc_range"][1]],
              [data[3][1]["100pc_range"][1]],
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
      <div className="hmo__ctn">
        <h2 className="hmo__page-title">HMO Averages & Stats</h2>
        <div className="hmo__title-info-ctn">
          <div className="hmo__title-info">
            <p className="hmo__title-info-text">
              Welcome to the Prices Per SqFt, below are the search parameters.
            </p>
            <p className="hmo__title-info-text">
              Postcode must be entered without spaces & bedrooms can be only
              selected between 1 - 5 otherwise data won't be returned.
            </p>
          </div>
          <form onSubmit={fetchData} className="hmo__form">
            <label className="hmo__form-label">
              {" "}
              Please Enter Postcode Below
            </label>
            <input
              placeholder="Postcode"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="hmo__form-input-postcode"
            />

            <button className="hmo__form-search-btn" type="submit">
              Search
            </button>
          </form>
        </div>
        {data.length ? (
          <div className="hmo__barchart">
            <h2>Double with En-suite</h2>
            <Bar data={dataBar} options={{ maintainAspectRatio: false }} />
            {/* <button onClick={() => setData([])} className="hmo__clear-btn">
              Clear Data
            </button> */}
          </div>
        ) : (
          <p></p>
        )}
        {data.length ? (
          <div className="hmo__barchart">
            <h2>Double with Shared Bath</h2>
            <Bar data={dataBarTwo} options={{ maintainAspectRatio: false }} />
            {/* <button onClick={() => setData([])} className="hmo__clear-btn">
              Clear Data
            </button> */}
          </div>
        ) : (
          <p></p>
        )}
        {data.length ? (
          <div className="hmo__barchart">
            <h2>Single With En-Suite</h2>
            <Bar data={dataBarThree} options={{ maintainAspectRatio: false }} />
            {/* <button onClick={() => setData([])} className="hmo__clear-btn">
              Clear Data
            </button> */}
          </div>
        ) : (
          <p></p>
        )}
        {data.length ? (
          <div className="hmo__barchart">
            <h2>Single with Shared Bath</h2>
            <Bar data={dataBarFour} options={{ maintainAspectRatio: false }} />
            <button onClick={() => setData([])} className="hmo__clear-btn">
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
export default RentsHmo;
