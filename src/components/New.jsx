import  { useState } from 'react';
import FormBody from './Form';
import { createActor } from '../lib/api/actor';
import { useNavigate } from 'react-router-dom';

const New = () => {
  const [value, setValue] = useState({})
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createActor(value)
      console.log(res)
      navigate('/')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <h1>NEW</h1>
      <FormBody
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={value}
        buttonType='create'
      />
    </>
  )
};
export default New;
