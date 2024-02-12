interface TwitterIconProps {
  className?: string;
};

const TwitterIcon = ({className}:TwitterIconProps) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`icon icon-tabler icon-tabler-brand-x ${className}`}
        width="48"
        height="48"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
      </svg>
    </>
  );
};

export default TwitterIcon;
