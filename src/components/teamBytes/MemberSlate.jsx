const MemberSlate = ({ name, title }) => {
  return (
    <div className=" h-12  rounded-2xl px-2 text-white">
      <div className=" tracking-widest text-xs font-light opacity-50">
        {title ? title : "Member"}
      </div>
      <div className=" text-sm ">{name}</div>
    </div>
  );
};

export default MemberSlate;
