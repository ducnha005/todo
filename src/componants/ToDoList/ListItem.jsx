import React, { useState } from "react";
import styles from "./ListItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { remove, toggle } from "../../todoSlice";

function ListItem() {
  const [curPage, setCurPage] = useState("All");
  const listItem = useSelector((state) => state.todo.listItem);
  const activeList = listItem.filter((item) => !item.completed);
  const completedList = listItem.filter((item) => item.completed);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.status}>
        <button
          className={curPage === "All" ? styles.active : ""}
          onClick={() => setCurPage("All")}
        >
          All {curPage === "All" && <span>{listItem.length}</span>}
        </button>
        <button
          onClick={() => setCurPage("Active")}
          className={curPage === "Active" ? styles.active : ""}
        >
          Active {curPage === "Active" && <span>{activeList.length}</span>}
        </button>
        <button
          onClick={() => setCurPage("Completed")}
          className={curPage === "Completed" ? styles.active : ""}
        >
          Completed{" "}
          {curPage === "Completed" && <span>{completedList.length}</span>}
        </button>
        {completedList.length > 0 && (
          <button
            className={styles["clear-completed"]}
            onClick={() => {
              completedList.map((item) => {
                dispatch(remove(item.id));
              });
            }}
          >
            clear completed
          </button>
        )}
      </div>
      {curPage === "All" &&
        (listItem.length === 0 ? (
          <div className={styles["itemList-contain"]}>
            <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px">
              <circle
                r="30px"
                cx="40px"
                cy="40px"
                fill="#fff"
                stroke="#d1d5dc"
                strokeWidth="10px"
              ></circle>
            </svg>
            <p>No tasks yet. Create one to get started!</p>
          </div>
        ) : (
          <div>
            {listItem.map((item) => {
              return (
                <div className={styles.item} key={item.id}>
                  <input
                    type="checkbox"
                    onChange={() => {
                      dispatch(toggle(item.id));
                    }}
                    checked={item.completed}
                  />
                  <div className={styles["item-contain"]}>
                    <h3 className={item.completed ? styles.completed : ""}>
                      {item.todo}
                    </h3>
                    <div className={styles.date}>{item.date}</div>
                  </div>
                  <div
                    onClick={() => {
                      console.log(item.id);
                      dispatch(remove(item.id));
                    }}
                    className={styles["trash-icon"]}
                  >
                    <FaTrash></FaTrash>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      {curPage === "Active" &&
        (activeList.length === 0 ? (
          <div className={styles["itemList-contain"]}>
            <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px">
              <circle
                r="30px"
                cx="40px"
                cy="40px"
                fill="#fff"
                stroke="#d1d5dc"
                strokeWidth="10px"
              ></circle>
            </svg>
            <p>No active tasks. Great job!</p>
          </div>
        ) : (
          <div>
            {activeList.map((item) => {
              return (
                <div className={styles.item} key={item.id}>
                  <input
                    type="checkbox"
                    onChange={() => {
                      dispatch(toggle(item.id));
                    }}
                    checked={item.completed}
                  />
                  <div className={styles["item-contain"]}>
                    <h3 className={item.completed ? styles.completed : ""}>
                      {item.todo}
                    </h3>
                    <div className={styles.date}>{item.date}</div>
                  </div>
                  <div
                    className={styles["trash-icon"]}
                    onClick={() => dispatch(remove(item.id))}
                  >
                    <FaTrash></FaTrash>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      {curPage === "Completed" &&
        (completedList.length === 0 ? (
          <div className={styles["itemList-contain"]}>
            <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px">
              <circle
                r="30px"
                cx="40px"
                cy="40px"
                fill="#fff"
                stroke="#7bf1a8"
                strokeWidth="10px"
              ></circle>
              <path
                d="M25 40 L40 50 L50 30"
                strokeWidth="10px"
                stroke="#7bf1a8"
                fill="#fff"
              ></path>
            </svg>
            <p>No completed tasks yet.</p>
          </div>
        ) : (
          <div>
            {completedList.map((item) => {
              return (
                <div className={styles.item} key={item.id}>
                  <input
                    type="checkbox"
                    onChange={() => {
                      dispatch(toggle(item.id));
                    }}
                    checked={item.completed}
                  />
                  <div className={styles["item-contain"]}>
                    <h3 className={item.completed ? styles.completed : ""}>
                      {item.todo}
                    </h3>
                    <div className={styles.date}>{item.date}</div>
                  </div>
                  <div
                    className={styles["trash-icon"]}
                    onClick={() => {
                      dispatch(remove(item.id));
                      console.log("hi");
                    }}
                  >
                    <FaTrash></FaTrash>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
    </div>
  );
}

export default ListItem;
