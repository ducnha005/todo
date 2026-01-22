import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Search.module.css";
import { add } from "../../todoSlice";

function AddList() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  return (
    <div className={styles.addList}>
      <input
        placeholder="Add new task"
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
      <button
        onClick={() => {
          dispatch(
            add({
              id: Date.now(),
              todo: input,
              completed: false,
              date: new Date().toLocaleString("en-us", {
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              }),
            }),
          );
          setInput("");
        }}
      >
        <div className={styles.button}>
          <span>+</span>
          <span>Add</span>
        </div>
      </button>
    </div>
  );
}

export default AddList;
