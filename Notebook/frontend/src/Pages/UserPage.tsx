import axios from "axios";
import { useRef } from "react";
import { useEffect, useState } from "react";

import Navbar from "../Components/Navbar/Navbar";

import "../App.css";
import "../AppS.css";

/**
 * TO DO
 * 1. Create a Page for Users CRUD Operations.
 * 2. Create a Page for notes CRUD Operations.
 * 3. Create a Page to exebit the Notebook and the notes in it.
 */

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  //Create User
  const [successToast, setSuccessToast] = useState(false);
  const [updateToast, setUpdateToast] = useState(false);
  const [deleteToast, setDeleteToast] = useState(false);

  const [userFields, setUserFields] = useState({
    userName: "",
    name: "",
    email: "",
    contactNumber: "",
    password: "",
  });

  const _formValidation = () => {
    if (userFields.userName != null && userFields.userName != "") {
      if (userFields.name != null && userFields.userName != "") {
        if (userFields.email != null && userFields.email != "") {
          if (
            userFields.contactNumber != null &&
            userFields.contactNumber != ""
          ) {
            if (userFields.password != null && userFields.password != "") {
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const _createUser = () => {
    if (_formValidation()) {
      axios.post("http://localhost:5000/user/new", userFields).then((resp) => {
        if (resp) {
          console.log(resp);
          setSuccessToast(true);

          setTimeout(() => {
            setSuccessToast(false);
          }, 2000);
        }
      });
    } else {
      console.log("Please fill all the fields");
    }
  };

  //Find User
  const [findUser, setFindUser] = useState("");
  const _getUser = (e: any) => {
    if (e.key === "Enter") {
      axios
        .get(`http://localhost:5000/user/getUser/${findUser}`)
        .then((res) => {
          if (res.data) {
            console.log(res.data.resp);
            setUser(res.data.resp);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  //Find All Users
  const _getUsers = () => {
    _handleReadAll();
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
  };

  //Update Users
  const [updateUsername, setUpdateUsername] = useState("");
  const [updateFields, setUpdateFields] = useState({
    name: "",
    email: "",
    contactNumber: "",
    password: "",
  });
  const _updateUser = () => {
    axios
      .put(`http://localhost:5000/user/update/${updateUsername}`, updateFields)
      .then((resp) => {
        if (resp) {
          console.log(resp);
          setUpdateToast(true);

          setTimeout(() => {
            setUpdateToast(false);
          }, 2000);
        }
      });
  };

  //Delete Users
  const [deleteUsername, setDeleteUsername] = useState("");

  const _deleteUser = () => {
    axios
      .delete(`http://localhost:5000/user/delete/${deleteUsername}`)
      .then((resp) => {
        if (resp) {
          console.log(resp);
          setDeleteToast(true);

          setTimeout(() => {
            setDeleteToast(false);
          }, 2000);
        }
      });
  };

  const [welcomeScreen, setWelcomeScreen] = useState(true);
  const [create, setCreate] = useState(false);
  const [read, setRead] = useState(false);
  const [readAll, setReadAll] = useState(false);
  const [update, setUpdate] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);

  const _handleCreate = () => {
    setCreate(!create);
    setWelcomeScreen(false);
    setRead(false);
    setReadAll(false);
    setUpdate(false);
    setDeleteUser(false);
  };

  const _handleRead = () => {
    setCreate(false);
    setWelcomeScreen(false);
    setRead(!read);
    setReadAll(false);
    setUpdate(false);
    setDeleteUser(false);
  };

  const _handleReadAll = () => {
    setCreate(false);
    setWelcomeScreen(false);
    setRead(false);
    setReadAll(!readAll);
    setUpdate(false);
    setDeleteUser(false);
  };

  const _handleUpdate = () => {
    setCreate(false);
    setWelcomeScreen(false);
    setRead(false);
    setReadAll(false);
    setUpdate(!update);
    setDeleteUser(false);
  };

  const _handleDelete = () => {
    setCreate(false);
    setWelcomeScreen(false);
    setRead(false);
    setReadAll(false);
    setUpdate(false);
    setDeleteUser(!deleteUser);
  };

  return (
    <div className="user-window">
      <Navbar />
      <div className="users-container-wrapper">
        <div className="users-container">
          <div className="operations">
            <div onClick={_handleCreate} className="ope create-user">
              Create User
            </div>
            <div onClick={_handleRead} className="ope get-user">
              View User
            </div>
            <div onClick={_getUsers} className="ope get-users">
              View All Users
            </div>
            <div onClick={_handleUpdate} className="ope update-user">
              Update User
            </div>
            <div onClick={_handleDelete} className="ope delete-user">
              Delete User
            </div>
          </div>

          {welcomeScreen ? (
            <div className="welcome-screen">
              <h3 className="welcome-text">
                Use the Left Panel options to proceed.
              </h3>
            </div>
          ) : null}

          {create ? (
            <div className="create-fields">
              <div className="field">
                <label htmlFor="userName">UserName</label>
                <input
                  type="text"
                  name="userName"
                  placeholder="Enter your UserName"
                  onChange={(e) => {
                    setUserFields({ ...userFields, userName: e.target.value });
                  }}
                />
              </div>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  onChange={(e) => {
                    setUserFields({ ...userFields, name: e.target.value });
                  }}
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your Email"
                  onChange={(e) => {
                    setUserFields({ ...userFields, email: e.target.value });
                  }}
                />
              </div>
              <div className="field">
                <label htmlFor="number">Contact Number</label>
                <input
                  type="text"
                  name="number"
                  placeholder="Enter your Contact Number"
                  onChange={(e) => {
                    setUserFields({
                      ...userFields,
                      contactNumber: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="field">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  onChange={(e) => {
                    setUserFields({ ...userFields, password: e.target.value });
                  }}
                />
              </div>
              <div className="field">
                <div onClick={_createUser} className="submitbox">
                  Submit
                </div>
              </div>
            </div>
          ) : null}

          {read ? (
            <div className="read-fields read-user">
              <div className="field">
                <input
                  type="text"
                  name="userName"
                  placeholder="Enter Username to Find User"
                  onChange={(e) => {
                    setFindUser(e.target.value);
                  }}
                  onKeyDown={_getUser}
                />
              </div>
              <div>
                {
                  <div className="user-detail-list" key={user.key}>
                    <h3>UserName : {user.userName}</h3>
                    <h3>Name : {user.name}</h3>
                    <h3>Email : {user.email}</h3>
                    <h3>Contact Number : {user.contactNumber}</h3>
                  </div>
                }
              </div>
            </div>
          ) : null}

          {readAll ? (
            <div className="read-fields read-cus">
              <div className="user-details">
                {users.map((item: any, index: any) => {
                  if (item) {
                    return (
                      <div className="user-detail-list" key={index}>
                        <h3>UserName : {item.userName}</h3>
                        <h3>Name : {item.name}</h3>
                        <h3>Email : {item.email}</h3>
                        <h3>Contact Number : {item.contactNumber}</h3>
                      </div>
                    );
                  } else {
                    return (
                      <div className="user-detail-list">
                        <h3>User not found</h3>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          ) : null}

          {update ? (
            <div className="read-fields update-fields">
              <div className="field">
                <input
                  type="text"
                  name="userName"
                  placeholder="Enter Username to update"
                  onChange={(e) => {
                    setUpdateUsername(e.target.value);
                  }}
                />
              </div>
              <div className="update-fields-wrap">
                <input
                  onChange={(e) =>
                    setUpdateFields({ ...updateFields, name: e.target.value })
                  }
                  className="updateInput"
                  type="text"
                  placeholder="Name"
                />
                <input
                  onChange={(e) =>
                    setUpdateFields({ ...updateFields, email: e.target.value })
                  }
                  className="updateInput"
                  type="text"
                  placeholder="Email"
                />
                <input
                  onChange={(e) =>
                    setUpdateFields({
                      ...updateFields,
                      contactNumber: e.target.value,
                    })
                  }
                  className="updateInput"
                  type="text"
                  placeholder="Contact Number"
                />
                <input
                  onChange={(e) =>
                    setUpdateFields({
                      ...updateFields,
                      password: e.target.value,
                    })
                  }
                  className="updateInput"
                  type="text"
                  placeholder="Password"
                />
              </div>
              <div onClick={_updateUser} className="updateForm">
                Update
              </div>
            </div>
          ) : null}

          {deleteUser ? (
            <div className="read-fields delete-fields">
              <div className="field">
                <input
                  type="text"
                  name="userName"
                  placeholder="Enter Username to delete"
                  onChange={(e) => {
                    setDeleteUsername(e.target.value);
                  }}
                />
                <div onClick={_deleteUser} className="deleteForm">
                  Delete
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      {successToast ? (
        <div id="snackbar">User Created Successfully..</div>
      ) : null}
      {updateToast ? (
        <div id="snackbar">User Updated Successfully..</div>
      ) : null}
      {deleteToast ? (
        <div id="snackbar">User Deleted Successfully..</div>
      ) : null}
    </div>
  );
};

export default UserPage;
