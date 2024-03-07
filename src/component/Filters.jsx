import React from 'react';

function Filters({ gender, onChange }) {
  const handleGenderChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="mb-4 flex justify-center">
      <label className="block mb-2">
 
      <select 
  value={gender || ''} 
  onChange={handleGenderChange}
  className="block w-50 px-4 py-2 mt-6 border rounded-md border-black focus:outline-none focus:ring focus:border-blue-500"
>
  <option value="">All</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
</select>
      </label>
    </div>
  );
}

export default Filters;
