const Header = () => {
  return (
    <header className="self-stretch h-[3.563rem] flex flex-col items-start justify-start py-[0rem] px-[1.312rem] box-border gap-[0.812rem] max-w-full text-left text-[1rem] text-gray-200 font-sans font-semibold">
      <div className="self-stretch flex flex-row items-start justify-start gap-[0.312rem] max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem] box-border max-w-full">
          <img
            className="w-[9.563rem] h-[2.138rem] relative object-contain"
            loading="lazy"
            alt=""
            src="/group-1216258203@2x.png"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem]">
          <div className="relative cursor-pointer inline-block min-w-[6.313rem] whitespace-nowrap">
            Resume Scan
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.625rem] pb-[0rem] pr-[1.687rem] pl-[0rem]">
          <button className="cursor-pointer [border:none] py-[0.375rem] px-[0.625rem] bg-darkorange-300 rounded-40xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-chocolate relative top-[3px] left-[0.8rem]">
            <div className="relative text-[0.75rem] leading-[0.75rem] font-sans text-darkorange-200 text-left inline-block min-w-[4rem] whitespace-nowrap ">
              New Launch
            </div>
          </button>
        </div>
        <nav className="m-0 w-[32.875rem] flex flex-col items-start justify-start pt-[0.75rem] pb-[0rem] pr-[1.687rem] pl-[0rem] box-border max-w-full mq825:w-[1.688rem] mq1500:hidden">
          <nav className="m-0 self-stretch flex flex-row items-start justify-start gap-[1.981rem] text-left text-[1rem] text-gray-200 font-sans mq825:hidden mq825:gap-[1rem]">
            <div className="flex-1 flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
              <div className="h-[1rem] cursor-pointer relative leading-[1.367rem] inline-block min-w-[7.938rem] whitespace-nowrap">
                Resume Keyowrds
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
              <div className="h-[1rem] cursor-pointer relative leading-[1.367rem] inline-block min-w-[7.438rem] whitespace-nowrap">
                Resume Services
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
              <div className="h-[1rem] cursor-pointer relative leading-[1.367rem] inline-block min-w-[5.563rem] whitespace-nowrap">
                Career Blogs
              </div>
            </div>
            <div className="relative cursor-pointer top-[2px] leading-[1.367rem] inline-block min-w-[4.313rem] whitespace-nowrap">
              About Us
            </div>
          </nav>
        </nav>
        <button className="cursor-pointer [border:none] py-[0.375rem] px-[0.5rem] bg-whitesmoke-300 rounded-42xl overflow-hidden flex flex-col items-start justify-start">
          <div className="flex flex-row items-center justify-start gap-[0.687rem]">
            <img
              className="h-[1.938rem] w-[1.938rem] relative rounded-34xl overflow-hidden shrink-0 object-cover"
              alt=""
              src="/placeholder@2x.png"
            />
            <div className="flex flex-row items-center justify-start gap-[0.5rem]">
              <div className="relative text-[0.875rem] leading-[0.875rem] font-sans text-black text-left inline-block min-w-[3.875rem] whitespace-nowrap font-semibold">
                Divyanshu
              </div>
              <img
                className="h-[0.188rem] w-[0.375rem] relative object-contain"
                alt=""
                src="/user-icon.svg"
              />
            </div>
          </div>
        </button>
      </div>
      <img
        className="ml-[-5.813rem] w-[120rem] h-[0.063rem] relative object-contain max-w-[124%] shrink-0"
        alt=""
        src="/logo.svg"
      />
    </header>
  );
};

export default Header;
