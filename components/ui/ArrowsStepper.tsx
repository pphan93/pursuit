import styles from "./ArrowsStepper.module.css";

const ArrowsStepper = () => {
  const status = [
    {
      name: "Applied",
      status: "Completed",
    },
    {
      name: "Interview 1",
      status: "Active",
    },
    {
      name: "Take Home",
      status: null,
    },
    {
      name: "Interview 2",
      status: null,
    },
    {
      name: "Offered",
      status: null,
    },
    {
      name: "Accepted",
      status: null,
    },
  ];
  return (
    <div
      className={`${styles["arrow-steps"]} ${styles.clearfix} hidden md:block`}
    >
      {status.map((item, idx) => {
        let style;
        item.status === "Completed"
          ? (style = `${styles.step} ${styles.done}`)
          : item.status === "Active"
          ? (style = `${styles.step} ${styles.current}`)
          : (style = `${styles.step}`);

        return (
          <div key={idx} className={style}>
            <span>
              <a href="#">{item.name}</a>
            </span>
          </div>
        );
      })}

      {/* <div className={`${styles.step} ${styles.current}`}>
        <span>
          <a href="#">Interview 1</a>
        </span>
      </div>
      <div className={styles.step}>
        <span>
          <a href="#">Take Home</a>
        </span>
      </div>
      <div className={styles.step}>
        <span>
          <a href="#">Interview 2</a>
        </span>
      </div>
      <div className={styles.step}>
        <span>
          <a href="#">Offered</a>
        </span>
      </div>
      <div className={styles.step}>
        <span>
          <a href="#">Accepted</a>
        </span>
      </div> */}
    </div>
  );
};

export default ArrowsStepper;
