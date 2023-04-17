import { useContext, useEffect } from "react";
import { AppContext } from "../../App.jsx";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const { result, userName } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userName === "") {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <h2>Congratulations, {userName}!</h2>
      <p>Your score:</p>
      <p>{result} points</p>
    </div>
  );
};

export default Result;
