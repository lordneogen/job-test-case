"use client";

import styles from "./page.module.css";
import Button from "./button";
import { useState } from "react";

export default function Home() {
  const buttons = [
    {
      x: 580,
      y: 282,
      word: "Парковка",
    },
    {
      x: 446,
      y: 714,
      word: "Шоссе",
    },
    {
      x: 687,
      y: 482,
      green: true,
      word: "Стадион",
    },
    {
      x: 1081,
      y: 629,
      word: "Здание",
    },
    {
      x: 1107,
      y: 790,
      green: true,
      word: "Цилиндр",
    },
    {
      x: 1148,
      y: 404,
      green: true,
      word: "Дорога",
    },
    {
      x: 1306,
      y: 700,
      green: true,
      word: "Бассейн",
    },
    {
      x: 1373,
      y: 225,
      word: "Цилиндр",
    },
    {
      x: 1414,
      y: 475,
      word: "Нижняя дорога",
    },
    {
      x: 1593,
      y: 713,
      word: "Дорога под мостом",
    },
  ];
  const [id, setId] = useState(-1);

  function open(index) {
    if (id != index) {
      setId(index);
    } else {
      setId(-1);
    }
  }

  return (
    <div className={styles.Fone}>
      <img
        src="./fone.png"
        onClick={(e) => e.target.tagName === "IMG" && setId(-1)}
        className="Img"
      ></img>

      {buttons.map((button, index) => (
        <div key={index} onClick={() => open(index)}>
          <Button
            full_size={id == index}
            x={button.x}
            y={button.y}
            key={index}
            word={button?.word}
            green={button?.green}
          ></Button>
        </div>
      ))}
    </div>
  );
}
