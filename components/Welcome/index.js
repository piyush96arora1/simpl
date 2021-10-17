import styles from "./welcome.module.scss";
import React from "react";
import cns from "classnames";
import Resources from "../../utils/Resources";
const Welcome = ({}) => {
  return (
    <React.Fragment>
        <div className={styles.welcomeHead}>
          <span className={cns("block font3 font-weight-500", styles.title)}>
            Welcome to <img src={Resources.images.logo} alt="" />
          </span>
          <span className={cns("block font4 font-weight-600", styles.subTitle)}>
            2 Active accounts
          </span>
        </div>
        <div className={styles.scroller}>
          <div className={styles.card}>
            <Card />
          </div>
          <div className={styles.card}>
          <Card />
          </div>
        </div>
    </React.Fragment>
  );
};
export default Welcome;

const Card = ({}) => {
  return (
    <div className="column">
      <div className={cns("row",styles.spacer)}>
        <img src={Resources.images.logocolored} alt="logo" />
        <span className={cns(styles.tag)}>BILL OVERDUE</span>
      </div>
      <div className={cns("row",styles.spacer,styles.row2)}>
        <span className={cns("column")}>
          <span className={cns("font4 font-weight-600", styles.light)}>SPENT TILL NOW</span>
          <span className={styles.amount,styles.gap}> ₹1800 </span>
        </span>
        <span className={cns("column")}>
          <span className={cns("font4 font-weight-600",styles.light)}>DUE DATE</span>
          <span className={cns("font5 font-weight-400",styles.gap)}> 15 AUG </span>
        </span>
      </div>
      <button className={cns(styles.btn,"pointer")}>
        <img src={Resources.images.lock} alt=""/>
        <span>PAY ₹1500</span>
      </button>
    </div>
  );
};
