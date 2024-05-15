

const Footer = () => {
  return (
    <>
        <div className="w-[9.5rem] flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] box-border">
            <div className="relative self-stretch whitespace-nowrap">
            <span>{`Showing `}</span>
            <span className="leading-[0%] font-medium text-text-primary-light">
                1-20
            </span>
            <span className="font-noto-sans text-darkgray">{` from `}</span>
            <span className="font-medium font-noto-sans text-text-primary-light">
                1250
            </span>
            <span className="text-darkgray">
                <b className="font-noto-sans">{` `}</b>
                <span className="font-noto-sans">data</span>
            </span>
            </div>
        </div>
        <div className="w-[8.125rem] flex flex-row items-start justify-start gap-[0.375rem] text-gray-100">
            <div className="cursor-pointer flex-1 rounded bg-gray-100 overflow-hidden flex flex-row items-start justify-start pt-[0.375rem] pb-[0.062rem] pr-[0.5rem] pl-[0.687rem] text-white border-[1px] border-solid border-gainsboro-100">
                <div className="relative font-medium inline-block min-w-[0.438rem]">
                    1
                </div>
            </div>
            <div className="cursor-pointer flex-1 rounded bg-white overflow-hidden flex flex-row items-start justify-start pt-[0.375rem] pb-[0.062rem] pr-[0.5rem] pl-[0.687rem] border-[1px] border-solid border-gainsboro-100">
                <div className="relative font-medium inline-block min-w-[0.438rem]">
                    2
                </div>
            </div>
            <div className="rounded bg-white overflow-hidden flex flex-row items-start justify-start pt-[0.5rem] pb-[0.187rem] pr-[0.5rem] pl-[0.625rem]">
                <div className="relative font-medium inline-block min-w-[0.625rem]">
                    ...
                </div>
            </div>
            <div className="cursor-pointer flex-1 rounded bg-white overflow-hidden flex flex-row items-start justify-start pt-[0.375rem] pb-[0.062rem] pr-[0.562rem] pl-[0.625rem] border-[1px] border-solid border-gainsboro-100">
                <div className="relative font-medium inline-block min-w-[0.438rem]">
                    8
                </div>
            </div>
        </div>
    </>
   
  )
}

export default Footer
