import cns from "classnames";
import React from "react";
import styles from "./verticalList.module.scss";

const ListItemsVertical = ({ items }) => {
  return (
    <div className={styles.listContainer}>
      {items.map((item) => {
        return (
          <div key={item.id} className={cns("flex row", styles.item)}>
            <div className={cns("flex row", styles.wrapper)}>
              <img src={item.src} alt="" />
              <div className="column">
                <span className="row">
                  <span className={cns("font4 font-weight-600")}>
                    {item.name}
                  </span>
                  {item.isAutoPay && (
                    <span className={cns(styles.tag)}>Autopay</span>
                  )}
                </span>
                <span className={cns("row font2", styles.row)}>
                  <span>{item.date}</span>
                  &nbsp;
                  <span className={styles.light}>{item.time}</span>
                  {item.isSimplPayLater && (
                    <React.Fragment>
                      <span> &nbsp; | &nbsp;</span>
                      <span className={styles.light}>Simpl Pay Later</span>
                    </React.Fragment>
                  )}
                </span>
                {item.offerAmount && (
                  <span className={cns("font2 ", styles.gap)}>
                    <span className={styles.colored}>
                      ₹{item.offerAmount} Cashback!
                    </span>{" "}
                    Will be credited after repayment
                  </span>
                )}
              </div>
              <div className={cns(styles.amount, "font4 font-weight-600")}>
                ₹250
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListItemsVertical;
