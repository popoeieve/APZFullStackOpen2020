import React from 'react';

const FilterForm = ({ value, onChange }) => {
  return (
    <form>
      Filter: <input value={value} onChange={onChange} />
    </form>
  );
}

export default FilterForm;