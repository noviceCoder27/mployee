import Footer from "./Footer"
import JobPost from "./JobPost"


const JobListings = () => {
  return (
    <section className="w-full bg-whitesmoke-100 overflow-y-auto flex items-start justify-start pt-[2rem] px-[1.5rem] pb-[1.812rem] box-content max-w-[calc(100%_-_289px)] text-left text-[1.125rem] text-black font-noto-sans lg:pt-[1.313rem] lg:pb-[1.25rem] lg:max-w-[calc(100%_-_27px)] mq450:h-auto" style = {{borderTop: "2px solid #E8E7EC",borderLeft: "2px solid #E8E7EC"}}>
        <div className=" overflow-x-hidden flex-1 rounded-xl  bg-white box-border overflow-y-auto flex flex-col items-start justify-start pt-[1.5rem] px-[1.187rem] gap-[0.812rem] max-w-full border-[1px] border-solid border-gainsboro-300 lg:box-border mq450:h-auto  mq450:box-border mq1500:pt-[1.313rem] mq1500:box-border">
            <div className="relative inline-block min-w-[4.688rem] shrink-0 [debug_commit:1de1738]">
                Jobs (44)
            </div>
            <div className="self-stretch flex flex-col items-start justify-start relative gap-[1rem] min-h-[66.188rem] shrink-0 [debug_commit:1de1738] max-w-full text-[0.875rem]">
                <JobPost imgUrl = "/group-1216258220.svg" />
                <JobPost imgUrl = "/group-1216258220-(1).svg" />
                <JobPost imgUrl = "/group-1216258220-(1).svg" />
                <JobPost imgUrl = "/group-1216258220-(1).svg" />
                <div className="w-full absolute bottom-[0] shadow-[0px_-2px_72.9px_-10px_rgba(0,_0,_0,_0.08)] bg-white box-border overflow-hidden flex flex-row items-start justify-between pt-[0.625rem] px-[1.25rem] pb-[0.75rem] gap-[1.25rem] z-[1] text-[0.75rem] text-darkgray border-t-[1px] border-solid border-gainsboro-300">    
                    <Footer />
                </div>
            </div>
        </div>
    </section>
  )
}

export default JobListings
