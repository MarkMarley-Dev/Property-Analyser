import axios from "axios";
import { useState } from "react";
import "./growth.scss";
import PageHeader from "../../../PageHeader/PageHeader";
import Footer from "../../../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Bar } from "react-chartjs-2";

const GrowthSearch = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  const fetchData = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `https://api.propertydata.co.uk/growth?key=TORGPUR3KY&postcode=${text}`
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

  const labels = data.map((label) => parseInt(label[1][2]));

  const percentsInt = parseInt(labels);

  const figures = data.map((figure) => figure[1]);

  const dates = data.map((percent) => percent[1][0]);

  const dataBar = {
    labels: dates.map((figure) => figure),
    datasets: [
      {
        label: "Bottom Margin",
        backgroundColor: "#231f20",
        borderColor: "#eaeaea",
        borderWidth: 1,
        hoverBackgroundColor: "#eaeaea",
        hoverBorderColor: "#231f20",
        data: labels.map((figure) => figure),
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
  console.log(dates);
  console.log(" data test", data);
  console.log(percentsInt);

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
      <div className="growth__ctn">
        <h2 className="growth__page-title">Yearly Growth</h2>
        <div className="growth__title-info-ctn">
          <div className="growth__title-info">
            <p className="growth__title-info-text">
              Welcome to the Yearly Growth, below are the search parameters.
            </p>
            <p className="growth__title-info-text">
              Postcode must be entered without spaces & bedrooms can be only
              selected between 1 - 5 otherwise data won't be returned.
            </p>
            <p className="growth__info--bold">
              Please click top Margin to expand year % growth
            </p>
          </div>
          <form onSubmit={fetchData} className="growth__form">
            <label className="growth__form-label">
              {" "}
              Please Enter Postcode Below
            </label>
            <input
              placeholder="Postcode"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="growth__form-input-postcode"
            />
            <label className="growth__form-label">
              {" "}
              Please Enter the amount of rooms Below
            </label>

            <button className="growth__form-search-btn" type="submit">
              Search
            </button>
          </form>
        </div>
        {data.length ? (
          <div className="growth__barchart">
            <Bar data={dataBar} options={{ maintainAspectRatio: false }} />
            <button onClick={() => setData([])} className="growth__clear-btn">
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
export default GrowthSearch;
