import React from "react";
import styles from "./content.module.scss";
import cns from "classnames";
const ContentContainer = ({ heading, withoutPadding, children }) => {
  return (
    <div className={styles.container}>
      <span className={cns("font2", styles.title)}>{heading}</span>
      <div
        className={
          withoutPadding ? styles.contentRemovePadding : styles.content
        }
      >
        {children}
      </div>
    </div>
  );
};
export default ContentContainer;
