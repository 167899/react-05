const User = ({ name, username, email, phone }) => {
  return (
    <li
      style={{
        marginBottom: '25px',
      }}
    >
      <h2
        style={{
          color: '#ff9',
        }}
      >
        {name} {username}
      </h2>
      <p>Email: {email}</p>
      <p>Phone number: {phone}</p>
    </li>
  );
};

export default User;
