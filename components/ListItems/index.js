import React from "react";
import styles from "./list.module.scss";
import cns from "classnames";
const ListItems = ({ items=[] }) => {
  return (
    <div className={styles.gridContainer}>
      {items.map((item) => {
        return (
          <div key={item.id} className={cns("column center pointer")}>
            <img src={item.src} alt="img" />
            <span className={cns("font2", styles.listName)}>{item.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ListItems;
