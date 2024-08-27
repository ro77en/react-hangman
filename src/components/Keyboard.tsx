import "./Keyboard.css";

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  isDisabled?: boolean
};

export function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  isDisabled = false,
}: KeyboardProps) {
  const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return (
    <div className="keyboard">
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`btn ${isActive ? "active" : ""} ${
              isInactive ? "inactive" : ""
            }`}
            disabled={isActive || isInactive || isDisabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
