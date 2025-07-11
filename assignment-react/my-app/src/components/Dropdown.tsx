"use client"
import React, { ChangeEvent, useState } from 'react';

function DropdownMenu() {
  const [option, setOption] = useState('');

  const array = ['task1', 'task2', 'task3', 'task3'];

  const handleChange = (event:ChangeEvent<HTMLSelectElement>) => {
    setOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="dropdown">Choose an option: </label>
      <select id="dropdown" value={option} onChange={handleChange}>
        <option value="">choose an option</option>
        {array.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      {option && (
        <p>{option}</p>
      )}
    </div>
  );
}

export default DropdownMenu;
