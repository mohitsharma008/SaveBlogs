import React from "react";

const rows = 5;
const columns = 120;

export const myArray = [];
for (let i = 0; i < rows; i++) {
  myArray[i] = [i];
  for (let j = 0; j < columns; j++) {
    myArray[i][j] = { a: false, b: false, c: false, d: false };
  }
}
