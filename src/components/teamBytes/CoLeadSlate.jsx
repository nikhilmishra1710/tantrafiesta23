const CoLeadSlate = ({ title, name, phone }) => {
  return (
    <div className=" h-[104px]  row-span-2  rounded-2xl px-2 text-white">
      <div className=" tracking-widest font-light opacity-50">
        {title ? title : "Co-Lead"}
      </div>
      <div className="text-2xl  ">{name}</div>
      <div className="text-base opacity-80">{phone}</div>
    </div>
  );
};

export default CoLeadSlate;
