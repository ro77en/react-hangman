import "./HangmanWord.css";

export function HangmanWord() {
  const word = "test";
  const guessedLetters = ["t", "g"];

  return (
    <div className="word">
      {word.split("").map((letter, index) => (
        <span className="letter-border" key={index}>
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
