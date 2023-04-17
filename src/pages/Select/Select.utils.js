export const getResult = (allWords, goodWords) => {
  const selectedAnswers = allWords.filter(({ isSelected }) => isSelected);
  const selectedCorrectAnswersCounter = selectedAnswers.reduce(
    (accumulator, { label }) => {
      if (goodWords.includes(label)) {
        return accumulator + 1;
      }
      return accumulator;
    },
    0
  );

  return (
    selectedCorrectAnswersCounter * 2 -
    (selectedAnswers.length -
      selectedCorrectAnswersCounter +
      goodWords.length -
      selectedCorrectAnswersCounter)
  );
};
