import "./usersStyle.css";

const User = (
  index: any,
  userName: any,
  name: any,
  email: any,
  contactNumber: any
) => {
  return (
    <div className="user-detail-list" key={index}>
      <h3>{userName}</h3>
      <h3>{name}</h3>
      <h3>{email}</h3>
      <h3>{contactNumber}</h3>
    </div>
  );
};

export default User;
