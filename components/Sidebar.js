"use client"
import BottomCard from './BottomCard'
import {useState} from 'react';



const Sidebar = () => {
    const [toggle,setToggle] = useState(false);
    const [option,setOption] = useState({design: true, web: false, analyst: false,lorem: false});
    
    return (
        <form className="flex flex-col items-start self-stretch justify-start m-0" onSubmit = {(e) => {e.preventDefault()}} >
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                <button className="cursor-pointer [border:none] p-0 bg-white self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch rounded-lg bg-white flex flex-row items-center justify-start py-[0.625rem] pr-[1.812rem] pl-[1rem] font-semibold">
                        <div className="flex flex-row items-center justify-center gap-[0.75rem]">
                        <img
                            className="h-[1.25rem] w-[1.25rem] relative"
                            src="/vuesaxlineargrid5.svg"
                        />
                        <div className="h-[0.875rem] relative text-[0.875rem] leading-[1.2rem] font-noto-sans text-black text-left inline-block">
                            Job Recommendation Tool
                        </div>
                        </div>
                    </div>
                </button>
                <div className="self-stretch rounded-lg bg-white overflow-x-auto flex flex-row items-start justify-start py-[0.625rem] px-[1rem] gap-[0.75rem]">
                    <img
                        className="h-[1.25rem] w-[1.25rem] relative shrink-0 min-h-[1.25rem]"
                        src="/vuesaxlineartasksquare.svg"
                    />
                    <div className="w-[9.5rem] shrink-0 flex flex-col items-start justify-start pt-[0.187rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border font-semibold">
                        <div className="h-[0.875rem] relative text-[0.875rem] leading-[1.2rem] font-noto-sans text-black text-left inline-block min-w-[2.688rem] cursor-pointer">
                        History
                        </div>
                    </div>
                </div>
                <div className={`self-stretch cursor-pointer rounded-lg  overflow-x-auto flex flex-row items-start justify-start py-[0.625rem] px-[1rem] gap-[0.75rem] ${toggle && "bg-gray-100"}`} onClick = {() => setToggle(prev => !prev)}>
                    <img
                        className="h-[1.25rem] w-[1.25rem] relative shrink-0 min-h-[1.25rem]"
                        src={toggle ? "/vuesaxlinearreceiptadd.svg":"/black.svg"}
                    />
                    <div className={`w-[9.5rem] shrink-0 flex flex-col items-start justify-start pt-[0.187rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border font-semibold cursor-pointer`}>
                        <div className={`h-[0.875rem] relative text-[0.875rem] leading-[1.2rem] font-noto-sans text-left inline-block min-w-[4.438rem] ${toggle && "text-white"}`}>
                        Saved Jobs
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[0.468rem] px-[0rem] pb-[0rem]">
                        <img
                        className="w-[0.8rem] h-[0.8rem] relative top-[-2px] object-contain"
                        src= {toggle ? "vector-6-2.svg": "/down-arrow.svg"}
                        />
                    </div>
                </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-[0.5rem] px-[0rem] z-[1]">
                {toggle && <button className={`cursor-pointer py-[0rem] px-[0.687rem] bg-white self-stretch rounded-lg flex flex-row items-start justify-start gap-[0.625rem] ${option.design && "border-[1px] border-solid border-gainsboro-200"}`} onClick = {() => setOption({design: true,web: false,lorem: false,analyst: false})}>
                    <img
                        className="h-[2.75rem] w-[1.25rem] relative overflow-hidden shrink-0"
                        src={option.design ? "/gift.svg":"/gift-1.svg"}
                    />
                    <div className="flex flex-col items-start justify-start pt-[0.843rem] px-[0rem] pb-[0rem]">
                        <div className={`relative text-[0.875rem] font-text-small-14px-regular  text-left inline-block min-w-[6.375rem] ${option.design ? "text-darkorange-200": "text-text-primary-light "}`}>
                        UI/UX Designer
                        </div>
                    </div>
                </button>}
                    {toggle && <button className={`cursor-pointer py-[0rem] px-[0.687rem] bg-white self-stretch rounded-lg flex flex-row items-start justify-start gap-[0.625rem]  ${option.web && "border-[1px] border-solid border-gainsboro-200"} `} onClick = {() => setOption({design: false,web: true,lorem: false,analyst: false})}>
                        <img
                            className="h-[2.75rem] w-[1.25rem] relative overflow-hidden shrink-0"
                            src={option.web ? "/gift.svg":"/gift-1.svg"}
                        />
                    <div className="h-[2.75rem] w-[1.25rem] relative overflow-hidden shrink-0 hidden" />
                    <div className="flex flex-col items-start justify-start pt-[0.843rem] px-[0rem] pb-[0rem]">
                        <div className={`relative text-[0.875rem] font-text-small-14px-regular text-left inline-block min-w-[6.313rem] ${option.web ? "text-darkorange-200": "text-text-primary-light "}`}>
                        Web Developer
                        </div>
                    </div>
                    </button>}
                    {toggle && <button className={`cursor-pointer py-[0rem] px-[0.687rem] bg-white self-stretch rounded-lg flex flex-row items-start justify-start gap-[0.625rem]  ${option.analyst && "border-[1px] border-solid border-gainsboro-200"}`} onClick = {() => setOption({design: false,web: false,lorem: false,analyst: true})}>
                        <img
                            className="h-[2.75rem] w-[1.25rem] relative overflow-hidden shrink-0"
                            loading="lazy"
                            src={option.analyst ? "/gift.svg":"/gift-1.svg"}
                        />
                    <div className="h-[2.75rem] w-[1.25rem] relative overflow-hidden shrink-0 hidden" />
                    <div className="flex flex-col items-start justify-start pt-[0.843rem] px-[0rem] pb-[0rem]">
                        <div className={`relative text-[0.875rem] font-text-small-14px-regular text-left inline-block min-w-[3.125rem] ${option.analyst ? "text-darkorange-200": "text-text-primary-light "}`}>
                        Analyst
                        </div>
                    </div>
                    </button>}
                    {toggle && <button className={`cursor-pointer py-[0rem] px-[0.687rem] bg-white self-stretch rounded-lg flex flex-row items-start justify-start gap-[0.625rem]  ${option.lorem && "border-[1px] border-solid border-gainsboro-200"}`} onClick = {() => setOption({design: false,web: false,lorem: true,analyst: false})}>
                        <img
                            className="h-[2.75rem] w-[1.25rem] relative overflow-hidden shrink-0"
                            loading="lazy"
                            src={option.lorem ? "/gift.svg":"/gift-1.svg"}
                        />
                    <div className="flex flex-col items-start justify-start pt-[0.843rem] px-[0rem] pb-[0rem]">
                        <div className={`relative text-[0.875rem] font-text-small-14px-regular text-left inline-block min-w-[5.375rem] ${option.lorem ? "text-darkorange-200" : "text-text-primary-light "}`}>
                        Lorem Ipsum
                        </div>
                    </div>
                </button>}
                <div className="self-stretch rounded-lg bg-white flex flex-row items-start justify-start py-[0.625rem] px-[1rem] gap-[0.75rem]">
                <img
                  className="h-[1.25rem] w-[1.25rem] relative min-h-[1.25rem]"
                  loading="lazy"
                  src="/vuesaxlineardollarsquare.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                  <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
                    <div className="relative leading-[0.875rem] inline-block min-w-[7.75rem] whitespace-nowrap font-semibold">
                      <span>{`Plans `}</span>
                      <span className="text-text-primary-light">
                        (Current: Free)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-lg flex flex-row items-start justify-start py-[0.625rem] px-[1rem] gap-[0.75rem]">
                <img
                  className="h-[1.25rem] w-[1.25rem] relative min-h-[1.25rem]"
                  loading="lazy"
                  alt=""
                  src="/vuesaxlinearpeople.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem] font-semibold">
                  <div className="h-[0.875rem] relative leading-[1.2rem] inline-block min-w-[6rem] whitespace-nowrap">
                    Manage Profiles
                  </div>
                </div>
              </div>
            </div>
            <BottomCard />
        </form>
    )
}

export default Sidebar