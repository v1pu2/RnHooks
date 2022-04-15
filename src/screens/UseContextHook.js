import React, {createContext, useState} from 'react';

import Login from '../component/Login';
import User from '../component/User';

export const AppContext = createContext(null);

const UseContextHook = () => {
  const [userName, setUserName] = useState('Test');

  return (
    <AppContext.Provider value={{userName, setUserName}}>
      <Login />
      <User />
    </AppContext.Provider>
  );
};

export default UseContextHook;
