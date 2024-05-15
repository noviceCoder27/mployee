const BottomCard = () => {
    return (
        <div className="absolute bottom-[2rem] self-stretch flex flex-col items-start justify-start gap-[0.625rem] text-lightslategray">
        <div className="flex flex-row items-start justify-start py-[0rem] px-[1rem]">
          <div className="relative leading-[1.125rem] inline-block min-w-[6.313rem]">{`Help & Support`}</div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-[0.938rem] text-text-primary font-text-small-14px-regular">
          <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.5rem] text-[0.875rem] text-black font-noto-sans">
            <div className="self-stretch rounded-xl flex flex-row items-start justify-start py-[0.75rem] px-[1rem] gap-[0.625rem]">
              <img
                className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 min-h-[1.25rem]"
                loading="lazy"
                alt=""
                src="/settings.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem] font-semibold">
                <div className="h-[0.875rem] relative leading-[1.2rem] inline-block min-w-[3.063rem] cursor-pointer">
                  Settings
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-xl flex flex-row items-start justify-start py-[0.75rem] px-[1rem] gap-[0.625rem] z-[1] font-semibold">
              <img
                className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 min-h-[1.25rem]"
                loading="lazy"
                alt=""
                src="/20px--help-question.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                <div className="h-[0.875rem] relative leading-[1.2rem] inline-block min-w-[4.5rem] whitespace-nowrap cursor-pointer">
                  Help Center
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[2.375rem] rounded-lg bg-silver box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-[0.562rem] px-[0.75rem] gap-[2.312rem] border-[1px] border-solid border-lightgray-200">
            <div className="relative leading-[1.25rem] font-medium whitespace-pre-wrap shrink-0 [debug_commit:1de1738]">
              Current Plan: Free
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[0.75rem] shrink-0 [debug_commit:1de1738]">
              <div className="h-[3rem] w-[3rem] relative">
                <div className="absolute top-[0rem] left-[0rem] shadow-[0px_6px_29px_rgba(89,_108,_148,_0.07),_0px_0.8px_3.63px_rgba(89,_108,_148,_0.04)] rounded-[50%] bg-darkorange-200 w-full h-full" />
                <img
                  className="absolute top-[0.625rem] left-[0.625rem] w-[1.75rem] h-[1.75rem] overflow-hidden z-[1]"
                  alt=""
                  src="/pro.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[0.25rem] pb-[0rem] pr-[0.312rem] pl-[0rem]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.125rem]">
                  <div className="self-stretch h-[1.25rem] relative leading-[1.25rem] font-medium inline-block">
                    Upgrade to Pro
                  </div>
                  <div className="self-stretch h-[1.125rem] relative text-[0.875rem] leading-[1.125rem] text-darkgray inline-block">
                    Get all features
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[1rem] px-[0rem] pb-[0rem]">
                <div className="flex flex-row items-start justify-start gap-[0.293rem]">
                  <img
                    className="h-[1rem] w-[1rem] relative object-contain"
                    alt=""
                    src="/icons-16px--arrowdown@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start pt-[0.262rem] px-[0rem] pb-[0rem]">
                    <img
                      className="w-[0.238rem] h-[0.45rem] relative object-contain"
                      alt=""
                      src="/shape.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-darkorange-400 overflow-hidden flex flex-row items-start justify-start py-[1rem] px-[0.75rem] gap-[0.75rem] border-[1px] border-solid border-orange">
            <div className="h-[3rem] w-[3rem] relative">
              <div className="absolute top-[0rem] left-[0rem] shadow-[0px_6px_29px_rgba(89,_108,_148,_0.07),_0px_0.8px_3.63px_rgba(89,_108,_148,_0.04)] rounded-[50%] bg-darkorange-200 w-full h-full" />
              <img
                className="absolute top-[0.625rem] left-[0.625rem] w-[1.75rem] h-[1.75rem] overflow-hidden z-[1]"
                loading="lazy"
                alt=""
                src="/pro.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-[0.25rem] pb-[0rem] pr-[0.312rem] pl-[0rem]">
              <div className="flex flex-col items-start justify-start gap-[0.125rem]">
                <div className="relative leading-[1.25rem] font-medium inline-block min-w-[6.813rem]">
                  Upgrade to Pro
                </div>
                <div className="relative text-[0.875rem] leading-[1.125rem] text-darkgray inline-block min-w-[6.813rem]">
                  Get all features
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[1rem] px-[0rem] pb-[0rem]">
              <div className="flex flex-row items-start justify-start gap-[0.293rem]">
                <img
                  className="h-[1rem] w-[1rem] relative object-contain"
                  loading="lazy"
                  alt=""
                  src="/icons-16px--arrowdown@2x.png"
                />
                <div className="flex flex-col items-start justify-start pt-[0.262rem] px-[0rem] pb-[0rem]">
                  <img
                    className="w-[0.238rem] h-[0.45rem] relative object-contain"
                    alt=""
                    src="/shape.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default BottomCard