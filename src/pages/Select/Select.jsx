import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App.jsx";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button.jsx";
import { getResult } from "./Select.utils.js";

const Select = () => {
  const { data, userName, setResult } = useContext(AppContext);
  const navigate = useNavigate();
  const [shouldCheckAnswers, setShouldCheckAnswers] = useState(false);
  const [allWords, setAllWords] = useState(data?.allWords || []);

  useEffect(() => {
    if (userName === "") {
      navigate("/");
    }
  }, []);

  const title = data?.question || "";
  const handleElementClick = (label) => {
    if (shouldCheckAnswers === true) {
      return;
    }
    const newData = allWords.map((element) =>
      element.label === label
        ? { label, isSelected: !element.isSelected }
        : element
    );
      setAllWords(newData);
      console.log(newData);
  };

  const handleCheckAnswers = () => {
    const newData = allWords.map((element) =>
      element.isSelected
        ? { ...element, isCorrect: data.goodWords.includes(element.label) }
        : element
    );

    setAllWords(newData);
      setShouldCheckAnswers(true);
  };

  const handleFinishGame = () => {
    setResult(getResult(allWords, data.goodWords));

    navigate("/result");
  };
  return (
    <div>
      <h2>{title}</h2>
      <div>
        {allWords.map(({ label, isSelected }) => (
          <span
            key={label}
            style={{ color: isSelected ? "blue" : "gray" }}
            onClick={() => handleElementClick(label)}
          >
            {label}
          </span>
        ))}
      </div>
      {shouldCheckAnswers ? (
        <Button callback={handleFinishGame} label="Finish game" />
      ) : (
        <Button callback={handleCheckAnswers} label="Check answers" />
      )}
    </div>
  );
};

export default Select;
