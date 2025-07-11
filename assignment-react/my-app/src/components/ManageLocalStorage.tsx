'use client';

import UseLocalStorage from "../hooks/UseLocalStorage";

const ManageLocalStorage = () => {
  const { getValue, setValue, remove } = UseLocalStorage('AuthType', 'Admin');

  const handleSet = () => setValue('Student');
  const handleRemove = () => remove();

  return (
    <div>
      <h2>Auth Type: {getValue()}</h2>
      <button onClick={handleSet}>Set AuthType</button>
      <button onClick={handleRemove}>Remove AuthType</button>
    </div>
  );
}
export default ManageLocalStorage;