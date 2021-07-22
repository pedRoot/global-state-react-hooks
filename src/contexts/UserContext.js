import { createContext, useContext, useReducer } from 'react';

import UserReducer from '../reducers/UserReducer.js';
import globalStore from '../stores/globalStore.js';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, dispatchUser] = useReducer(UserReducer, globalStore.user)

  const data = { user, dispatchUser };

  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  )
}

const GetContextUser = () => {
  return useContext(UserContext);
};

export { UserProvider, GetContextUser };
