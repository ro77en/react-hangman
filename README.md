# Hangman Game

This is a Hangman game built using React and Vite. The game generates a random word from a predefined list and challenges the player to guess the word one letter at a time. 

## Project Structure

```
hangman-game/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/            
│   │   ├── HangmanDrawing.css
│   │   ├── HangmanDrawing.tsx
│   │   ├── HangmanWord.css
│   │   ├── HangmanWord.tsx
│   │   ├── Keyboard.css
│   │   ├── Keyboard.tsx
│   ├── wordlists/
│   │   ├── brPortuguese.json
│   │   ├── english.json
│   ├── App.css               
│   ├── App.tsx        
│   ├── index.css              
│   ├── main.tsx 
│   ├── vite-env.d.ts       
│   └── wordList.json        
│
├── .gitignore                
├── eslint.config.js           
├── package-lock.json          
├── package.json               
├── README.md                  
├── tsconfig.app.json          
├── tsconfig.json              
├── tsconfig.node.json         
└── vite.config.json           
```


## Features

- **Random Word Generation**: A random word is selected from `wordList.json` each time the game starts or is refreshed.
- **On-Screen and Physical Keyboard Input**: You can click the letters on the on-screen keyboard or type using your physical keyboard.
- **Letter Display**: The game initially displays only the number of letters in the word. Correctly guessed letters are revealed in their respective positions.
- **No Duplicate Guesses**: Once a letter is guessed, it cannot be selected again, and the corresponding key is disabled.
- **Interactive Keyboard**: Keyboard keys are highlighted when hovered over or guessed correctly. Incorrect guesses disable the key without highlighting it.
- **Hangman Drawing**: With each incorrect guess, a part of the hangman’s body is drawn on the screen.
- **Game Over**: If the hangman is fully drawn, the game ends, and the correct word is revealed, with unguessed letters shown in red.

## How to Play

1. **Start the Game**: The game automatically starts with a random word from the list.
2. **Guess a Letter**: Use the on-screen keyboard or your physical keyboard to guess letters in the word.
3. **Correct Guesses**: Correctly guessed letters will appear in their correct positions.
4. **Incorrect Guesses**: For each incorrect guess, a part of the hangman’s body is drawn.
5. **Win or Lose**: The game continues until the word is fully guessed or the hangman is fully drawn. If you lose, the correct word is revealed.

## Installation

1. Clone the repository:
  ```bash
  git clone https://github.com/ro77en/react-hangman
  ```

2. Navigate to the project directory:
  ```bash
  cd react-hangman
  ```

3. Install dependencies:
  ```bash
  npm install
  ```

4. Start the development server:
  ```bash
  npm run dev
  ```
## Usage
- Press `Enter` to start a new game with a different word.
-  Click or type a letter to make a guess.
- The game ends when the word is fully guessed or the hangman is complete.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
