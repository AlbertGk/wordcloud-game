import { useState, useEffect, createContext } from "react";
import "./App.css";
import { getData } from "./api.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Select from "./pages/Select/Select.jsx";
import Result from "./pages/Result/Result.jsx";

export const AppContext = createContext();
function App() {
  const [data, setData] = useState();
  const [userName, setUserName] = useState("");
  const [result, setResult] = useState(0);
  useEffect(() => {
    getData()
      .then((res) => res.json())
      .then(({ data }) => {
        const sanitizedData = {
          ...data,
          goodWords: data.good_words,
          allWords: data.all_words.map((word) => ({
            label: word,
            isSelected: false,
          })),
        };
        setData(sanitizedData);
      });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/select",
      element: <Select />,
    },
    {
      path: "/result",
      element: <Result />,
    },
  ]);

  return (
    <AppContext.Provider
      value={{ data, result, setResult, userName, setUserName }}
    >
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
