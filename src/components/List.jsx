import { useEffect, useState } from 'react';
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
      await deleteActor(item.id);
      // Remove the deleted item from the dataList state
      setDataList((prevDataList) => prevDataList.filter((dataItem) => dataItem.id !== item.id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Actors</h1>
      <button className="btn btn-primary" onClick={() => navigate('/new')}>
        Add
      </button>
      <div className="card-deck mt-3">
        {dataList.map((item) => (
          <div className="card mb-3" style={{ width: '18rem' }} key={item.id}>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <h6 className="card-text text-muted">Country: {item.country}</h6>
              <Link to={`/edit/${item.id}`} className="btn btn-primary me-2">
                Edit
              </Link>
              <button className="btn btn-danger" onClick={() => handleDelete(item)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
