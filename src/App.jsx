import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getData } from "./api";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    getData()
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
      });
  }, []);

  console.log(data);
  return <div className="App">test</div>;
}

export default App;
