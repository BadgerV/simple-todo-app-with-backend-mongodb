import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo } from "../../app/apiCalls";

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 50%;
  justify-content: center;
`;

const Input = styled.input`
  outline: none;
  flex: 3;
  border: none;
  padding: 0px 10px;
  background-color: #e3e3e3;
  color: white;
  margin-right: 5px;
  border-radius: 5px;
`;

const TimeInput = styled.input`
  outline: none;
  flex: 1;
  border: none;
  padding: 0px 10px;
  background-color: #e3e3e3;
  color: white;
  margin-right: 5px;
  border-radius: 5px;
`;

const Button = styled.button`
  outline: none;
  height: 100%;
  flex: 1;
  border: none;
  background-color: #3e3e3e;
  color: white;
  border-radius: 5px;
`;

const Searchbar = () => {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");

  const dispatch = useDispatch();
  const handleChangeTask = (e) => {
    setTask(e.target.value);
  };
  const handleChangeTime = (e) => {
    setTime(e.target.value);
  };

  return (
    <Container>
      <Input placeholder="Task" onChange={(e) => handleChangeTask(e)} />
      <TimeInput placeholder="TIme" onChange={(e) => handleChangeTime(e)} />
      <Button onClick={(e) => addTodo({ task, time }, dispatch)}>Submit</Button>
    </Container>
  );
};

export default Searchbar;
