import { useState, useEffect } from "react";

const Countdown = ({ timeEndInUnix, setConfirmingTransac, phaseIndex }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(timeEndInUnix));

    useEffect(() => {
        setTimeout(() => {
            const timeLeftObj = calculateTimeLeft(timeEndInUnix);

            setTimeLeft(timeLeftObj);

            if (
                timeLeftObj.days === 0 &&
                timeLeftObj.hours === 0 &&
                timeLeftObj.minutes === 0 &&
                timeLeftObj.seconds === 0 &&
                phaseIndex !== 3
            ) {
                window.location.reload();
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
    const difference = +new Date(datetime * 1000) - +new Date();

    if (difference < 0) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }

    let timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };

    return timeLeft;
};

export default Countdown;
