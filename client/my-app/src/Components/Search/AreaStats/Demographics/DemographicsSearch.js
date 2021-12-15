import axios from "axios";
import { useState } from "react";
import "./demographicsSearch.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageHeader from "../../../PageHeader/PageHeader";
import Footer from "../../../Footer/Footer";

import { Bar } from "react-chartjs-2";

const DemographicsSearch = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  const fetchData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://api.propertydata.co.uk/demographics?key=TORGPUR3KY&postcode=${text}`
      );
      const arrData = Object.entries(res);
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
      <div className="demo__ctn">
        <h2 className="demo__page-title">Demographic Statistics Search</h2>
        <div className="demo__title-info-ctn">
          <div className="demo__title-info">
            <p className="demo__title-info-text">
              Welcome to the Demograhpic Statistics search where you can receive
              an array of data form diverse data points. Please follow the
              search parameters.
            </p>
            <p className="demo__title-info-text">
              Postcode must be entered without spaces.
            </p>
          </div>
          <form onSubmit={fetchData} className="demo__form">
            <label className="demo__form-label">
              Please Enter Postcode Below
            </label>
            <input
              placeholder="Postcode"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="demo__form-input-postcode"
            />

            <button className="demo__form-search-btn" type="submit">
              Search
            </button>
          </form>
        </div>
        {data.length ? (
          <div className="demo__results">
            <div className="demo__result-header">
              <h2 className="demo__result-subtitle">
                Local Demographic Statistics
              </h2>
              <h2 className="demo__result-postcode">
                Postcode : {data[0][1].postcode}
              </h2>

              <p className="demo__result-postcode-type">
                Postcode Type : {data[0][1].postcode_type}
              </p>
            </div>
            <div className="demo__result-sub-ctn">
              <div className="demo__result-social">
                <h2 className="demo__result-sub-header"> Social Statistics</h2>
                <p className="demo__result-text">
                  Health Score : {data[0][1].data.health}
                </p>
                <p className="demo__result-text">
                  Depravation Score : {data[0][1].data.deprivation}
                </p>
                <p className="demo__result-text">
                  Proportion with Degree :{" "}
                  {data[0][1].data.proportion_with_degree}%
                </p>
                <p className="demo__result-text">
                  Vehicle Ownership : {data[0][1].data.vehicles_per_household}
                </p>
                <h2 className="demo__result-mini-header">
                  Social Grades in Percentages
                </h2>
                <p className="demo__result-text">
                  AB : {data[0][1].data.social_grade.ab}%
                </p>
                <p className="demo__result-text">
                  C1 : {data[0][1].data.social_grade.c1}%
                </p>
                <p className="demo__result-text">
                  C2 : {data[0][1].data.social_grade.c2}%
                </p>
                <p className="demo__result-text">
                  DE : {data[0][1].data.social_grade.de}%
                </p>
              </div>
              <div className="demo__result-education">
                <h2 className="demo__result-sub-header">Social & Politics</h2>
                <p className="demo__result-text">Constituencies :</p>
                <p className="demo__result-text">
                  {data[0][1].data.politics.constituences[0]}
                </p>
                <p className="demo__result-text">
                  {data[0][1].data.politics.constituences[1]}
                </p>
                <p className="demo__result-text">
                  {data[0][1].data.politics.constituences[2]}
                </p>
                <p className="demo__result-text">
                  Proportion with Degree :{" "}
                  {data[0][1].data.proportion_with_degree}%
                </p>
                <h2 className="demo__result-mini-header">
                  Latest Election Results
                </h2>
                <p className="demo__result-text">
                  Conservative : {data[0][1].data.politics.results.Conservative}
                </p>
                <p className="demo__result-text">
                  Green : {data[0][1].data.politics.results.Green}
                </p>
                <p className="demo__result-text">
                  Labour : {data[0][1].data.politics.results.Labour}
                </p>
                <p className="demo__result-text">
                  Liberal Democrat{" "}
                  {data[0][1].data.politics.results["Liberal Democrat"]}
                </p>
                <p className="demo__result-text">
                  Proportion with Degree :{" "}
                  {data[0][1].data.proportion_with_degree}%
                </p>
              </div>

              <div className="demo__result-age">
                <h2 className="demo__result-sub-header">Age Groups:</h2>
                <p className="demo__result-text">
                  0-4 : {data[0][1].data.age["0-4"]}%{"  **  "}
                  5-9 : {data[0][1].data.age["5-9"]}%
                </p>

                <p className="demo__result-text">
                  10-14 : {data[0][1].data.age["10-14"]}% {"  **     "} 15-19 :{" "}
                  {data[0][1].data.age["15-19"]}%
                </p>

                <p className="demo__result-text">
                  20-24 : {data[0][1].data.age["20-24"]}% {" **  "} 25-29 :{" "}
                  {data[0][1].data.age["25-29"]}%
                </p>
                <p className="demo__result-text">
                  25-29 :{data[0][1].data.age["25-29"]}% {" **  "} 30-34 :{" "}
                  {data[0][1].data.age["30-34"]}%
                </p>

                <p className="demo__result-text">
                  35-39 :{data[0][1].data.age["35-39"]}% {" **  "}40-44 :{" "}
                  {data[0][1].data.age["40-44"]}%
                </p>

                <p className="demo__result-text">
                  45-49 : {data[0][1].data.age["45-49"]}% {" **  "}50-54 :{" "}
                  {data[0][1].data.age["50-54"]}%
                </p>

                <p className="demo__result-text">
                  55-59 :{data[0][1].data.age["55-59"]}% {" **  "} 60-64 :{" "}
                  {data[0][1].data.age["60-64"]}%
                </p>

                <p className="demo__result-text">
                  65-69 :{data[0][1].data.age["65-69"]}% {" **  "}70-74 :{" "}
                  {data[0][1].data.age["70-74"]}%
                </p>

                <p className="demo__result-text">
                  75-79 :{data[0][1].data.age["75-79"]}% {" **  "} 80-84 :{" "}
                  {data[0][1].data.age["80-84"]}%
                </p>

                <p className="demo__result-text">
                  85+ :{data[0][1].data.age["85-89"]}%
                </p>
              </div>

              <div className="demo__result-commute">
                <h2 className="demo__result-sub-header">Commute Method :</h2>
                <p className="demo__result-text">
                  Underground :{" "}
                  {data[0][1].data.commute_method.underground_light_rail}%{""}
                </p>
                <p className="demo__result-text">
                  Train : {data[0][1].data.commute_method.train}%
                </p>
                <p className="demo__result-text">
                  Taxi : {data[0][1].data.commute_method.taxi}%
                </p>
                <p className="demo__result-text">
                  Motorcycle : {data[0][1].data.commute_method.motorcycle}%
                </p>
                <p className="demo__result-text">
                  Foot : {data[0][1].data.commute_method.foot}%
                </p>
                <p className="demo__result-text">
                  Car : {data[0][1].data.commute_method.car_driver}%
                </p>
                <p className="demo__result-text">
                  Bus : {data[0][1].data.commute_method.bus}%
                </p>
                <p className="demo__result-text">
                  Bicycle : {data[0][1].data.commute_method.bicycle}%
                </p>
                <p className="demo__result-text">
                  Work from Home : {data[0][1].data.commute_method.at_home}%
                </p>
              </div>
            </div>
            <button onClick={() => setData([])} className="demo__clear-btn">
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
export default DemographicsSearch;
