import { useState, useEffect } from "react";

const Countdown = ({ timeEndInUnix }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(timeEndInUnix));

    useEffect(() => {
        setTimeout(() => {
            const timeLeftObj = calculateTimeLeft(timeEndInUnix);
            if (timeLeftObj !== -1) {
                setTimeLeft(timeLeftObj);
            } else {
                //Countdown complete, what to do next
            }
        }, 1000);
    });

    return (
        <div>
            <div className="flex flex-row items-center justify-center font-neueHaas  text-[21px] font-semibold text-white">
                <div className="mx-2 flex h-[75px] w-[75px] items-center justify-center rounded-xl border-2 border-white text-center tracking-wider">
                    {timeLeft.days}
                    <br />
                    Days
                </div>
                <div className="mx-2 flex h-[75px] w-[75px] items-center justify-center rounded-xl border-2 border-white text-center tracking-wider">
                    {timeLeft.hours}
                    <br />
                    Hrs
                </div>
                <div className="mx-2 flex h-[75px] w-[75px] items-center justify-center rounded-xl border-2 border-white text-center tracking-wider">
                    {timeLeft.minutes}
                    <br />
                    Mins
                </div>
                <div className="mx-2 flex h-[75px] w-[75px] items-center justify-center rounded-xl border-2 border-white text-center tracking-wider">
                    {timeLeft.seconds}
                    <br />
                    Secs
                </div>
            </div>
            <div className="pt-2 text-center font-neueHaas text-[12px] font-semibold tracking-wider text-white">
                Next Phase starts right after current Phase ends
            </div>
        </div>
    );
};

const calculateTimeLeft = (datetime) => {
    const difference = +new Date(1687741289 * 1000) - +new Date();

    let timeLeft = {};

    timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };

    if (difference < 0) {
        return -1;
    }
    return timeLeft;
};

export default Countdown;
