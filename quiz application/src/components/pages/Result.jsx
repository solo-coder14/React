import _ from "lodash";
import { useParams, useLocation } from "react-router-dom";
import useAnswers from "../../hooks/useAnswers";
import Analysis from "../Analysis";
import Summary from "../Summary";

export default function Result() {
  const { id } = useParams();
  const location = useLocation();
  const { state } = location;
  const { qna } = state || {}; // Add fallback for undefined state

  const { loading, error, answers } = useAnswers(id);

  function calculate() {
    if (!answers || !qna) return 0; // Add safety check
    
    let score = 0;

    answers.forEach((question, index1) => {
      let correctIndexes = [], checkedIndexes = [];

      question.options.forEach((option, index2) => {
        if (option.correct) correctIndexes.push(index2);
        if (qna[index1]?.options[index2]?.checked) { // Add optional chaining
          checkedIndexes.push(index2);
          option.checked = true;
        }
      });

      if (_.isEqual(correctIndexes, checkedIndexes)) {
        score = score + 5;
      }
    });

    return score;
  }
  const userScore = calculate();

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>There was an error!</div>}

      {answers && answers.length > 0 && (
        <>
          <Summary score={userScore} noq={answers.length} />
          <Analysis answers={answers} />
        </>
      )}
    </>
  );
}