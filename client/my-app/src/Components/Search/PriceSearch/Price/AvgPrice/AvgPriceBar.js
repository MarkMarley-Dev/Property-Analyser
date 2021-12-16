import axios from "axios";
import { useState } from "react";
import "./avgPrice.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Bar } from "react-chartjs-2";

const AvgPriceBarChart = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [num, setNum] = useState("");

  const fetchData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://api.propertydata.co.uk/prices?key=TORGPUR3KY&postcode=${text}&bedrooms=${num}`
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

  const percentile = data.slice(2, data.length - 1);

  console.log(data);
  // console.log("raw data", [data[6][1][0]["price"]]);

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
        {data.length ? (
          <div className="avgPrice__raw-data">
            <div className="avgPrice__property">
              <div className="avgPrice__property-img"></div>
              <h2 className="avgPrice__property-info">
                {" "}
                Property Type : {data[6][1][0]["type"]}
              </h2>
              <h2 className="avgPrice__property-info">
                {" "}
                Price : £{data[6][1][0]["price"]}
              </h2>
              <h2 className="avgPrice__property-info">
                {" "}
                Bedrooms : {data[6][1][0]["bedrooms"]}
              </h2>
            </div>
            <div className="avgPrice__property">
              <div className="avgPrice__property-img"></div>
              <h2 className="avgPrice__property-info">
                {" "}
                Property Type : {data[6][1][1]["type"]}
              </h2>
              <h2 className="avgPrice__property-info">
                {" "}
                Price : £{data[6][1][1]["price"]}
              </h2>
              <h2 className="avgPrice__property-info">
                {" "}
                Bedrooms : {data[6][1][1]["bedrooms"]}
              </h2>
            </div>
            <div className="avgPrice__property">
              <div className="avgPrice__property-img"></div>
              <h2 className="avgPrice__property-info">
                {" "}
                Property Type : {data[6][1][2]["type"]}
              </h2>
              <h2 className="avgPrice__property-info">
                {" "}
                Price : £{data[6][1][2]["price"]}
              </h2>
              <h2 className="avgPrice__property-info">
                {" "}
                Bedrooms : {data[6][1][2]["bedrooms"]}
              </h2>
            </div>
            <div className="avgPrice__property">
              <div className="avgPrice__property-img"></div>
              <h2 className="avgPrice__property-info">
                {" "}
                Property Type : {data[6][1][3]["type"]}
              </h2>
              <h2 className="avgPrice__property-info">
                {" "}
                Price : £{data[6][1][3]["price"]}
              </h2>
              <h2 className="avgPrice__property-info">
                {" "}
                Bedrooms : {data[6][1][3]["bedrooms"]}
              </h2>
            </div>
            <div className="avgPrice__property">
              <div className="avgPrice__property-img"></div>
              <h2 className="avgPrice__property-info">
                {" "}
                Property Type : {data[6][1][4]["type"]}
              </h2>
              <h2 className="avgPrice__property-info">
                {" "}
                Price : £{data[6][1][4]["price"]}
              </h2>
              <h2 className="avgPrice__property-info">
                {" "}
                Bedrooms : {data[6][1][4]["bedrooms"]}
              </h2>
            </div>
            <div className="avgPrice__property">
              <div className="avgPrice__property-img"></div>
              <h2 className="avgPrice__property-info">
                {" "}
                Property Type : {data[6][1][5]["type"]}
              </h2>
              <h2 className="avgPrice__property-info">
                {" "}
                Price : £{data[6][1][5]["price"]}
              </h2>
              <h2 className="avgPrice__property-info">
                {" "}
                Bedrooms : {data[6][1][5]["bedrooms"]}
              </h2>
            </div>
            <div className="avgPrice__property">
              <div className="avgPrice__property-img"></div>
              <h2 className="avgPrice__property-info">
                {" "}
                Property Type : {data[6][1][6]["type"]}
              </h2>
              <h2 className="avgPrice__property-info">
                {" "}
                Price : £{data[6][1][6]["price"]}
              </h2>
              <h2 className="avgPrice__property-info">
                {" "}
                Bedrooms : {data[6][1][6]["bedrooms"]}
              </h2>
            </div>
            <div className="avgPrice__property">
              <div className="avgPrice__property-img"></div>
              <h2 className="avgPrice__property-info">
                {" "}
                Property Type : {data[6][1][7]["type"]}
              </h2>
              <h2 className="avgPrice__property-info">
                {" "}
                Price : £{data[6][1][7]["price"]}
              </h2>
              <h2 className="avgPrice__property-info">
                {" "}
                Bedrooms : {data[6][1][7]["bedrooms"]}
              </h2>
            </div>
            <div className="avgPrice__property">
              <div className="avgPrice__property-img"></div>
              <h2 className="avgPrice__property-info">
                {" "}
                Property Type : {data[6][1][8]["type"]}
              </h2>
              <h2 className="avgPrice__property-info">
                {" "}
                Price : £{data[6][1][8]["price"]}
              </h2>
              <h2 className="avgPrice__property-info">
                {" "}
                Bedrooms : {data[6][1][9]["bedrooms"]}
              </h2>
            </div>
            <div className="avgPrice__property">
              <div className="avgPrice__property-img"></div>
              <h2 className="avgPrice__property-info">
                {" "}
                Property Type : {data[6][1][10]["type"]}
              </h2>
              <h2 className="avgPrice__property-info">
                {" "}
                Price : £{data[6][1][10]["price"]}
              </h2>
              <h2 className="avgPrice__property-info">
                {" "}
                Bedrooms : {data[6][1][10]["bedrooms"]}
              </h2>
            </div>
            <button onClick={() => setData([])} className="avgPrice__clear-btn">
              Clear Data
            </button>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
};
export default AvgPriceBarChart;
