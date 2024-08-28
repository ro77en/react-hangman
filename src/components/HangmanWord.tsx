import "./HangmanWord.css";

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export function HangmanWord({ guessedLetters, wordToGuess, reveal = false }: HangmanWordProps) {
  return (
    <div className="word">
      {wordToGuess.split("").map((letter, index) => (
        <span className="letter-border" key={index}>
          <span
            style={{
              visibility: guessedLetters.includes(letter) || reveal
                ? "visible"
                : "hidden",
                color: !guessedLetters.includes(letter) && reveal ? 'red' : 'white'
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
