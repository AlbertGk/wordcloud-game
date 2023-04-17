import { useContext, useState } from "react";
import { AppContext } from "../../App.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const userContext = useContext(AppContext);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const handleOnClick = () => {
    userContext.setUserName(inputValue);
    navigate("/select");
  };

  return (
    <div>
      <h2>Worldcloud game</h2>
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button disabled={inputValue === ""} onClick={handleOnClick}>
        play
      </button>
    </div>
  );
};

export default Login;
