"use client";

import { useState } from "react";

interface Board {
  id: number;
  value: string | undefined;
}

const TickTack = () => {
  const arr: Board[] = [
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
    { id: 4, value: "" },
    { id: 5, value: "" },
    { id: 6, value: "" },
    { id: 7, value: "" },
    { id: 8, value: "" },
    { id: 9, value: "" },
  ];

  const [cross, setCross] = useState<boolean>(true);
  const [data, setData] = useState<Board[]>(arr);

  const handleClick = (id: number): void => {
    const clickedCell = data.find((item) => item.id === id);
    if (clickedCell && clickedCell.value !== "") return;

    const updatedData = data.map((item) =>
      item.id === id ? { ...item, value: cross ? "X" : "O" } : item
    );

    setData(updatedData);

    if (checkWinner(updatedData)) return;

    setTimeout(() => {
      randomFill(updatedData); // Pass latest board to prevent overwrite
    }, 1000);
  };

  const randomFill = (board: Board[]): void => {
    const emptyCells = board.filter((item) => item.value === "");
    if (emptyCells.length === 0) return;

    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const randomId = emptyCells[randomIndex].id;

    const updatedBoard = board.map((item) =>
      item.id === randomId ? { ...item, value: cross ? "O" : "X" } : item
    );

    setData(updatedBoard);

    checkWinner(updatedBoard);
  };

  const checkWinner = (board: Board[]): boolean => {
    const winConditions = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];

    for (const [a, b, c] of winConditions) {
      const cellA = board.find((item) => item.id === a);
      const cellB = board.find((item) => item.id === b);
      const cellC = board.find((item) => item.id === c);

      if (
        cellA?.value &&
        cellA.value === cellB?.value &&
        cellA.value === cellC?.value
      ) {
        setTimeout(() => {
          alert(`Player ${cellA.value} won`);
        }, 1000);

        return true;
      }
    }
  };

  return (
    <>
      <label>Enter your choice:</label>
      <label>
        <input
          type="radio"
          name="TickTack"
          value="X"
          onClick={() => setCross(true)}
          defaultChecked
        />{" "}
        X
      </label>
      <label>
        <input
          type="radio"
          name="TickTack"
          value="O"
          onClick={() => setCross(false)}
        />{" "}
        O
      </label>

      <table style={{ height: "300px", width: "300px" }}>
        <tbody>
          <tr>
            <td
              onClick={() => handleClick(1)}
              style={{
                border: "2px solid black",
                width: "100px",
                height: "100px",
              }}
            >
              {data[0].value}
            </td>
            <td
              onClick={() => handleClick(2)}
              style={{
                border: "2px solid black",
                width: "100px",
                height: "100px",
              }}
            >
              {data[1].value}
            </td>
            <td
              onClick={() => handleClick(3)}
              style={{
                border: "2px solid black",
                width: "100px",
                height: "100px",
              }}
            >
              {data[2].value}
            </td>
          </tr>
          <tr>
            <td
              onClick={() => handleClick(4)}
              style={{
                border: "2px solid black",
                width: "100px",
                height: "100px",
              }}
            >
              {data[3].value}
            </td>
            <td
              onClick={() => handleClick(5)}
              style={{
                border: "2px solid black",
                width: "100px",
                height: "100px",
              }}
            >
              {data[4].value}
            </td>
            <td
              onClick={() => handleClick(6)}
              style={{
                border: "2px solid black",
                width: "100px",
                height: "100px",
              }}
            >
              {data[5].value}
            </td>
          </tr>
          <tr>
            <td
              onClick={() => handleClick(7)}
              style={{
                border: "2px solid black",
                width: "100px",
                height: "100px",
              }}
            >
              {data[6].value}
            </td>
            <td
              onClick={() => handleClick(8)}
              style={{
                border: "2px solid black",
                width: "100px",
                height: "100px",
              }}
            >
              {data[7].value}
            </td>
            <td
              onClick={() => handleClick(9)}
              style={{
                border: "2px solid black",
                width: "100px",
                height: "100px",
              }}
            >
              {data[8].value}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TickTack;
