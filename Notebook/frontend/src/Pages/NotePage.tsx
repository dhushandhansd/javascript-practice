import { useState } from "react";
import "../Components/Navbar/Navbar";
import "../AppS.css";
import axios from "axios";
import Navbar from "../Components/Navbar/Navbar";

const NotePage = () => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({});

  //Create User
  const [successToast, setSuccessToast] = useState(false);
  const [updateToast, setUpdateToast] = useState(false);
  const [deleteToast, setDeleteToast] = useState(false);

  const [noteFields, setNoteFields] = useState({
    title: "",
    userId: "",
    tag: "",
    content: "",
    noteBookId: "",
  });

  const _formValidation = () => {
    if (noteFields.title != null && noteFields.title != "") {
      if (noteFields.userId != null && noteFields.userId != "") {
        if (noteFields.tag != null && noteFields.tag != "") {
          if (noteFields.content != null && noteFields.content != "") {
            if (noteFields.noteBookId != null && noteFields.noteBookId != "") {
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
      axios.post("http://localhost:5000/notes/new", noteFields).then((resp) => {
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
          .get(`http://localhost:5000/notes/read/${findNotes}`)
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
      .get("http://localhost:5000/notes/readAll")
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
    noteBookId: "",
    tags: "",
  });
  const _updateUser = () => {
    axios
      .put(`http://localhost:5000/notes/update/${updateNotes}`, updateFields)
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
      .delete(`http://localhost:5000/notes/delete/${deleteNotes}`)
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
    <div className="user-window note-page">
      <Navbar />
      <div className="users-container-wrapper">
        <div className="users-container">
          <div className="operations">
            <div onClick={_handleCreate} className="ope create-user notebook-ope">
              Create Note
            </div>
            <div onClick={_handleRead} className="ope get-user notebook-ope">
              View Note
            </div>
            <div onClick={_getUsers} className="ope get-users notebook-ope">
              View All Notes
            </div>
            <div onClick={_handleUpdate} className="ope update-user notebook-ope">
              Update Note
            </div>
            <div onClick={_handleDelete} className="ope delete-user notebook-ope">
              Delete Note
            </div>
          </div>

          {welcomeScreen ? (
            <div className="welcome-screen notes-fields-wrap">
              <h3 className="welcome-text">
                Use the Left Panel options to proceed.
              </h3>
            </div>
          ) : null}

          {create ? (
            <div className="create-fields notes-fields-wrap">
              <div className="field">
                <label htmlFor="userName">Title</label>
                <input
                  type="text"
                  name="userName"
                  placeholder="Enter the Title for Note"
                  onChange={(e) => {
                    setNoteFields({ ...noteFields, title: e.target.value });
                  }}
                />
              </div>
              <div className="field">
                <label htmlFor="name">User ID</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your User ID"
                  onChange={(e) => {
                    setNoteFields({ ...noteFields, userId: e.target.value });
                  }}
                />
              </div>
              <div className="field">
                <label htmlFor="email">Tag</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter some Tags"
                  onChange={(e) => {
                    setNoteFields({ ...noteFields, tag: e.target.value });
                  }}
                />
              </div>
              <div className="field">
                <label htmlFor="number">Content</label>
                <input
                  type="text"
                  name="number"
                  placeholder="Enter the Notes Content"
                  onChange={(e) => {
                    setNoteFields({
                      ...noteFields,
                      content: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="field">
                <label htmlFor="password">noteBookId</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Note Book ID"
                  onChange={(e) => {
                    setNoteFields({
                      ...noteFields,
                      noteBookId: e.target.value,
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
            <div className="read-fields read-user notes-fields-wrap">
              <div className="field">
                <input
                  type="text"
                  name="userName"
                  placeholder="Enter Notes ID to Find Notes"
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
                    <h3>Tags : {note.tags}</h3>
                    <h3>Content : {note.content}</h3>
                    <h3>Notebook ID : {note.noteBookId}</h3>
                  </div>
                }
              </div>
            </div>
          ) : null}

          {readAll ? (
            <div className="read-fields read-cus notes-fields-wrap">
              <div className="user-details">
                {notes.map((item: any, index: any) => {
                  if (item) {
                    return (
                      <div className="user-detail-list" key={index}>
                        <h3>Title : {item.title}</h3>
                        <h3>User ID : {item.userId}</h3>
                        <h3>Tags : {item.tags}</h3>
                        <h3>Content : {item.content}</h3>
                        <h3>Notebook ID : {item.noteBookId}</h3>
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
            <div className="read-fields update-fields notes-fields-wrap">
              <div className="field">
                <input
                  type="text"
                  name="userName"
                  placeholder="Enter Note book ID to update"
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
                  placeholder="Content"
                />
                <input
                  onChange={(e) =>
                    setUpdateFields({
                      ...updateFields,
                      noteBookId: e.target.value,
                    })
                  }
                  className="updateInput"
                  type="text"
                  placeholder="Notebook ID"
                />
                <input
                  onChange={(e) =>
                    setUpdateFields({
                      ...updateFields,
                      tags: e.target.value,
                    })
                  }
                  className="updateInput"
                  type="text"
                  placeholder="Tags"
                />
              </div>
              <div onClick={_updateUser} className="updateForm">
                Update
              </div>
            </div>
          ) : null}

          {deleteUser ? (
            <div className="read-fields delete-fields notes-fields-wrap note-page">
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

export default NotePage;
