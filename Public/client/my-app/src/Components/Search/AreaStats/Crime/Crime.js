import axios from "axios";
import { useState } from "react";
import "./crime.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageHeader from "../../../PageHeader/PageHeader";
import Footer from "../../../Footer/Footer";

import { Bar } from "react-chartjs-2";

const CrimeSearch = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  const fetchData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://api.propertydata.co.uk/crime?key=TORGPUR3KY&postcode=${text}`
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

  const percentile = data.slice(5, data.length - 1);

  const labels = percentile.map((label) => label[1]);

  const figures = percentile.map((figure) => figure[1]);
  console.log(data);

  //   const subject = [data[3][1]["zoopla.co.uk"]["rent"]];
  //   console.log("test", [data[3][1]["zoopla.co.uk"]["rent"][0]]);

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
      <div className="crime__ctn">
        <h2 className="crime__page-title">Crime Statistics Search</h2>
        <div className="crime__title-info-ctn">
          <div className="crime__title-info">
            <p className="crime__title-info-text">
              Welcome to the Crime Statistics search, below are the search
              parameters.
            </p>
            <p className="crime__title-info-text">
              Postcode must be entered without spaces.
            </p>
          </div>
          <form onSubmit={fetchData} className="crime__form">
            <label className="crime__form-label">
              Please Enter Postcode Below
            </label>
            <input
              placeholder="Postcode"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="crime__form-input-postcode"
            />

            <button className="crime__form-search-btn" type="submit">
              Search
            </button>
          </form>
        </div>
        {data.length ? (
          <div className="crime__barchart">
            <div className="crime__rent-results">
              <h2 className="crime__rent-result-subtitle">
                Local Crime Statistics
              </h2>
              <div className="crime__rent-result-sub-ctn">
                <h2 className="crime__rent-result-text">
                  Population: {data[1][1]}
                </h2>
                <p className="crime__rent-result-text">
                  Crimes in the last 12 Months : {data[2][1]}
                </p>
                <p className="crime__rent-result-text">
                  Crimes per one thousand people : {data[3][1]}
                </p>
                <p className="crime__rent-result-text">
                  Crime rating : {data[4][1]}
                </p>
                <h2 className="crime__rent-result-text">Observations :</h2>
                <p className="crime__rent-result-text">{data[6][1][0]}</p>
                <p className="crime__rent-result-text">{data[6][1][1]}</p>
                <p className="crime__rent-result-text">{data[6][1][2]}</p>
              </div>
              {/*    // ? Rent Number 2 ? \\         */}
              <div className="crime__rent-result-sub-ctn">
                <h3 className="crime__rent-result-text">
                  Type & Number of Crimes:
                </h3>
                <p className="crime__rent-result-text">
                  {" "}
                  Anti-Social Behaviour :{" "}
                  {[data[5][1]["Anti-social behaviour"]]}
                </p>
                <p className="crime__rent-result-text">
                  {" "}
                  Bicycle Theft : {[data[5][1]["Bicycle theft"]]}
                </p>
                <p className="crime__rent-result-text">
                  {" "}
                  Burglary : {[data[5][1]["Burglary"]]}
                </p>
                <p className="crime__rent-result-text">
                  {" "}
                  Criminal damage and arson :{" "}
                  {[data[5][1]["Criminal damage and arson"]]}
                </p>
                <p className="crime__rent-result-text">
                  {" "}
                  Drug Related : {[data[5][1]["Drugs"]]}
                </p>
                <p className="crime__rent-result-text">
                  {" "}
                  Other Theft : {[data[5][1]["Other theft"]]}
                </p>
                <p className="crime__rent-result-text">
                  {" "}
                  Possession of Weapons :{" "}
                  {[data[5][1]["Possession of weapons"]]}
                </p>
                <p className="crime__rent-result-text">
                  {" "}
                  Public Order : {[data[5][1]["Public order"]]}
                </p>
                <p className="crime__rent-result-text">
                  {" "}
                  Robbery : {[data[5][1]["Robbery"]]}
                </p>
                <p className="crime__rent-result-text">
                  {" "}
                  Shoplifting : {[data[5][1]["Shoplifting"]]}
                </p>
                <p className="crime__rent-result-text">
                  Theft from a person : {[data[5][1]["Theft from the person"]]}
                </p>
                <p className="crime__rent-result-text">
                  {" "}
                  Vehicle Crime : {[data[5][1]["Vehicle crime"]]}{" "}
                </p>
                <p className="crime__rent-result-text">
                  Violence and sexual offences :{" "}
                  {[data[5][1]["Violence and sexual offences"]]}
                </p>

              </div>
            </div>
            <button onClick={() => setData([])} className="crime__clear-btn">
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
export default CrimeSearch;
