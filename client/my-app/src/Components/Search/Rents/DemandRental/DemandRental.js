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
        `https://api.propertydata.co.uk/demand-rent?key=TORGPUR3KY&postcode=sw12`
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
        {data.length ? (
          <div className="demand__rent-results">
            <div className="demand__rent-result-sub-ctn">
              <h2 className="demand__rent-result-title">
                {/* Searched Postcode : {data[1][1]} */}
              </h2>
              {/* <p className="demand__rent-result-title--highlighted">{data[1][1]}</p> */}
            </div>
            <div className="demand__rent-result-sub-ctn">
              <p className="demand__rent-result-text">
                {/* Postcode Type : {data[2][1]} */}
              </p>
              {/* <p className="demand__rent-result-text--highlighted"> {data[2][1]}</p> */}
            </div>
            <div className="demand__rent-result-sub-ctn">
              <p className="demand__rent-result-text">
                {/* Number of Property For sale : {data[3][1]} */}
              </p>
              {/* <p className="demand__rent-result-text--highlighted"> {data[3][1]}</p> */}
            </div>
            <div className="demand__rent-result-sub-ctn">
              <p className="demand__rent-result-text">
                {/* Average sales per month: {data[4][1]} */}
              </p>
              {/* <p className="demand__rent-result-text--highlighted"> {data[4][1]}</p> */}
            </div>
            <div className="demand__rent-result-sub-ctn">
              <p className="demand__rent-result-text">
                {/* Turnover per Month: {data[5][1]} */}
              </p>
              {/* <p className="demand__rent-result-text--highlighted">{data[5][1]}</p> */}
            </div>
            <div className="demand__rent-result-sub-ctn">
              <p className="demand__rent-result-text">
                {/* Months of Inventory : {data[6][1]} */}
              </p>
              {/* <p className="demand__rent-result-text--highlighted"> {data[6][1]}</p> */}
            </div>{" "}
            <div className="demand__rent-result-sub-ctn">
              <p className="demand__rent-result-text">
                {/* Days on the Market : {data[7][1]} */}
              </p>
              {/* <p className="demand__rent-result-text--highlighted">{data[7][1]}</p> */}
            </div>{" "}
            <div className="demand__rent-result-sub-ctn">
              <p className="demand__rent-result-text">
                {" "}
                {/* Demand rrent-ating : {data[8][1]} */}
              </p>
              {/* <p className="demand__rent-result-text--highlighted">{data[8][1]}</p> */}
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
export default DemandRental;
