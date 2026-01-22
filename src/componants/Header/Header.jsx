import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles["header-contain"]}>
        <div className={styles.logo}>
          <svg width="70" height="70" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(182,68,255)" />
                <stop offset="100%" stopColor="rgb(220,62,253)" />
              </linearGradient>
            </defs>
            <rect width="70" height="70" fill="url(#grad)" rx="20"></rect>
            <rect
              x="20"
              y="20"
              width="15"
              height="15"
              rx="3"
              fill="url(#grad)"
              stroke="white"
              strokeWidth="3"
            ></rect>
            <path
              d="M20 45 L25 50 L35 40"
              stroke="white"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <rect
              x="40"
              y="20"
              fill="white"
              width="20"
              height="4"
              rx="3"
            ></rect>
            <rect
              x="40"
              y="35"
              fill="white"
              width="20"
              height="4"
              rx="3"
            ></rect>
            <rect
              x="40"
              y="50"
              fill="white"
              width="20"
              height="4"
              rx="3"
            ></rect>
          </svg>
        </div>
        <h1> My Todo List</h1>
        <p>Organize your tasks beautifully</p>
      </div>
    </div>
  );
}

export default Header;
