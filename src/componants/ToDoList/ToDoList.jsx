import React, { useState } from "react";
import styles from "./ToDoList.module.css";
import AddList from "./Search";
import ListItem from "./ListItem";

function ToDoList() {
  return (
    <div className={styles["toDoList"]}>
      <AddList></AddList>
      <ListItem></ListItem>
    </div>
  );
}

export default ToDoList;
