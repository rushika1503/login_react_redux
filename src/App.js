
import Login from "./components/Login";
import Logout from "./components/Logout";
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";
import React from 'react';

const App= () => {
  const user = useSelector(selectUser);
  return (
    <div>
      {user ? <Logout/> : <Login/>}
    

    </div>
  );
}

export default App;
