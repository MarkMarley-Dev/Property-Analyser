import axios from "axios";
import { useState } from "react";
import "./yield.scss";
import PageHeader from "../../../PageHeader/PageHeader";
import Footer from "../../../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Yield = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [num, setNum] = useState("");

  const fetchData = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `https://api.propertydata.co.uk/yields?key=TORGPUR3KY&postcode=${text}&bedrooms=${num}`
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

  const percentile = Object.entries(data);
  console.log(data);

  //   const labels = percentile.map((label) => label[0]);

  //   const figures = percentile.map((figure) => figure[1]);

  //   const dataBar = {
  //     labels: labels,
  //     datasets: [
  //       {
  //         label: "Bottom Margin",
  //         backgroundColor: "#231f20",
  //         borderColor: "#eaeaea",
  //         borderWidth: 1,
  //         hoverBackgroundColor: "#eaeaea",
  //         hoverBorderColor: "#231f20",
  //         data: figures.map((figure) => figure[0]),
  //       },
  //       {
  //         label: "Top Margin",
  //         backgroundColor: "#B2993E",
  //         borderColor: "#D5C264",
  //         borderWidth: 1,
  //         hoverBackgroundColor: "#D5C264",
  //         hoverBorderColor: "#D5C264",
  //         data: figures.map((figure) => figure[1]),
  //       },
  //     ],
  //     options: {
  //       scales: {
  //         yAxes: [
  //           {
  //             ticks: {
  //               min: 0,
  //               max: 100,
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   };

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
        {data.length ? (
          <div className="yield__results">
            <div className="yield__result-sub-ctn">
              <h2 className="yield__result-title">Searched Postcode :</h2>
              {/* <p className="yield__result-title--highlighted">{data[1][1]}</p> */}
            </div>
            <div className="yield__result-sub-ctn">
              {/* <p className="yield__result-text">Postcode Type : {data[2][1]}</p> */}
              {/* <p className="yield__result-text--highlighted"> {data[2][1]}</p> */}
            </div>
            <div className="yield__result-sub-ctn">
              <p className="yield__result-text">
                {/* Number of Property For sale : {data[3][1]} */}
              </p>
              {/* <p className="yield__result-text--highlighted"> {data[3][1]}</p> */}
            </div>
            <div className="yield__result-sub-ctn">
              <p className="yield__result-text">
                {/* Average sales per month: {data[4][1]} */}
              </p>
              {/* <p className="yield__result-text--highlighted"> {data[4][1]}</p> */}
            </div>
            <div className="yield__result-sub-ctn">
              <p className="yield__result-text">
                {/* Turnover per Month: {data[5][1]} */}
              </p>
              {/* <p className="yield__result-text--highlighted">{data[5][1]}</p> */}
            </div>
            <div className="yield__result-sub-ctn">
              <p className="yield__result-text">
                {/* Months of Inventory : {data[6][1]} */}
              </p>
              {/* <p className="yield__result-text--highlighted"> {data[6][1]}</p> */}
            </div>{" "}
            <div className="yield__result-sub-ctn">
              <p className="yield__result-text">
                {/* Days on the Market : {data[7][1]} */}
              </p>
              {/* <p className="yield__result-text--highlighted">{data[7][1]}</p> */}
            </div>{" "}
            <div className="yield__result-sub-ctn">
              {/* <p className="yield__result-text"> yield rating : {data[8][1]}</p> */}
              {/* <p className="yield__result-text--highlighted">{data[8][1]}</p> */}
            </div>
          </div>
        ) : (
          <p></p>
        )}
      </div>
      <Footer />
    </>
  );
};
export default Yield;
