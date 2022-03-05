import style from "./Loading.module.css";

const Loading = () => {
  return (
    <div className="rounded-t border-0 h-screen">
      <div className={style["peeek-loading"]}>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Loading;
