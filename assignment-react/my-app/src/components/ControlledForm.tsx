"use client";
import React, { FormEvent, useState } from "react";

const ControlledForm = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [technology, setTechnology] = useState([]);
  const [modeOfTravel, setModeOfTravel] = useState<string>("");

  const handleTechnologyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setTechnology((prev) =>
      checked ? [...prev, value] : prev.filter((tech) => tech !== value)
    );
  };

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      name,
      phone,
      technology,
      modeOfTravel,
    };
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <p>User form with controlled components</p>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Phone
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>

        <p>Technology</p>
        <label>
          Node.js
          <input
            type="checkbox"
            value="Node.js"
            checked={technology.includes("Node.js")}
            onChange={handleTechnologyChange}
          />
        </label>

        <label>
          Next.js
          <input
            type="checkbox"
            value="Next.js"
            checked={technology.includes("Next.js")}
            onChange={handleTechnologyChange}
          />
        </label>

        <p>Mode of Travel</p>
        <label>
          Car
          <input
            type="radio"
            value="car"
            checked={modeOfTravel === "car"}
            onChange={(e) => setModeOfTravel(e.target.value)}
          />
        </label>

        <label>
          Bike
          <input
            type="radio"
            value="bike"
            checked={modeOfTravel === "bike"}
            onChange={(e) => setModeOfTravel(e.target.value)}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ControlledForm;
