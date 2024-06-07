import americanExpress from "./assets/americanExpress.svg";
import "./App.css";
import { Fragment } from "react";
import SimpleNight from "./assets/simplenight";
import Google from "./assets/google.png";

function App() {
  const brandName = process.env.REACT_APP_BRAND_NAME || "";

  return (
    <div className="App">
      <header className="App-header">
        {brandName && (
          <Fragment>
            <h2>{brandName}</h2>
            <div className="logo">
              {brandName?.toLocaleLowerCase() == "simplenight" ? (
                <SimpleNight />
              ) : brandName?.toLocaleLowerCase() == "americanexpress" ? (
                <img src={americanExpress} className="logo" alt="logo" />
              ) : brandName?.toLocaleLowerCase() == "google" ? (
                <img src={Google} className="logo" alt="logo" />
              ) : (
                ""
              )}
            </div>
          </Fragment>
        )}

        <p>
          This is <b>White Label</b> cross-platform <br />
          iOS, Android, and Progressive Web Apps
        </p>
      </header>
    </div>
  );
}

export default App;
