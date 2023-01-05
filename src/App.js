import React, {useState}from 'react';
import AddUser from './component/Users/AddUsers';
import UsersList from './component/Users/UsersList';

function App() {
  const[usersList, setUsersList] = useState([])

  const addUserHandler = (uName, uAge, cName) =>{
    setUsersList((prevUserList) => {
      return [...prevUserList, {name: uName, age: uAge, college: cName, id: Math.random().toString()}]
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
