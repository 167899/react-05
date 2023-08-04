import User from 'components/User/User';
import { useUser } from 'index';

const UsersList = () => {
  const users = useUser();

  return (
    <ul
      style={{
        border: '1px solid wheat',
        padding: '5px 15px 5px 35px',
      }}
    >
      {users &&
        users.map(({ id, name, username, email, phone }) => (
          <User
            key={id}
            name={name}
            username={username}
            email={email}
            phone={phone}
          ></User>
        ))}
    </ul>
  );
};

export default UsersList;
