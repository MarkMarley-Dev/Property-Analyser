import axios from "axios";
import { useState } from "react";
import "./yield.scss";
import PageHeader from "../../../PageHeader/PageHeader";
import Footer from "../../../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bar } from "react-chartjs-2";

const Yield = () => {
  const [data, setData] = useState({});
  const [text, setText] = useState("");
  const [num, setNum] = useState("");

  const fetchData = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `https://api.propertydata.co.uk/yields?key=TORGPUR3KY&postcode=${text}&bedrooms=${num}`
      );
      const arrData = res.data.data;
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
  console.log(data);
  const percentile = Object.entries(data);
  console.log(percentile);
  //   console.log("data", [data.data["long_let"]["gross_yield"]]);

  //   console.log("percentile", [percentile[0][1]["gross_yield"]]);
  //   const labels = percentile.map((label) => label[0]);

  //   const figures = percentile.map((figure) => figure[1]);

  const dataBar = {
    labels: "Gross Yield",
    datasets: [
      {
        label: "Bottom Margin",
        backgroundColor: "#231f20",
        borderColor: "#eaeaea",
        borderWidth: 1,
        hoverBackgroundColor: "#eaeaea",
        hoverBorderColor: "#231f20",
        data: percentile.length
          ? Number([data["long_let"]["gross_yield"]])
          : [],
      },
      {
        label: "Top Margin",
        backgroundColor: "#B2993E",
        borderColor: "#D5C264",
        borderWidth: 1,
        hoverBackgroundColor: "#D5C264",
        hoverBorderColor: "#D5C264",
        data: [],
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

  //   console.log(" data test", data[1].gross_yield);

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
      <div className="yield__ctn">
        <h2 className="yield__page-title">Yield</h2>
        <div className="yield__title-info-ctn">
          <div className="yield__title-info">
            <p className="yield__title-info-text">
              Welcome to the Yield Search, below are the search parameters.
            </p>
            <p className="yield__title-info-text">
              Postcode must be entered without spaces & bedrooms can be only
              selected between 1 - 5 otherwise data won't be returned.
            </p>
          </div>
          <form onSubmit={fetchData} className="yield__form">
            <label className="yield__form-label">
              Please Enter Postcode Below
            </label>
            <input
              placeholder="Postcode"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="yield__form-input-postcode"
            />
            <input
              type="number"
              value={num}
              onChange={(e) => setNum(e.target.value)}
              placeholder="1 - 5"
              className="avgPrice__form-input-rooms"
            />
            <button className="yield__form-search-btn" type="submit">
              Search
            </button>
          </form>
        </div>
        {percentile.length ? (
          <>
            <div className="yield__results">
              <div className="yield__result-sub-ctn">
                <h2 className="yield__result-title">Results :</h2>
                <p className="yield__result-title--highlighted"></p>
              </div>
              <div className="yield__result-sub">
                <p className="yield__result-main">
                  Yearly Yield = {[data["long_let"]["gross_yield"]]}
                </p>
                {/* <p className="yield__result-text--highlighted"> {data[2][1]}</p> */}

                <div className="yield__result-sub-ctn">
                  <p className="yield__result-text">
                    Number of Points Analysed :{" "}
                    {[data["long_let"]["points_analysed"]]}
                  </p>
                </div>
                {/* <p className="yield__result-text--highlighted"> {data[3][1]}</p> */}
              </div>
            </div>
          </>
        ) : (
          <p></p>
        )}
      </div>
      <Footer />
    </>
  );
};
export default Yield;
