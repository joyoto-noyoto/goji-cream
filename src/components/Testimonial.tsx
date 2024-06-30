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
          className="grid grid-cols-[repeat(3,100%)] transition-all duration-200"
          ref={container}
          style={{ transform: `translateX(calc(${activeSlide} * -100%))` }}
        >
          <TestimonialCard
            name="জেনিফার রহমান"
            des="গোজি ক্রিম সুন্দর একটি উপহার - নিয়মিত ব্যবহারের ফলে দুই সপ্তাহে বলিরেখা হ্রাস পেয়েছে, আমার মুখের বৈশিষ্ট্যগুলি আরও সংজ্ঞায়িত হয়েছে এবং আমার ত্বক আরও সুন্দর হয়েছে, ফলাফল পাওয়ার পরে আমি সবাইকে এটি ব্যবহার করার জন্য  পরামর্শ দিচ্ছি ."
            img="/ava1.jpg"
          />
          <TestimonialCard
            name="প্রীতি চৌধুরী"
            des="গোজি ক্রিম একেবারে দারুণ একটি ক্রিম  - মাত্র দুই সপ্তাহের নিয়মিত ব্যবহারে ফলে বলিরেখা স্পষ্টভাবে কমে গেছে, মুখের গঠন আরও স্পষ্ট হয়েছে এবং ত্বক হয়েছে আরও মসৃণ ও টানটান। এমন চমৎকার ফলাফল দেখে আমি সবাইকে এই ক্রিম ব্যবহার করার পরামর্শ দিচ্ছি।"
            img="/ava2.jpg"
          />
          <TestimonialCard
            name="সাবরিনা আলম"
            des="গোজি ক্রিম ব্যবহার করার পরে আমার ত্বক উজ্জ্বল এবং সুন্দর হয়েছ। এই ক্রিম আমার সকল দুশ্চিন্তা দূর করেছে এবং আমাকে আকর্ষণীয় করেছ। আমি সবাই কে এই ক্রিম ব্যবহার করতে পরামর্শ দেই কারণ এটি ব্যাবহারে কোনো ক্ষতি নেই শুধু উপকার।"
            img="/ava3.jpg"
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
      </div>
    </>
  );
}

function TestimonialCard(props: { name: string; des: string; img: string }) {
  return (
    <div className="w-full p-4 sm:p-8 flex flex-col-reverse md:flex-row items-center gap-8 bg-white text-black rounded-3xl">
      <div className="flex-none h-32 aspect-square rounded-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
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
