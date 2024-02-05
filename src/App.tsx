import { useState } from "react";
import "./App.css";

const phrases = [
  "Нет",
  "Ты уверена?",
  "Точно уверена?",
  "Поль, подумай еще раз",
  "Солнышко, пожалуйста",
  "Может, ты передумаешь?",
  "Не поступай так со мной",
  "Мне будет грустно",
  "Мне будет очень грустно",
  "Мне будет очень очень грустно",
  "Мне будет очень очень очень грустно",
  "Я буду плакать...",
  "Ты разбиваешь мне сердце ;(",
  "Почему ты так делаешь?",
  "Не надо так",
  "Это несправедливо",
  "Кажется, мое сердце разбито",
  "Я вижу свет, а вокруг темно",
  "Мы обещали быть вместе",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [buttonStyle, setButtonStyle] = useState({});

  const yesButtonSize = Math.min(noCount * 60 + 16, 1000); // Max size set to 200px

  function handleNoClick() {
    if (noCount < phrases.length - 1) {
      setNoCount(noCount + 1);
    }
  }

  function handleNoMouseEnter() {
    if (noCount >= 2 && noCount < phrases.length - 1) {
      const newX = Math.random() * (window.innerWidth - 200);
      const newY = Math.random() * (window.innerHeight - 50);
      setButtonStyle({
        position: "absolute", // Ensure button can move absolutely
        left: `${newX}px`,
        top: `${newY}px`,
      });
      setNoCount(noCount + 1);
    }
  }

  function getNoButtonText() {
    return phrases[noCount];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="bears kissing"
          />
          <div className="text">
            Поль, котёнок, на самом деле это был риторический вопрос. Мы и так
            встречаемся, но ты должна знать, что я люблю тебя больше всех на
            свете и очень сильно по тебе скучаю. *Чмок*
          </div>
        </>
      ) : (
        <>
          <img
            src="https://media.tenor.com/T_ZK8l6ffvEAAAAi/bear2.gif"
            alt="bear with heart"
          />
          <div>Ты будешь моей валентинкой?</div>
          <button
            className="yesButton"
            style={{ fontSize: `${yesButtonSize}px` }}
            onClick={() => setYesPressed(true)}
          >
            Да
          </button>

          <button
            className="noButton"
            style={buttonStyle}
            onClick={handleNoClick}
            onMouseEnter={handleNoMouseEnter}
          >
            {getNoButtonText()}
          </button>
        </>
      )}
    </div>
  );
}

export default App;
