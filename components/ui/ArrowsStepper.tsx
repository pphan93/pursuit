import styles from "./ArrowsStepper.module.css";

type status = {
  status: { status: string | null; name: string }[];
  onClickArrow: (value: string | null) => void;
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
          : item.status === "Rejected"
          ? (style = `${styles.step} ${styles.reject}`)
          : (style = `${styles.step}`);

        return (
          <div key={idx} className={style}>
            <span>
              <a
                href="#"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>): void =>
                  props.onClickArrow(e.currentTarget.textContent)
                }
              >
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
