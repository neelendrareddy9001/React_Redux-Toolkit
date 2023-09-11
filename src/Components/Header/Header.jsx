import React from "react";
import styled from "styled-components";
import TaskList from "../TaskList";

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 72px;
  background: #7209b7;
`;
const Title = styled.h1`
  padding-top: 8px;
  font-size: 42px;
  font-weight: 100;
  text-align: center;
  font-family: "Roboto", san-serif;
  color: white;
`;
const WrapperContainer = styled.div`
  postion: absolute;
  left: 50%;
  transform: translate(60%);
  max-width: 700px;
  margin-top: 40px;
  height: 140px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(66, 68, 90, 1);
`;
const StyledInput = styled.input`
  margin: 20px 0 22px 0;
  width: 85%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
const Btn = styled.div`
  background-color: #7209b7;
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: 300;
  width: 80px;
  color: white;
  padding: 10px;
  margin-left: 18rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const Header = () => {
  return (
    <>
      <Wrapper className="wrapper">
        <Title>Todo App</Title>
        <WrapperContainer>
          <StyledInput placeholder="Enter Title"></StyledInput>
          <Btn>Add</Btn>
        </WrapperContainer>
        <TaskList />
      </Wrapper>
    </>
  );
};

export default Header;
