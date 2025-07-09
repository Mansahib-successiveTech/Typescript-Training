"use client";

import { ChangeEvent, useState } from "react";

const SearchFilter = () => {
  const array = ["one", "fdbh", "sdjbh","dbh"];
  const [word, setWord] = useState("");
  const [list, setList] = useState(array);

  const search = (value:string) => {
    if (value === "") return array;
    return array.filter((item) => item.includes(value));
  };

  const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const {value}:{value:string} = e.target;
    setWord(value);
    setList(search(value));
  };

  return (
    <>
      <p>Enter the word:</p>
      <input value={word} onChange={onChangeHandler} type="text" />
      <p>List:</p>
      <ul>
        {list.map((item, id) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default SearchFilter;
