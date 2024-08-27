import "./HangmanDrawing.css";

const HEAD = <div className="head" />;
const BODY = <div className="body" />;
const RIGHT_ARM = <div className="right arm" />
const LEFT_ARM = <div className="left arm" />
const RIGHT_LEG = <div className="right leg" />
const LEFT_LEG = <div className="left leg" />

export function HangmanDrawing() {
  return (
    <div className="drawing">
      {HEAD}
      {BODY}
      {RIGHT_ARM}
      {LEFT_ARM}
      {RIGHT_LEG}
      {LEFT_LEG}
      <div className="top-right line" />
      <div className="top line" />
      <div className="middle line" />
      <div className="bottom line" />
    </div>
  );
}
