import fundup from "../assets/fundup.png";

function Navbar() {
  function changeCss() {
    var navElement = document.querySelector("#navbar");
    this.scrollY > 300
      ? ((navElement.style.borderRadius = "0px"),
        (navElement.style.top = "0px"),
        (navElement.style.width = "auto"))
      : ((navElement.style.borderRadius = "9999px"),
        (navElement.style.top = "30px"),
        (navElement.style.width = "1240px"));
  }
  window.addEventListener("scroll", changeCss, false);

  return (
    <>
      <nav
        id="navbar"
        className="fixed z-20 h-[70px] top-[30px] w-[1240px] inset-x-0 mx-auto pl-[77px] py-[17px] flex flex-row items-center rounded-full bg-white-100 transition-all ease-in-out"
      >
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
      </nav>
    </>
  );
}

export default Navbar;
