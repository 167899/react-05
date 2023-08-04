import UsersList from './UsersList/UsersList';

export const App = () => {
  return (
    <div
      style={{
        backgroundColor: '#111',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 12,
        color: '#fff',
      }}
    >
      <h1>Users</h1>
      <div>
        <UsersList />
      </div>
      
    </div>
  );
};
