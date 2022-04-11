import '../App.css';
import { useSelector } from 'react-redux';

const Dashboard = () => {

  const store = useSelector((state) => state);
  console.log(store);

  return (
    <div className="App">
      <div className="user-section">
        <div className="profile-pic">SD</div>
        <div className="username">
          <h2>{store.user}</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;