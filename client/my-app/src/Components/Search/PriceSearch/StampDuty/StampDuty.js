import axios from "axios";
import { useState } from "react";
import "./stampDuty.scss";
import PageHeader from "../../../PageHeader/PageHeader";
import Footer from "../../../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StampDuty = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [num, setNum] = useState("");
  const [country, setCountry] = useState("");
  const [mode, setMode] = useState("");

  const fetchData = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `https://api.propertydata.co.uk/stamp-duty-calculator?key=TORGPUR3KY&value=${num}`
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

  //   const percentile = data.slice(5, data.length - 1);

  //   const labels = percentile.map((label) => label);

  //   const figures = percentile.map((figure) => figure[1]);

  //   console.log([data[0][1]]);
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
      <div className="stamp__ctn">
        <h2 className="stamp__page-title">Stampduty Calculator</h2>
        <div className="stamp__title-info-ctn">
          <div className="stamp__title-info">
            <p className="stamp__title-info-text">
              Welcome to the stamp Search, below are the search parameters.
            </p>
            <p className="stamp__title-info-text">
              Postcode must be entered without spaces & bedrooms can be only
              selected between 1 - 5 otherwise data won't be returned.
            </p>
          </div>
          <form onSubmit={fetchData} className="stamp__form">
            <label className="stamp__form-description">
              Please Enter Info Below
            </label>

            <input
              type="number"
              value={num}
              onChange={(e) => setNum(e.target.value)}
              placeholder="House Value"
              className="stamp__form-input-rooms"
            />

            <button className="stamp__form-search-btn" type="submit">
              Search
            </button>
          </form>
        </div>
        {data.length ? (
          <div className="stamp__results">
            <div className="stamp__result-sub-ctn">
              <h2 className="stamp__result-title">{data[1][1]}</h2>
            </div>
            <div className="stamp__result-sub-ctn">
              <p className="stamp__result-text">
                Amount of Tax Payable : £{data[2][1]}
              </p>
            </div>
            <div className="stamp__result-sub-ctn">
              <p className="stamp__result-text">
                Effective Rate : {data[3][1]}%
              </p>
            </div>
            <div className="stamp__result-sub-ctn">
              <p className="stamp__result-text">Country : {data[4][1]}</p>
            </div>
            <div className="stamp__result-sub-ctn">
              <p className="stamp__result-text">Mode Used : {data[5][1]}</p>
              {/* <p className="stamp__result-text--highlighted">{data[5][1]}</p> */}
            </div>
            <div className="stamp__result-sub-ctn">
              <p className="stamp__result-text">
                {/* Months of Inventory : {data[6][1]} */}
              </p>
              {/* <p className="stamp__result-text--highlighted"> {data[6][1]}</p> */}
            </div>{" "}
            <div className="stamp__result-sub-ctn">
              <p className="stamp__result-text">
                {/* Days on the Market : {data[7][1]} */}
              </p>
              {/* <p className="stamp__result-text--highlighted">{data[7][1]}</p> */}
            </div>{" "}
            <div className="stamp__result-sub-ctn">
              {/* <p className="stamp__result-text--highlighted">{data[8][1]}</p> */}
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
export default StampDuty;
