

const JobPost = ({imgUrl}) => {
  return (
    <div className="self-stretch h-fit rounded-lg bg-white box-border overflow-hidden shrink-0 flex items-start justify-start p-[1rem] gap-[0.85rem] max-w-full border-[1px] border-solid border-gainsboro-100 mq450:h-auto">
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.218rem] max-w-[calc(100%_-_256px)] shrink-0 text-[1rem]">
            <div className="w-[24rem] flex flex-row flex-wrap items-start justify-start gap-[0.75rem] max-w-full font-abeezee">
            <img
                className="h-[3.25rem] w-[3.25rem] relative rounded-md overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/frame-1261154804@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border min-w-[17rem]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.312rem]">
                <div className="relative inline-block min-w-[7.063rem] font-semibold">
                    UI/UX Designer
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[0.437rem] text-[0.75rem] text-text-primary-light font-noto-sans mq450:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem] text-[0.875rem]">
                    <div className="h-[0.875rem] relative leading-[1.2rem] inline-block min-w-[3rem]">
                        Google
                    </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[0.5rem] pb-[0rem] pr-[0.25rem] pl-[0rem]">
                        <div className="w-[5px] h-[5px] relative rounded-[50%] bg-text-primary-light" />
                    </div>
                    <div className="relative top-[0.2rem] w-[3.25rem] flex flex-col items-start justify-start py-[0rem] pr-[0.25rem] pl-[0rem] box-border text-darkorange-100">
                    <div className="self-stretch rounded-19xl bg-linen flex flex-row items-start justify-start py-[0.25rem] px-[0.375rem]">
                        <div className="relative leading-[0.75rem] inline-block min-w-[2.188rem]">
                        Figma
                        </div>
                    </div>
                    </div>
                    <div className="relative top-[0.2rem] flex-1 flex flex-col items-start justify-start py-[0rem] pr-[0.25rem] pl-[0rem] box-border min-w-[3.25rem] text-crimson">
                    <div className="rounded-19xl bg-lavenderblush flex flex-row items-start justify-start py-[0.25rem] px-[0.5rem]">
                        <div className="relative leading-[0.75rem] inline-block min-w-[3.75rem] whitespace-nowrap">
                        Prototyping
                        </div>
                    </div>
                    </div>
                    <div className="mt-[0.5rem] ml-[1rem] relative py-[0.25rem] px-[0.5rem] bg-aliceblue text-[#2288FF] leading-[0.75rem] inline-block min-w-[4.438rem] whitespace-nowrap rounded-[10px]">
                        User Interface
                    </div>
 
                </div>
                </div>
            </div>
            </div>
            <div className="flex flex-row items-start justify-start py-[0rem] px-[0.125rem] box-border max-w-full text-[0.875rem]">
            <div className="flex flex-row items-start justify-start gap-[0.5rem] max-w-full mq825:flex-wrap">
                <div className="flex flex-row items-center justify-start py-[0rem] pr-[0.25rem] pl-[0rem] gap-[0.493rem]">
                    <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                        <img
                        className="w-[0.756rem] relative"
                        loading="lazy"
                        src="/group-1216258215.svg"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-start pb-[0rem] pr-[0.256rem] pl-[0rem]">
                        <div className=" relative inline-block min-w-[3.813rem] font-semibold">
                        0-3 Years
                        </div>
                    </div>
                <div className="h-[1.125rem] w-[0.063rem] relative bg-lightgray-100" />
                </div>
                <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                <img
                    className="w-[0.75rem] h-[0.75rem] relative top-[1px]"
                    loading="lazy"
                    src="/group-1216258216.svg"
                />
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.75rem]">
                    <div className="flex flex-row items-center justify-start gap-[0.375rem]">
                        <div className="flex flex-col items-start justify-start px-[0rem] pb-[0rem]">
                            <div className="relative  inline-block min-w-[3.75rem] font-semibold">
                                Full Time
                            </div>
                        </div>
                        <div className="h-[1.125rem] w-[0.063rem] relative bg-lightgray-100" />
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem] text-darkgray">
                        <div className="h-[0.625rem] relative inline-block min-w-[4rem] whitespace-nowrap top-[-2px]">
                        Posted on:
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                <div className="h-[0.625rem] relative inline-block min-w-[5rem] whitespace-nowrap top-[-2px] font-semibold">
                    02 April 2024
                </div>
                </div>
            </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0.5rem] max-w-full text-darkgray">
                <ul className="flex-1 relative left-[-1rem] leading-[1.563rem] inline-block min-w-[33.375rem] max-w-full mq825:min-w-full">
                    <li className="[margin-block-start:0] [margin-block-end:3px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt
                    </li>
                    <li className="m-0">
                    Labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris
                    </li>
                </ul>
            </div>
        </div>
        <div className="w-[15.125rem] flex flex-col items-end justify-start gap-[1.062rem]">
            <div className="flex flex-row items-start justify-start gap-[1rem] mq450:flex-wrap">
            <button className="cursor-pointer pt-[0.5rem] pb-[0.312rem] pr-[1.875rem] pl-[2.312rem] bg-darkorange-200 h-[2.375rem] w-[9.375rem] rounded-lg box-border overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[0.562rem] border-[1px] border-solid border-gray-300">
                <div className="relative z-[5] text-[1rem] font-medium font-noto-sans text-white text-left inline-block min-w-[5.188rem] shrink-0 [debug_commit:1de1738]">
                Apply Now
                </div>
                <div className="ml-[-2.438rem] w-[9.625rem] h-[1.375rem] relative [filter:blur(46.9px)] rounded-[50%] bg-white shrink-0 [debug_commit:1de1738]" />
            </button>
            <button className="cursor-pointer py-[0.5rem] px-[0.687rem] bg-gray-400 w-[4.75rem] rounded-lg box-border overflow-hidden shrink-0 flex items-center gap-[0.437rem] border-[1px] border-solid border-gray-500 z-[5]">
                <img
                className="w-[1.125rem] relative min-h-[1.125rem]"
                src="/frame-2.svg"
                />
                <div className="cursor-pointer flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                    <div className=" relative text-[0.75rem] leading-[1.033rem] font-noto-sans text-text-primary-light text-left inline-block min-w-[1.688rem]">
                        Save
                    </div>
                </div>
            </button>
            </div>
            <div className="absolute self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.75rem] pl-[1.375rem]">
            <div className="flex-1 ">
                <div className=" w-[calc(100%_-_8px)] top-[0.25rem] right-[0.25rem] left-[0.25rem] h-[12.5rem]">
                    <img
                        className="relative top-[2rem] w-full h-full"
                        src={imgUrl}
                    />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JobPost
