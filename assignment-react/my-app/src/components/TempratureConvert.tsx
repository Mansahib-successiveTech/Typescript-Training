"use client";

import { ChangeEvent, useState } from "react";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState<number | string | undefined>(
    0
  );
  const [fahrenheit, setFahrenheit] = useState<number | string | undefined>(
    32
  );

  const handleCelsiusChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCelsius(value);

    const num = parseFloat(value);
    setFahrenheit((num * 9) / 5 + 32);
  };

  const handleFahrenheitChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFahrenheit(value);

    const num = parseFloat(value);

    setCelsius(((num - 32) * 5) / 9);
  };

  return (
    <div>
      <h2>Temperature Converter</h2>

      <label>
        Celsius:
        <input type="number" value={celsius} onChange={handleCelsiusChange} />
      </label>

      <br />

      <label>
        Fahrenheit:
        <input
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
      </label>
    </div>
  );
};

export default TemperatureConverter;
