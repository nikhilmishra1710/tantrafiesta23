const TitleCard = ({ title, theme, children, height }) => {
  return (
    <div
      style={{
        "--gradientBefore": `${theme[1]}33`,
        "--gradientAfter": `${theme[1]}aa`,
        height: height ? height : "500px",
      }}
      className="eventCard   text-black"
    >
      <div
        style={{ backgroundColor: "#000000" }}
        className="eventCard-content p-2"
      >
        <div
          style={{
            "--c1": `${theme[0]}`,
            "--c2": `${theme[1]}`,
            "--c3": `${theme[2]}`,
          }}
          className="transText transBg whitespace-nowrap overflow-hidden mt-4 mb-7 font-bold pb-1 text-3xl xl:text-4xl  z-10"
        >
          {title}
        </div>
        <div className="">
          <div className=" grid grid-cols-2 gap-2  ">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default TitleCard;
