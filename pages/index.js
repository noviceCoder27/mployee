import Header from "../components/Header";
import JobListings from "../components/JobListings";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="w-full relative box-border overflow-hidden flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] leading-[normal] tracking-[normal]">
      <img
        className="w-[0.063rem] h-[62.188rem] relative hidden z-[1]"
        src="/vector-11.svg"
      />
      <Header />
      <main className="w-full flex flex-row items-start justify-start pt-[0rem] pl-[1.5rem] box-border gap-[1.343rem]  mt-[-0.063rem] text-left text-[0.875rem] text-black font-noto-sans">
        <div className="ml-[-1.625rem] flex flex-col items-start justify-start pt-[2.437rem] px-[0rem] pb-[0rem] shrink-0">
          <div className="w-[0.375rem] h-[1.438rem] relative rounded-[48px] bg-darkorange-200" />
        </div>
        <div className="w-[17rem] flex flex-col items-start justify-start pt-[2rem] px-[0rem] pb-[0rem] box-border shrink-0 lg:hidden">
          <div className="self-stretch flex flex-col items-start justify-start gap-[19rem]">
            <div className="self-stretch flex flex-col items-start justify-start py-[0rem] pr-[0.125rem] pl-[0rem] gap-[0.5rem]">
              <Sidebar />
            </div>
          </div>
        </div>
       <JobListings /> 
      </main>
    </div>
  );
};

export default Home;
