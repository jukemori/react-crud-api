import React, { useEffect, useState } from 'react';
import { getList } from '../lib/api/actor';
import { useHistory, Link } from 'react-router-dom';

const List = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    handleGetList();
  }, []);

  const handleGetList = async () => {
    try {
      const res = await getList();
      console.log(res.data);
      setDataList(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h1>HOME</h1>
      <button>Create</button>
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
        {dataList.map((item, index) => (
          <tbody key={index}>
            <tr>
              <td>{item.name}</td>
              <td>{item.country}</td>
              <td>
                <Link to={`/edit/${item.id}`}>Update</Link>
              </td>
              <td>
                <Link to={`/actors/${item.id}`}>Detail</Link>
              </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};
export default List;
