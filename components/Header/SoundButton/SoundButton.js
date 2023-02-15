const SoundButton = () => {
  return (
    <button
      //   title="Enable sounds/Disable sounds"
      className="soundButton absolute top-3 right-14 link"
    >
      <svg width="25" height="25" viewBox="0 0 21 21" fill="#fff">
        <defs>
          <linearGradient id="gradient">
            <stop offset="0" stopColor="#9f55ff" />
            <stop offset="1" stopColor="#7000ff" />
          </linearGradient>
        </defs>
        <path
          d="M8.25 3.75L4.5 6.75H1.5V11.25H4.5L8.25 14.25V3.75Z"
          className="class-1"
        ></path>
        <path
          d="
            M14.3025 3.69751
            C15.7086 5.10397 16.4984 7.01128 16.4984 9.00001
            C16.4984 10.9887 15.7086 12.8961 14.3025 14.3025
          "
          className="class-2"
          //   style="opacity: 1; transition-delay: 150ms;"
        ></path>
        <path
          d="
            M11.655 6.34501
            C12.358 7.04824 12.753 8.00189 12.753 8.99626
            C12.753 9.99063 12.358 10.9443 11.655 11.6475
          "
          className="class-3"
          //   style="opacity: 1; transition-delay: 0ms;"
        ></path>
      </svg>
    </button>
  );
};

export default SoundButton;
