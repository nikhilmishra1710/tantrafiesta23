import {Link} from "react-router-dom";
 
const page = () => {
  return (
    <div className="h-screen w-screen grid bg-black grid-cols-1 md:grid-cols-2 items-center">
      <div className="text-6xl font-bold text-white w-full grid place-items-center pt-24 md:pt-0">
        SPONSORS
      </div>
      <div className="h-full flex flex-col  md:pt-28 pb-5 justify-between items-center md:items-start">
        <Link to="https://www.appxbuild.com/">
          <img src="/assets/logo/appx_logo.jpeg" height={100} width={200} />
        </Link>
        <Link to="https://www.ntpc.co.in/">
          <img src="/assets/logo/ntpc_logo.png" height={50} width={150} />
        </Link>
        <Link to="https://www.codingninjas.com/">
          <img src="/assets/logo/ninjas_logo.png" height={50} width={300} />
        </Link>

        <Link to="https://www.geeksforgeeks.org/">
          <img
            src="/assets/logo/gfg_logo_extended.svg"
            height={40}
            width={350}
          />
        </Link>
        <Link to="https://tsecond.us/">
          <img src="/assets/logo/tsecond_logo.svg" height={50} width={200} />
        </Link>
        <Link to="https://www.koed.in/">
          <img src="/assets/logo/koed_logo.svg" height={50} width={80} />
        </Link>

        <Link to="https://www.wolfram.com/">
          <img src="/assets/logo/wolfram_logo.svg" height={100} width={250} />
        </Link>
      </div>
    </div>
  );
};

export default page;
