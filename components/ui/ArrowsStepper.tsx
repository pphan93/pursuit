import styles from "./ArrowsStepper.module.css";

type status = {
  status: [{ status: string; name: string }];
  onClickArrow: () => void;
};

const ArrowsStepper = (props: status) => {
  return (
    <div
      className={`${styles["arrow-steps"]} ${styles.clearfix} hidden md:block`}
    >
      {props.status.map((item, idx) => {
        let style;
        item.status === "Completed"
          ? (style = `${styles.step} ${styles.done}`)
          : item.status === "Active"
          ? (style = `${styles.step} ${styles.current}`)
          : (style = `${styles.step}`);

        return (
          <div key={idx} className={style}>
            <span>
              <a href="#" onClick={props.onClickArrow}>
                {item.name}
              </a>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ArrowsStepper;
