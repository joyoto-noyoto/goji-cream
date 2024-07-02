"use client";
import { useRef, useState } from "react";

export default function Testimonial() {
  return (
    <section
      className="bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="holder p-8">
        {/* Heading */}
        <div className="mb-8 max-w-md mx-auto text-center">
          <p className="h-16 flex items-center justify-center md:text-2xl bg-pink-500 text-white rounded-full">
            কাস্টমার রিভিউ
          </p>
        </div>

        {/* Content */}
        <div className="w-full">
          <Slider />
        </div>
      </div>
    </section>
  );
}

function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slider = useRef({} as HTMLDivElement);
  const container = useRef({} as HTMLDivElement);

  const handleClick = (index: number) => () => {
    setActiveSlide(index);
  };

  return (
    <>
      <div
        className="mb-8 w-full mx-auto bg-white rounded-3xl scroll-y-hidden border-2 border-gray-200"
        ref={slider}
      >
        {/* Slider Container */}
        <div
          className="grid grid-cols-[repeat(5,100%)] transition-all duration-200"
          ref={container}
          style={{ transform: `translateX(calc(${activeSlide} * -100%))` }}
        >
          <TestimonialCard
            name="সাবরিনা আলম"
            des="গোজি ক্রিম ব্যবহারে দুই সপ্তাহেই আমার ত্বক টানটান হয়েছে এবং বলিরেখা কমে গেছে। মুখের গঠনও স্পষ্ট হয়েছে। অসাধারণ ফলাফল!"
            img="/review-1.png"
          />
          <TestimonialCard
            name="এলিনা খান"
            des="প্রতিদিন গোজি ক্রিম ব্যবহারে ত্বকের বলিরেখা দুই সপ্তাহেই কমেছে। ত্বক মসৃণ ও মুখের গঠন সুন্দরভাবে প্রকাশ পাচ্ছে।"
            img="/review-2.png"
          />
          <TestimonialCard
            name="আফসানা শারমিন"
            des="গোজি ক্রিম দুই সপ্তাহেই আমার ত্বকের বলিরেখা কমিয়ে ত্বক টানটান ও মসৃণ করেছে। ফলাফল দেখে আমি সন্তুষ্ট।"
            img="/review-3.png"
          />
          <TestimonialCard
            name="তন্দ্রা তালুকদার"
            des="গোজি ক্রিম দুই সপ্তাহের ব্যবহারে ত্বকের বলিরেখা কমিয়ে টানটান ও মসৃণ করেছে। অসাধারণ পণ্য!"
            img="/review-4.png"
          />
          <TestimonialCard
            name="রুবি হাসান"
            des="গোজি ক্রিম ব্যবহারের দুই সপ্তাহের মধ্যে ত্বকের বলিরেখা কমে মুখের গঠন স্পষ্ট হয়েছে। আমি খুবই খুশি।"
            img="/review-5.png"
          />
        </div>
      </div>

      {/* Controller */}
      <div className="mx-auto w-fit p-2 flex items-center gap-4 bg-white rounded-3xl border-2 border-gray-200">
        <button
          className={`h-6 aspect-square ${
            activeSlide === 0 ? "bg-blue-700" : "bg-white hover:bg-blue-500"
          } border border-sky-500 rounded-full`}
          onClick={handleClick(0)}
        ></button>
        <button
          className={`h-6 aspect-square ${
            activeSlide === 1 ? "bg-blue-700" : "bg-white hover:bg-blue-500"
          } border border-sky-500 rounded-full`}
          onClick={handleClick(1)}
        ></button>
        <button
          className={`h-6 aspect-square ${
            activeSlide === 2 ? "bg-blue-700" : "bg-white hover:bg-blue-500"
          } border border-sky-500 rounded-full`}
          onClick={handleClick(2)}
        ></button>
        <button
          className={`h-6 aspect-square ${
            activeSlide === 3 ? "bg-blue-700" : "bg-white hover:bg-blue-500"
          } border border-sky-500 rounded-full`}
          onClick={handleClick(3)}
        ></button>
        <button
          className={`h-6 aspect-square ${
            activeSlide === 4 ? "bg-blue-700" : "bg-white hover:bg-blue-500"
          } border border-sky-500 rounded-full`}
          onClick={handleClick(4)}
        ></button>
      </div>
    </>
  );
}

function TestimonialCard(props: { name: string; des: string; img: string }) {
  return (
    <div className="w-full p-4 sm:p-8 flex flex-col-reverse md:flex-row items-center gap-8 bg-white text-black rounded-3xl">
      <div className="flex-none h-32 aspect-square rounded-full overflow-hidden">
        <img
          className="w-full h-full object-scale-down"
          src={props.img}
          alt={props.name}
        />
      </div>
      <div className="flex-grow flex flex-col items-center md:items-start gap-4 text-center md:text-left">
        <h3 className="font-bold sm:text-xl">{props.name}</h3>
        <p className="text-xs sm:text-sm text-red-700">{props.des}</p>
      </div>
    </div>
  );
}
