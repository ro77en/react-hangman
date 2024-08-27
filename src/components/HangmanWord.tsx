import "./HangmanWord.css";

type HangmanWordProps = {
  guessedLetters: string[],
  wordToGuess: string
}

export function HangmanWord({guessedLetters, wordToGuess}: HangmanWordProps) {

  return (
    <div className="word">
      {wordToGuess.split("").map((letter, index) => (
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
