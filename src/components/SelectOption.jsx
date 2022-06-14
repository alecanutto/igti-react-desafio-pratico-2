import React from 'react';

export default function SelectOption({ children, onSelectChange = null }) {
  function handleSelectChange({ currentTarget }) {
    if (onSelectChange) {
      const newValue = currentTarget.value;
      onSelectChange(newValue);
    }
  }

  return (
    <div className="flex flex-row justify-center p-4 mb-4">
      <label htmlFor="filter" className="text-xl font-semibold">
        Choose a investment:
      </label>
      <select
        defaultValue={''}
        name="filter"
        className="border-2 border-gray-300 ml-2 w-52"
        onChange={handleSelectChange}
      >
        <option value="">Todos</option>
        {children.map(({ id, description }) => {
          return (
            <option key={id} value={id}>
              {description}
            </option>
          );
        })}
      </select>
    </div>
  );
}
