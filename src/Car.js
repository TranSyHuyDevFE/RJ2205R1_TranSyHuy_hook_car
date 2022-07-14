import React from "react";
import { useState } from "react";
const Car = () => {
  const car = [
    { id: "1", car: "G63" },
    { id: "2", car: "Toyota" },
    { id: "3", car: "Suzuki" },
  ];
  const color = [
    { id: "1", color: "black" },
    { id: "2", color: "red" },
    { id: "3", color: "white" },
  ];
  const [selectedCar, setSelectedCar] = useState({
    car: "Mercedes",
    color: "blue",
  });

  const handleOnChangeCar = (e) => {
    const { name, value } = e.target;
    setSelectedCar({ ...selectedCar, [name]: value });
  };
  const handleOnChangeColor = (e) => {
    const { name, value } = e.target;
    setSelectedCar({ ...selectedCar, [name]: value });
  };
  return (
    <div>
      <label htmlFor="car-select">Choose a car:</label>
      <select id="car-select" name="car" onChange={(e) => handleOnChangeCar(e)}>
        {car.map((item) => {
          return (
            <option key={item.id} value={item.car}>
              {item.car}
            </option>
          );
        })}
      </select>
      <br />
      <label htmlFor="color-select">Choose a color:</label>
      <select
        id="color-select"
        name="color"
        onChange={(e) => handleOnChangeColor(e)}
      >
        {color.map((item) => {
          return (
            <option key={item.id} value={item.color}>
              {item.color}
            </option>
          );
        })}
      </select>
      <br />
      <p>
        You selected {selectedCar.car} - {selectedCar.color}
      </p>
    </div>
  );
};
export default Car;
