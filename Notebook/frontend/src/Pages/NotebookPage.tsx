import axios from "axios";
import { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";

const NotebookPage = () => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({});

  //Create User
  const [successToast, setSuccessToast] = useState(false);
  const [updateToast, setUpdateToast] = useState(false);
  const [deleteToast, setDeleteToast] = useState(false);

  const [noteFields, setNoteFields] = useState({
    title: "",
    userId: "",
    description: "",
  });

  const _formValidation = () => {
    if (noteFields.title != null && noteFields.title != "") {
      if (noteFields.userId != null && noteFields.userId != "") {
        if (noteFields.description != null && noteFields.description != "") {
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
  };

  const _createUser = () => {
    if (_formValidation()) {
      axios.post("http://localhost:5000/notebook/new", noteFields).then((resp) => {
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
  const [findNotes, setFindNotes] = useState("");
  const _getUser = (e: any) => {
    if (e.key === "Enter") {
      axios
        .get(`http://localhost:5000/notebook/read/${findNotes}`)
        .then((res) => {
          if (res.data) {
            console.log(res.data.resp);
            setNote(res.data.resp);
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
      .get("http://localhost:5000/notebook/readAll")
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          setNotes(res.data.resp);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Update Users
  const [updateNotes, setUpdateNotes] = useState("");
  const [updateFields, setUpdateFields] = useState({
    title: "",
    content: "",
    userId: "",
    tags: "",
  });
  const _updateUser = () => {
    axios
      .put(`http://localhost:5000/notebook/update/${updateNotes}`, updateFields)
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
  const [deleteNotes, setDeleteNotes] = useState("");

  const _deleteUser = () => {
    axios
      .delete(`http://localhost:5000/notebook/delete/${deleteNotes}`)
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
    <div className="user-window notebook-page">
      <Navbar />
      <div className="users-container-wrapper">
        <div className="users-container">
          <div className="operations">
            <div onClick={_handleCreate} className="ope create-user notebook-ope">
              Create Notebook
            </div>
            <div onClick={_handleRead} className="ope get-user notebook-ope">
              View Notebook
            </div>
            <div onClick={_getUsers} className="ope get-users notebook-ope">
              View All Notebooks
            </div>
            <div onClick={_handleUpdate} className="ope update-user notebook-ope">
              Update Notebook
            </div>
            <div onClick={_handleDelete} className="ope delete-user notebook-ope">
              Delete Notebook
            </div>
          </div>

          {welcomeScreen ? (
            <div className="welcome-screen notebook-fields-wrap">
              <h3 className="welcome-text">
                Use the Left Panel options to proceed.
              </h3>
            </div>
          ) : null}

          {create ? (
            <div className="create-fields notebook-fields-wrap">
              <div className="field">
                <label htmlFor="userName">Title</label>
                <input
                  type="text"
                  name="userName"
                  placeholder="Enter the Title for Notebook"
                  onChange={(e) => {
                    setNoteFields({ ...noteFields, title: e.target.value });
                  }}
                />
              </div>
              <div className="field">
                <label htmlFor="number">Description</label>
                <input
                  type="text"
                  name="number"
                  placeholder="Enter the Notes Description"
                  onChange={(e) => {
                    setNoteFields({
                      ...noteFields,
                      description: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="field">
                <label htmlFor="password">User ID</label>
                <input
                  type="text"
                  name="text"
                  placeholder="Enter Notebook User ID"
                  onChange={(e) => {
                    setNoteFields({
                      ...noteFields,
                      userId: e.target.value,
                    });
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
            <div className="read-fields read-user notebook-fields-wrap">
              <div className="field">
                <input
                  type="text"
                  name="userName"
                  placeholder="Enter Notebook ID to Find Notes"
                  onChange={(e) => {
                    setFindNotes(e.target.value);
                  }}
                  onKeyDown={_getUser}
                />
              </div>
              <div>
                {
                  <div className="user-detail-list" key={note.key}>
                    <h3>Title : {note.title}</h3>
                    <h3>User ID : {note.userId}</h3>
                    <h3>Description : {note.description}</h3>
                  </div>
                }
              </div>
            </div>
          ) : null}

          {readAll ? (
            <div className="read-fields read-cus notebook-fields-wrap">
              <div className="user-details">
                {notes.map((item: any, index: any) => {
                  if (item) {
                    return (
                      <div className="user-detail-list" key={index}>
                        <h3>Title : {item.title}</h3>
                        <h3>User ID : {item.userId}</h3>
                        <h3>Tags : {item.description}</h3>
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
            <div className="read-fields update-fields notebook-fields-wrap">
              <div className="field">
                <input
                  type="text"
                  name="userName"
                  placeholder="Enter Notebook ID to update"
                  onChange={(e) => {
                    setUpdateNotes(e.target.value);
                  }}
                />
              </div>
              <div className="update-fields-wrap">
                <input
                  onChange={(e) =>
                    setUpdateFields({ ...updateFields, title: e.target.value })
                  }
                  className="updateInput"
                  type="text"
                  placeholder="Title"
                />
                <input
                  onChange={(e) =>
                    setUpdateFields({
                      ...updateFields,
                      content: e.target.value,
                    })
                  }
                  className="updateInput"
                  type="text"
                  placeholder="Description"
                />
                <input
                  onChange={(e) =>
                    setUpdateFields({
                      ...updateFields,
                      userId: e.target.value,
                    })
                  }
                  className="updateInput"
                  type="text"
                  placeholder="User ID"
                />
              </div>
              <div onClick={_updateUser} className="updateForm">
                Update
              </div>
            </div>
          ) : null}

          {deleteUser ? (
            <div className="read-fields delete-fields notebook-fields-wrap">
              <div className="field">
                <input
                  type="text"
                  name="userName"
                  placeholder="Enter Notebook ID to delete"
                  onChange={(e) => {
                    setDeleteNotes(e.target.value);
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

export default NotebookPage;
