import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import quizApi from "./quizApi";
import QuizAnswer from "./QuizAnswer";

const QuizBundle = () => {
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNext, setShowNext] = useState(false);
  const [reset, setReset] = useState(false);

  let item = quizApi[currentIndex];

  const startQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setShowNext(false);
  };

  const showCorrectAnswerDetails = () => {
    setScore((prev) => prev + 1);
  };

  const showNextBtn = () => {
    setShowNext(true);
  };
  const showNextQuestion = () => {
    setCurrentIndex((prev) => prev + 1);
    setReset(!reset);
  };

  return (
    <>
      {currentIndex < quizApi.length ? (
        <div>
          <Card sx={{ maxWidth: 600 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Quiz Game
              </Typography>
              <div>
                <Typography variant="h5" component="div">
                  {item.id}. {item.question}
                </Typography>
                <ul>
                  {item.list.map((list, index) => (
                    <QuizAnswer
                      key={index}
                      list={list}
                      onShowCorrectAnswerDetails={showCorrectAnswerDetails}
                      onShowNextBtn={showNextBtn}
                      answer={item.answer}
                      reset={reset}
                    ></QuizAnswer>
                  ))}
                </ul>
              </div>
            </CardContent>

            {showNext && (
              <CardActions>
                <Button
                  size="small"
                  variant="contained"
                  onClick={showNextQuestion}
                >
                  Next
                </Button>
              </CardActions>
            )}
          </Card>
        </div>
      ) : (
        <div>
          <Typography>
            Your Scored {score} out of {quizApi.length}!
          </Typography>
          <Button size="small" variant="contained" onClick={startQuiz}>
            Play Again
          </Button>
        </div>
      )}
    </>
  );
};

export default QuizBundle;
