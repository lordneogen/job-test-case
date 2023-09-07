"use client";

import styles from "./page.module.css";

export default function Button({
  full_size = false,
  x = 0,
  y = 0,
  word = "",
  green = false,
}) {
  x = (x / 1920) * 100;
  y = (y / 1080) * 100;

  const pos = {
    left: x + "%",
    top: y + "%",
  };

  return (
    <div
      className={`${styles.Button} ${!green && styles.Blue} ${
        green && styles.Green
      }`}
      style={pos}
    >
      {!full_size && <h1>+</h1>}
      {full_size && <h1>-</h1>}
      {full_size && word != "" && <p>{word}</p>}
    </div>
  );
}
