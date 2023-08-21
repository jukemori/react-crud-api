// List.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { deleteActor, getList } from '../lib/api/actor';

function List() {
  const [dataList, setDataList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    try {
      const response = await getList();
      setDataList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (item) => {
    try {
      const response = await deleteActor(item.id);
      console.log(response.data);
      fetchList();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>HOME</h1>
      <button onClick={() => navigate('/new')}>Create</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th colSpan='1'></th>
            <th colSpan='1'></th>
            <th colSpan='1'></th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.country}</td>
              <td>
                <Link to={`/edit/${item.id}`}>Update</Link>
              </td>
              <td>
                <Link to={`/actors/${item.id}`}>Detail</Link>
              </td>
              <td>
                <button onClick={() => handleDelete(item)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default List;
