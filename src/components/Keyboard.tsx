import './Keyboard.css'

export function Keyboard() {
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

  return <div className='keyboard'>
    {KEYS.map(key => {
        return (
            <button className='btn' key={key}>{key}</button>
        )
    })}

  </div>
}
