import { useState, useEffect } from "react";

const AboutIntro = () => {
  const [aboutIntroSegment, setAboutIntroSegment] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (scrollPosition > 1.5 * window.innerHeight) {
      if (aboutIntroSegment !== 1) {
        setAboutIntroSegment(1);
      }
    } else {
      if (aboutIntroSegment !== 0) {
        setAboutIntroSegment(0);
      }
    }
  }, [scrollPosition]);

  const handleScroll = () => {
    const position = window.pageYOffset;
    // console.log("Position => ", position);
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(aboutIntroSegment);

  return (
    <div className="h-[200vh] w-full ">
      <div className="sticky top-0 flex h-screen flex-col justify-center  bg-red-100 mobile:px-4 laptop:px-14">
        <div className="mt-[4.25rem] font-anton tracking-wider text-custom-theme-purple mobile:text-[3.625rem] laptop:text-[9.375rem]">
          LAZYNAIRE.
        </div>
        <div className="h-[38%]">
          <div className="font-medium leading-[2.75rem] tracking-wider text-custom-theme-purple mobile:mb-4 laptop:mb-8 laptop:text-[1.313rem] ">
            {" "}
            [ lā-zē-nair ] <span className="font-bold italic">n. informal</span>
          </div>

          <div className="border-8 border-solid border-[#47003C]"></div>

          <div className="mt-5 font-medium tracking-wider  text-custom-theme-purple mobile:text-xs laptop:text-[1.313rem] laptop:leading-[2.75rem]">
            1/ <span className="font-bold italic">adj.</span> often used to
            describe people whose wealth comes from doing little to no effort.
          </div>

          <div className="mt-4 font-medium tracking-wider text-custom-theme-purple mobile:text-xs laptop:text-[1.313rem] laptop:leading-[2.75rem]">
            2/ <span className="font-bold italic">noun.</span> lucky gen xyz who
            gain enormous amount of money just by holding and selling random
            jpegs.
          </div>
        </div>
        <div className="font-semibold tracking-widest mobile:text-xs laptop:mt-[4.25rem] laptop:text-[1.313rem]">
          <div className="absolute">
            <div>1/2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
