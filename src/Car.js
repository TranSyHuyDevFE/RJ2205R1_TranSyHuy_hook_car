import React from "react";
import { useState } from "react";
const Car = () => {
  const [listCar] = useState([
    { id: "1", car: "G63" },
    { id: "2", car: "Toyota" },
    { id: "3", car: "Suzuki" },
  ]);
  const [colorList] = useState([
    { id: "1", color: "black" },
    { id: "2", color: "red" },
    { id: "3", color: "white" },
  ]);
  const [selectedCar, setSelectedCar] = useState("G63");
  const [selectedColor, setSelectedColor] = useState("black");
  const handleOnChangeCar = (e) => {
    setSelectedCar(e.target.value);
  };
  const handleOnChangeColor = (e) => {
    setSelectedColor(e.target.value);
  };
  return (
    <div>
      <label htmlFor="car-select">Choose a car:</label>
      <select id="car-select" onChange={(e) => handleOnChangeCar(e)}>
        {listCar.map((item) => {
          return (
            <option key={item.id} value={item.car}>
              {item.car}
            </option>
          );
        })}
      </select>
      <br />
      <label htmlFor="color-select">Choose a color:</label>
      <select id="color-select" onChange={(e) => handleOnChangeColor(e)}>
        {colorList.map((item) => {
          return (
            <option key={item.id} value={item.color}>
              {item.color}
            </option>
          );
        })}
      </select>
      <br />
      <p>
        You selected {selectedCar} - {selectedColor}
      </p>
    </div>
  );
};
export default Car;
