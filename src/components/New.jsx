import { useState } from 'react';
import FormBody from './Form';
import { createActor } from '../lib/api/actor';
import { useNavigate } from 'react-router-dom';

function New() {
  const [value, setValue] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createActor(value);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>NEW</h1>
      <FormBody
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={value}
        buttonType="Add"
      />
    </div>
  );
}

export default New;
