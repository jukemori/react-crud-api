import React, { useEffect, useState } from 'react';
import { deleteActor, getList } from '../lib/api/actor';
import { useHistory, Link } from 'react-router-dom';

const List = () => {
  const [dataList, setDataList] = useState([]);

  const history = useHistory();


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

  const handleDelete = async (item) => {
    console.log('click', item.id)
    try {
      const res = await deleteActor(item.id)
      console.log(res.data)

      handleGetList()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <h1>HOME</h1>
      <button onClick={() => history.push('/new')}>Create</button>
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
                <button onClick={() => handleDelete(item)}>Delete</button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};
export default List;
