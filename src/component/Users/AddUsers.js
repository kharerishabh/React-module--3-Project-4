import React, { useState, useRef } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helper/Wrapper";

const AddUser = (props) => {
const nameInputRef = useRef()
const ageInputRef = useRef()
const collegeNameInputRef = useRef()

  const[error, setError] = useState()

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value
    const collegeUser = collegeNameInputRef.current.value
    
    if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0){
        setError({
            title: 'Invalid input',
            message: 'Please enter a valid name and age (non empty values)'
        })
        return;
    }
    if(+enteredUserAge < 1){
        setError({
            title: 'Invalid input',
            message: 'Please enter a valid age (> 0)'
        })
        return;
    }
    props.onAddUser(enteredName, enteredUserAge, collegeUser);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    collegeNameInputRef.current.value = '';
  };

  const errorHandler = () =>{
    setError(null)
  }

  return (
    <Wrapper>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input
          id="username"
          type="text"
          ref={nameInputRef}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          ref={ageInputRef}
        />
        <label htmlFor="collegename">College Name</label>
        <input
          id="collegename"
          type="text"
          ref={collegeNameInputRef}
        />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
    </Wrapper>
  );
};

export default AddUser;