import style from "./Loading.module.css";

const Loading = () => {
  return (
    // <div className="rounded-t border-0 h-screen">
    //   <div className={style["peeek-loading"]}>
    //     <ul>
    //       <li></li>
    //       <li></li>
    //       <li></li>
    //       <li></li>
    //       <li></li>
    //       <li></li>
    //       <li></li>
    //       <li></li>
    //       <li></li>
    //       <li></li>
    //     </ul>
    //   </div>
    // </div>
    <div className="h-full flex justify-center items-center">
      <span className={style["loader"]}>
        <span className={style["loader-inner"]}></span>
      </span>
    </div>
  );
};

export default Loading;
