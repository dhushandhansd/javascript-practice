import axios from "axios";
import { useEffect, useState } from "react";

import "./App.css";

const UserPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/user/getUsers")
      .then((res) => {
        if (res.data) {
          setUsers(res.data.resp);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="user-container">
      <div className="users">
        <div className="user-detail-list">
          {users.map((item: any) => {
            <li>{item.userName}</li>;
            //   <li>{item.name}</li>;
            //   <li>{item.email}</li>;
            //   <li>{item.contactNumber}</li>;
            console.log(item.userName);
          })}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
