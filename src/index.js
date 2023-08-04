import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import { createContext, useContext } from 'react';
import users from 'services/users';

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContext.Provider value={users}>
    <App />
  </UserContext.Provider>
);
