import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getDetail } from '../lib/api/actor';

function Detail() {
  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchDetail() {
      try {
        const response = await getDetail(id);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchDetail();
  }, [id]);

  return (
    <>
      <h1>DETAIL</h1>
      <div>ID: {data.id}</div>
      <div>Name: {data.name}</div>
      <div>Country: {data.country}</div>
      <button onClick={() => navigate('/')}>Go back</button>
    </>
  );
}

export default Detail;
