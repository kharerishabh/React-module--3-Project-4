import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, serEnteredUsername] = useState("");
  const [enteredAge, serEnteredAge] = useState("");
  const[error, setError] = useState()

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
        setError({
            title: 'Invalid input',
            message: 'Please enter a valid name and age (non empty values)'
        })
        return;
    }
    if(+enteredAge < 1){
        setError({
            title: 'Invalid input',
            message: 'Please enter a valid age (> 0)'
        })
        return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    serEnteredUsername("");
    serEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    if (enteredUsername.value === 0) {
      return alert("please fill the blank");
    }
    serEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    serEnteredAge(event.target.value);
  };
  const errorHandler = () =>{
    setError(null)
  }

  return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;
