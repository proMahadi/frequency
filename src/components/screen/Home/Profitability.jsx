import Image from "next/image"
import stats from "@/assets/profitabilityImages/stats.svg"


const Profitability = () => {
    const description = `Our trading system proves to be profitable. Simulations show an average profit of 25% per year. Our historical track record remains at 16% since 2023.`
  return (
    <section>
        <div className='container px-3 lg:px-0'>
            <div className="mb-7">
                <h2 className="section-title">OUR PROFITABILITY</h2>
            </div>
            <div className='flex items-center flex-wrap-reverse sm:flex-nowrap gap-x-6 gap-y-7'>
                <div className="sm:w-[52%]">
                    <Image src={stats} alt="stats"/>
                    <p className="text-white text-xs ml-1.5 capitalize">since 2023</p>
                </div>
                <div className="sm:w-[43%]">
                    <p className="common-paragraph">{description}</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Profitability