import React from "react";

import TaskList from "../TaskList";
import Task from "../Task";

import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";

const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar className="menu_bar">
          <h1 className="title mx-auto">Todo App</h1>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
