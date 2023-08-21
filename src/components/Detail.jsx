// Detail.jsx
import React, { useEffect, useState } from 'react';
import { getDetail } from '../lib/api/actor';
import { useNavigate, useParams } from 'react-router-dom';

const Detail = (props) => {
  const [data, setData] = useState({});
  // Get { id: "1" }
  const query = useParams();

  const history = useNavigate();

  useEffect(() => {
    handleGetDetail(query);
  }, [query]);

  const handleGetDetail = async (query) => {
    try {
      const res = await getDetail(query.id);
      console.log(res.data);
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h1>DETAIL</h1>
      <div>ID：{data.id}</div>
      <div>name：{data.name}</div>
      <div>country：{data.country}</div>
      <button onClick={() => history.push('/')}>Go back</button>
    </>
  );
};
export default Detail;
