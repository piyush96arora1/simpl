import React from "react";
import cns from "classnames";
import styles from "./horizontal.module.scss";
const HorizontalScroll = ({ items = [] }) => {
  return (
    <div className={cns(styles.horizontalScroll)}>
      {items.map((item) => {
        return (
          <div key={item.id} className={cns("column center pointer")}>
            <div className={styles.circle}>
              <img src={item.src} alt="img" />
            </div>
            <span className={cns("font2", styles.listName)}>{item.name}</span>
          </div>
        );
      })}
    </div>
  );
};
export default HorizontalScroll;
