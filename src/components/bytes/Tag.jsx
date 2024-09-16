const Tag = ({ text }) => {
  return (
    <div className="z-10 w-[150px] h-[45px] lg:min-w-[200px] cursor-default rounded-full border-[#A418BA] border-2 lg:h-[60px] text-[#A418BA] ] text-lg lg:text-2xl flex justify-center items-center ">
      {text}
    </div>
  );
};

export default Tag;
