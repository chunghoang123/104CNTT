import React from "react";

export function Calculation() {
  return (
    <>
      <h3>Danh sách kết quả</h3>
      <li>10 + 10 = {sum(10, 10)}</li>
      <li>10 - 10 = {minus(10, 10)}</li>
      <li>10 * 10 = {multiply(10, 10)}</li>
      <li>10 / 10 = {divide(10, 10)}</li>
    </>
  );
}

function sum(a: number, b: number) {
  return a + b;
}

function minus(a: number, b: number) {
  return a - b;
}

function multiply(a: number, b: number) {
  return a * b;
}

function divide(a: number, b: number) {
  return a / b;
}
