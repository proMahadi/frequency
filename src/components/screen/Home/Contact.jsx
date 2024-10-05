import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="container lg:pb-20 pb-10 px-3 lg:px-0">
        <h2 className="section-title mb-[18px] mx-auto text-center">lets talk!</h2>
        <form className="flex flex-col gap-y-4 items-center ">
          <div className="sm:w-[610px] w-full">
            <label htmlFor="name" className="text-white font-bold md:text-[22px] text-base ">Name</label>
            <input type="text" className="w-full h-14 border-light border bg-transparent rounded-[10px]" />
          </div>
          <div className="sm:w-[610px] w-full">
            <label htmlFor="email" className="text-white font-bold md:text-[22px] text-base ">Email</label>
            <input type="email" className="w-full h-14 border-light border bg-transparent rounded-[10px]" />
          </div>
          <div className="sm:w-[610px] w-full">
            <label htmlFor="text" className="text-white font-bold md:text-[22px] text-base ">Tell us about you</label>
            <input type="text" className="w-full h-14 border-light border bg-transparent rounded-[10px]" />
          </div>
          <div className="sm:w-[610px] w-full">
            <button className="btnbg text-white w-full py-3.5 rounded-[10px]">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
