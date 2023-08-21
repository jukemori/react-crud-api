import React from 'react';

function Form({ handleChange, handleSubmit, value, buttonType }) {
  return (
    <>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={value.name || ''}
          />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            name="country"
            id="country"
            onChange={handleChange}
            value={value.country || ''}
          />
        </div>
        <input
          type="submit"
          value={buttonType}
          onClick={handleSubmit}
        />
      </form>
    </>
  );
}

export default Form;
