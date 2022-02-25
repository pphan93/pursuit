const ArrowLeft: React.FC<{ styleName: string; color: string }> = ({
  styleName,
  color,
}) => {
  return (
    //   <svg
    //
    //     xmlns="http://www.w3.org/2000/svg"
    //     viewBox="0 0 20 20"
    //   >
    //     <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
    //   </svg>

    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   className={styleName}
    //   width="24"
    //   height="24"
    //   viewBox="0 0 24 24"
    //   fill="none"
    // >
    //   <path
    //     fill={color}
    //     fillRule="evenodd"
    //     clipRule="evenodd"
    //     d="M15 20.67c-.19 0-.38-.07-.53-.22l-6.52-6.52a2.74 2.74 0 010-3.86l6.52-6.52c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-6.52 6.52c-.48.48-.48 1.26 0 1.74l6.52 6.52c.29.29.29.77 0 1.06-.15.14-.34.22-.53.22z"
    //   ></path>
    // </svg>

    <svg
      className={styleName}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.4">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 12C9 12.2652 9.10536 12.5196 9.29289 12.7071L13.2929 16.7072C13.6834 17.0977 14.3166 17.0977 14.7071 16.7072C15.0977 16.3167 15.0977 15.6835 14.7071 15.293L11.4142 12L14.7071 8.70712C15.0977 8.31659 15.0977 7.68343 14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289L9.29289 11.2929C9.10536 11.4804 9 11.7348 9 12Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default ArrowLeft;
