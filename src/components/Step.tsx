export default function Step() {
  return (
    <section className="bg-gradient-to-b from-sky-50 to-sky-300">
      {/* Header */}
      <div className="relative px-8 py-12 text-left">
        <h2 className="mb-6 px-4 sm:text-2xl md:text-4xl text-right text-sky-700">
          {/* <span className="text-blue-700">গোজি ক্রিম</span> নিখুঁত সমাধান গোজি */}
          ক্রিম দেয় নিখুঁত সমাধান
        </h2>
        <div className="h-16">
          <p className="md:w-full md:absolute md:-left-[10%] md:text-right px-2 sm:px-28 h-16 flex items-center justify-center md:justify-end text-xs sm:text-sm md:text-2xl bg-pink-500 text-white rounded-full">
            ত্বককে পুনরুজ্জীবিত করতে
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-stretch  gap-8">
        {/* Left */}
        <div className="lg:w-1/2 p-8">
          <h3 className="mb-8 font-bold sm:text-2xl md:text-3xl text-center md:text-left">
            {/* 3 ধাপে আপনার ত্বকের সতেজতা{" "}
            <span className="text-pink-700">পুনরুদ্ধার</span> */}
            3 ধাপে আপনার ত্বকের সতেজতা পুনরুদ্ধার
          </h3>
          <div className="py-4 flex flex-col gap-8">
            <StepCard
              name="প্রথম ধাপ:"
              des="আপনার ত্বক গভীরভাবে পরিষ্কার করে নিতে হবে।"
              img="/steps_img1.jpg"
            />
            <StepCard
              name="দ্বিতীয় ধাপ:"
              des="সম্পূর্ণ ত্বকে গোজি ক্রিম লাগিয় দিন এবং ত্বকে সম্পূর্ণ মিশা না পর্যন্ত সাবধানে ম্যাসাজ করুন।"
              img="/steps_img1.jpg"
            />
            <StepCard
              name="তৃতীয় ধাপ:"
              des="এই পদক্ষেপগুলি অনুসরন করলে ৩ সপ্তাহ পরে আশ্চর্যজনক ফলাফল পাবেন এবং ভালো ফলাফল পাওয়ার জন্য পুনরায় ব্যবহার করুন।"
              img="/steps_img1.jpg"
            />
          </div>
        </div>

        {/* Right */}
        <div className="lg:w-1/2 flex-grow flex flex-col justify-between">
          <h3 className="mx-8 lg:mx-0 mb-8 lg:mb-0 px-8 py-4 text-center font-semibold text-sm md:text-2xl bg-white rounded-3xl lg:rounded-none lg:rounded-tl-3xl lg:rounded-bl-3xl">
            {/* <span className="text-blue-700">গোজি ক্রিম </span> নিরাপদ এবং ব্যবহার করা সহজ  */}
            গোজি ক্রিম ব্যবহার করা সহজ এবং নিরাপদ
          </h3>
          {/* img */}
          <div className="w-full h-full flex items-end justify-center lg:justify-end">
            <img
              className="w-10/12 h-10/12 object-cover"
              src="/pic.png"
              alt="step-model"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard(props: { name: string; des: string; img: string }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 md:gap-8">
      <div className="flex-none h-24 md:h-32 aspect-square border-2 border-pink-500 rounded-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={props.img}
          alt={props.name}
        />
      </div>
      <div className="w-full flex flex-col text-center md:text-left gap-2">
        <h3 className="md:mb-4 font-bold md:text-2xl text-pink-700">
          {props.name}
        </h3>
        <p className="mx-auto md:mx-0 max-w-[22rem] text-sm md:text-base text-red-700">
          {props.des}
        </p>
      </div>
    </div>
  );
}
