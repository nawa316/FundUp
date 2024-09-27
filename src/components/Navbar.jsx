import fundup from "../assets/fundup.png";

function Navbar() {
  return (
    <>
      <div className="h-[103px] w-[1240px] mt-[55px] pl-[77px] py-[17px] flex flex-row items-center mx-auto rounded-full bg-white-100">
        <img
          src={fundup}
          alt="logo FundUp"
          className="w-[169px] h-[47px] mr-auto"
        />
        <div className="flex flex-row items-center gap-[80px] mr-[55px]">
          <a href="#" className="text-black-500 text-[16px] font-medium">
            About
          </a>
          <a href="#" className="text-black-500 text-[16px] font-medium">
            Services
          </a>
          <a href="#" className="text-black-500 text-[16px] font-medium">
            Contact
          </a>
          <a
            href="#"
            className="border-[1px] rounded-full border-goldDrop-300 text-goldDrop-300 p-[14px] text-[16px] font-medium"
          >
            Get Started
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
