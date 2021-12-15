import axios from "axios";
import { useState } from "react";
import "./agentSearch.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageHeader from "../../../PageHeader/PageHeader";
import Footer from "../../../Footer/Footer";

import { Bar } from "react-chartjs-2";

const AgentSearch = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  const fetchData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://api.propertydata.co.uk/agents?key=TORGPUR3KY&postcode=${text}`
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
      <div className="agentSearch__avg-ctn">
        <h2 className="agentSearch__avg-page-title">Local Agents Search</h2>
        <div className="agentSearch__avg-title-info-ctn">
          <div className="agentSearch__avg-title-info">
            <p className="agentSearch__avg-title-info-text">
              Welcome to the Average rental Search, below are the search
              parameters.
            </p>
            <p className="agentSearch__avg-title-info-text">
              Postcode must be entered without spaces.
            </p>
          </div>
          <form onSubmit={fetchData} className="agentSearch__avg-form">
            <label className="agentSearch__avg-form-label">
              Please Enter Postcode Below
            </label>
            <input
              placeholder="Postcode"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="agentSearch__avg-form-input-postcode"
            />

            <button className="agentSearch__avg-form-search-btn" type="submit">
              Search
            </button>
          </form>
        </div>
        {data.length ? (
          <div className="agentSearch__avg-barchart">
            <div className="agentSearch__rent-results">
              <div className="agentSearch__rent-title-ctn">
                <h2 className="agentSearch__rent-result-title">
                  Searched Postcode : {[data[1][1]]}
                </h2>
                <h3 className="agentSearch__rent-result-title">
                  Postcode Type : {[data[2][1]]}
                </h3>
              </div>

              <h2 className="agentSearch__rent-result-subtitle">
                Top Rental Agents
              </h2>
              <div className="agentSearch__rent-result-sub-ctn">
                <h2 className="agentSearch__rent-result-text">
                  Number 1 : {[data[3][1]["zoopla.co.uk"]["rent"][0]["agent"]]}
                </h2>
                <p className="agentSearch__rent-result-text">
                  Average Property Value : £
                  {[data[3][1]["zoopla.co.uk"]["rent"][0]["average_value"]]} Per
                  Week
                </p>
                <h2 className="agentSearch__rent-result-text">Branches :</h2>
                <p className="agentSearch__rent-result-text">
                  {[data[3][1]["zoopla.co.uk"]["rent"][0]["branches"][0]]}
                  {[data[3][1]["zoopla.co.uk"]["rent"][0]["branches"][1]]}
                  {[data[3][1]["zoopla.co.uk"]["rent"][0]["branches"][2]]}
                </p>
                <p className="agentSearch__rent-result-text">
                  Units on offer :
                  {[data[3][1]["zoopla.co.uk"]["rent"][0]["units_offered"]]}
                </p>
              </div>
              {/*    // ? Rent Number 2 ? \\         */}
              <div className="agentSearch__rent-result-sub-ctn">
                <h2 className="agentSearch__rent-result-text">
                  Number {[data[3][1]["zoopla.co.uk"]["rent"][1]["rank"]]} :
                  {[data[3][1]["zoopla.co.uk"]["rent"][1]["agent"]]}
                </h2>
                <p className="agentSearch__rent-result-text">
                  Average Property Value : £
                  {[data[3][1]["zoopla.co.uk"]["rent"][1]["average_value"]]} Per
                  Week
                </p>
                <h2 className="agentSearch__rent-result-text">Branches :</h2>
                <p className="agentSearch__rent-result-text">
                  {[data[3][1]["zoopla.co.uk"]["rent"][1]["branches"][0]]}
                  {[data[3][1]["zoopla.co.uk"]["rent"][1]["branches"][1]]}
                  {[data[3][1]["zoopla.co.uk"]["rent"][1]["branches"][2]]}
                </p>
                <p className="agentSearch__rent-result-text">
                  Units on offer :
                  {[data[3][1]["zoopla.co.uk"]["rent"][1]["units_offered"]]}
                </p>
              </div>
              {/*    // ? Rent Number 3 ? \\         */}
              <div className="agentSearch__rent-result-sub-ctn">
                <h2 className="agentSearch__rent-result-text">
                  Number {[data[3][1]["zoopla.co.uk"]["rent"][2]["rank"]]} :
                  {[data[3][1]["zoopla.co.uk"]["rent"][2]["agent"]]}
                </h2>
                <p className="agentSearch__rent-result-text">
                  Average Property Value : £
                  {[data[3][1]["zoopla.co.uk"]["rent"][2]["average_value"]]} Per
                  Week
                </p>
                <h2 className="agentSearch__rent-result-text">Branches :</h2>
                <p className="agentSearch__rent-result-text">
                  {[data[3][1]["zoopla.co.uk"]["rent"][2]["branches"][0]]}
                  {[data[3][1]["zoopla.co.uk"]["rent"][2]["branches"][1]]}
                  {[data[3][1]["zoopla.co.uk"]["rent"][2]["branches"][2]]}
                </p>
                <p className="agentSearch__rent-result-text">
                  Units on offer :
                  {[data[3][1]["zoopla.co.uk"]["rent"][2]["units_offered"]]}
                </p>
              </div>
              {/*    // ? Rent Number 4 ? \\         */}
              <div className="agentSearch__rent-result-sub-ctn">
                <h2 className="agentSearch__rent-result-text">
                  Number {[data[3][1]["zoopla.co.uk"]["rent"][3]["rank"]]} :
                  {[data[3][1]["zoopla.co.uk"]["rent"][3]["agent"]]}
                </h2>
                <p className="agentSearch__rent-result-text">
                  Average Property Value : £
                  {[data[3][1]["zoopla.co.uk"]["rent"][3]["average_value"]]} Per
                  Week
                </p>
                <h2 className="agentSearch__rent-result-text">Branches :</h2>
                <p className="agentSearch__rent-result-text">
                  {[data[3][1]["zoopla.co.uk"]["rent"][3]["branches"][0]]}
                  {[data[3][1]["zoopla.co.uk"]["rent"][3]["branches"][1]]}
                  {[data[3][1]["zoopla.co.uk"]["rent"][3]["branches"][2]]}
                </p>
                <p className="agentSearch__rent-result-text">
                  Units on offer :
                  {[data[3][1]["zoopla.co.uk"]["rent"][3]["units_offered"]]}
                </p>
              </div>
              {/*    // ? Rent Number 5 ? \\         */}
              <div className="agentSearch__rent-result-sub-ctn">
                <h2 className="agentSearch__rent-result-text">
                  Number {[data[3][1]["zoopla.co.uk"]["rent"][4]["rank"]]} :
                  {[data[3][1]["zoopla.co.uk"]["rent"][4]["agent"]]}
                </h2>
                <p className="agentSearch__rent-result-text">
                  Average Property Value : £
                  {[data[3][1]["zoopla.co.uk"]["rent"][4]["average_value"]]} Per
                  Week
                </p>
                <h2 className="agentSearch__rent-result-text">Branches :</h2>
                <p className="agentSearch__rent-result-text">
                  {[data[3][1]["zoopla.co.uk"]["rent"][4]["branches"][0]]}
                  {[data[3][1]["zoopla.co.uk"]["rent"][4]["branches"][1]]}
                  {[data[3][1]["zoopla.co.uk"]["rent"][4]["branches"][2]]}
                </p>
                <p className="agentSearch__rent-result-text">
                  Units on offer :
                  {[data[3][1]["zoopla.co.uk"]["rent"][4]["units_offered"]]}
                </p>
              </div>
              <div>
                <h2 className="agentSearch__rent-result-subtitle">
                  Top For-Sale Agents
                </h2>
                <div className="agentSearch__rent-result-sub-ctn">
                  {/*    // ! Top For Sale Agents ! \\           */}

                  <h2 className="agentSearch__rent-result-text">
                    Number {[data[3][1]["zoopla.co.uk"]["sale"][0]["rank"]]} :
                    {[data[3][1]["zoopla.co.uk"]["sale"][0]["agent"]]}
                  </h2>
                  <p className="agentSearch__rent-result-text">
                    Average Property Value : £
                    {[data[3][1]["zoopla.co.uk"]["sale"][0]["average_value"]]}
                  </p>
                  <h2 className="agentSearch__rent-result-text">Branches :</h2>
                  <p className="agentSearch__rent-result-text">
                    {[data[3][1]["zoopla.co.uk"]["sale"][0]["branches"][0]]}
                    {[data[3][1]["zoopla.co.uk"]["sale"][0]["branches"][1]]}
                    {[data[3][1]["zoopla.co.uk"]["sale"][0]["branches"][2]]}
                  </p>
                  <p className="agentSearch__rent-result-text">
                    Units on offer :
                    {[data[3][1]["zoopla.co.uk"]["sale"][0]["units_offered"]]}
                  </p>
                </div>
                {/*    // ? Rent Number 2 ? \\         */}
                <div className="agentSearch__rent-result-sub-ctn">
                  <h2 className="agentSearch__rent-result-text">
                    Number {[data[3][1]["zoopla.co.uk"]["sale"][1]["rank"]]} :
                    {[data[3][1]["zoopla.co.uk"]["sale"][1]["agent"]]}
                  </h2>
                  <p className="agentSearch__rent-result-text">
                    Average Property Value : £
                    {[data[3][1]["zoopla.co.uk"]["sale"][1]["average_value"]]}
                  </p>
                  <h2 className="agentSearch__rent-result-text">Branches :</h2>
                  <p className="agentSearch__rent-result-text">
                    {[data[3][1]["zoopla.co.uk"]["sale"][1]["branches"][0]]}
                    {[data[3][1]["zoopla.co.uk"]["sale"][1]["branches"][1]]}
                    {[data[3][1]["zoopla.co.uk"]["sale"][1]["branches"][2]]}
                  </p>
                  <p className="agentSearch__rent-result-text">
                    Units on offer :
                    {[data[3][1]["zoopla.co.uk"]["sale"][1]["units_offered"]]}
                  </p>
                </div>
                {/*    // ? Rent Number 3 ? \\         */}
                <div className="agentSearch__rent-result-sub-ctn">
                  <h2 className="agentSearch__rent-result-text">
                    Number {[data[3][1]["zoopla.co.uk"]["sale"][2]["rank"]]} :
                    {[data[3][1]["zoopla.co.uk"]["sale"][2]["agent"]]}
                  </h2>
                  <p className="agentSearch__rent-result-text">
                    Average Property Value : £
                    {[data[3][1]["zoopla.co.uk"]["sale"][2]["average_value"]]}
                  </p>
                  <h2 className="agentSearch__rent-result-text">Branches :</h2>
                  <p className="agentSearch__rent-result-text">
                    {[data[3][1]["zoopla.co.uk"]["sale"][2]["branches"][0]]}
                    {[data[3][1]["zoopla.co.uk"]["sale"][2]["branches"][1]]}
                    {[data[3][1]["zoopla.co.uk"]["sale"][2]["branches"][2]]}
                  </p>
                  <p className="agentSearch__rent-result-text">
                    Units on offer :
                    {[data[3][1]["zoopla.co.uk"]["sale"][2]["units_offered"]]}
                  </p>
                </div>
                {/*    // ? Rent Number 4 ? \\         */}
                <div className="agentSearch__rent-result-sub-ctn">
                  <h2 className="agentSearch__rent-result-text">
                    Number {[data[3][1]["zoopla.co.uk"]["sale"][3]["rank"]]} :
                    {[data[3][1]["zoopla.co.uk"]["sale"][3]["agent"]]}
                  </h2>
                  <p className="agentSearch__rent-result-text">
                    Average Property Value : £
                    {[data[3][1]["zoopla.co.uk"]["sale"][3]["average_value"]]}
                  </p>
                  <h2 className="agentSearch__rent-result-text">Branches :</h2>
                  <p className="agentSearch__rent-result-text">
                    {[data[3][1]["zoopla.co.uk"]["sale"][3]["branches"][0]]}
                    {[data[3][1]["zoopla.co.uk"]["sale"][3]["branches"][1]]}
                    {[data[3][1]["zoopla.co.uk"]["sale"][3]["branches"][2]]}
                  </p>
                  <p className="agentSearch__rent-result-text">
                    Units on offer :
                    {[data[3][1]["zoopla.co.uk"]["sale"][3]["units_offered"]]}
                  </p>
                </div>
                {/*    // ? Rent Number 5 ? \\         */}
                <div className="agentSearch__rent-result-sub-ctn">
                  <h2 className="agentSearch__rent-result-text">
                    Number {[data[3][1]["zoopla.co.uk"]["sale"][4]["rank"]]} :
                    {[data[3][1]["zoopla.co.uk"]["sale"][4]["agent"]]}
                  </h2>
                  <p className="agentSearch__rent-result-text">
                    Average Property Value : £
                    {[data[3][1]["zoopla.co.uk"]["sale"][4]["average_value"]]}
                  </p>
                  <h2 className="agentSearch__rent-result-text">Branches :</h2>
                  <p className="agentSearch__rent-result-text">
                    {[data[3][1]["zoopla.co.uk"]["sale"][4]["branches"][0]]}
                    {[data[3][1]["zoopla.co.uk"]["sale"][4]["branches"][1]]}
                    {[data[3][1]["zoopla.co.uk"]["sale"][4]["branches"][2]]}
                  </p>
                  <p className="agentSearch__rent-result-text">
                    Units on offer :
                    {[data[3][1]["zoopla.co.uk"]["sale"][4]["units_offered"]]}
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setData([])}
              className="agentSearch__avg-clear-btn"
            >
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
export default AgentSearch;
