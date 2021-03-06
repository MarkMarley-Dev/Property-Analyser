import axios from "axios";
import { useState } from "react";
import "./demandRental.scss";
import PageHeader from "../../../PageHeader/PageHeader";
import Footer from "../../../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DemandRental = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  const fetchData = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `https://api.propertydata.co.uk/demand-rent?key=TORGPUR3KY&postcode=${text}`
      );
      const arrData = Object.entries(res.data);
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
  console.log(percentile);
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
      <div className="demand__rent-ctn">
        <h2 className="demand__rent-page-title"> Rental Demand </h2>
        <div className="demand__rent-title-info-ctn">
          <div className="demand__rent-title-info">
            <p className="demand__rent-title-info-text">
              Welcome to the Demand Srent-earch, below are the search
              parameters.
            </p>
            <p className="demand__rent-title-info-text">
              Postcode must be entered without spaces & bedrooms can be only
              selected between 1 - 5 otherwise data won't be returned.
            </p>
          </div>
          <form onSubmit={fetchData} className="demand__rent-form">
            <label className="demand__rent-form-label">
              Please Enter Postcode Below
            </label>
            <input
              placeholder="Postcode"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="demand__rent-form-input-postcode"
            />

            <button className="demand__rent-form-search-btn" type="submit">
              Search
            </button>
          </form>
        </div>
        {figures.length ? (
          <div className="demand__rent-results">
            <div className="demand__rent-result-sub-ctn">
              <h2 className="demand__rent-result-title">
                Searched Postcode : {figures[1]}
              </h2>
            </div>
            <div className="demand__rent-result-sub-ctn">
              <p className="demand__rent-result-text">
                Postcode Type : {figures[2]}
              </p>
              {/* <p className="demand__rent-result-text--highlighted"> {data[2][1]}</p> */}
            </div>
            <div className="demand__rent-result-sub-ctn">
              <p className="demand__rent-result-text">
                Number of Properties for Rent : {figures[3]}
              </p>
              {/* <p className="demand__rent-result-text--highlighted"> {data[3][1]}</p> */}
            </div>
            <div className="demand__rent-result-sub-ctn">
              <p className="demand__rent-result-text">
                Average rental transactions per month: {figures[4]}
              </p>
            </div>
            <div className="demand__rent-result-sub-ctn">
              <p className="demand__rent-result-text">
                Turnover per Month: {figures[5]}
              </p>
            </div>
            <div className="demand__rent-result-sub-ctn">
              <p className="demand__rent-result-text">
                Months of Inventory : {figures[6]}
              </p>
            </div>{" "}
            <div className="demand__rent-result-sub-ctn">
              <p className="demand__rent-result-text">
                Days on the Market : {figures[7]}
              </p>
            </div>{" "}
            <div className="demand__rent-result-sub-ctn">
              <p className="demand__rent-result-text">
                {" "}
                Demand rating : {figures[8]}
              </p>
            </div>
            <p className="demand__rent-result-text">{figures[9]}</p>
          </div>
        ) : (
          <p></p>
        )}
      </div>
      <Footer />
    </>
  );
};
export default DemandRental;
