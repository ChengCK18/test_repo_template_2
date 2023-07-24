import Countdown from "./Countdown";
const Phases = ({ setConfirmingTransac, phaseIndex, timeEndInUnix }) => {
    const phasesRomanIndex = ["PRE", "I", "II", "III"];
    const phrases = ["ended", "ends in", "starts in"];
    let threePhases = [];

    if (phaseIndex >= phasesRomanIndex.length) {
        return <div></div>;
    }

    if (phaseIndex === 0) {
        threePhases.push({
            roman: phasesRomanIndex[1],
            phrase: phrases[2],
        });
    }

    if (phaseIndex === 1) {
        threePhases.push({
            roman: 999,
            phrase: undefined,
        });
        threePhases.push({
            roman: phasesRomanIndex[1],
            phrase: phrases[1],
        });
        threePhases.push({
            roman: phasesRomanIndex[2],
            phrase: phrases[2],
        });
    }

    if (phaseIndex === 2) {
        threePhases.push({
            roman: phasesRomanIndex[phaseIndex - 1],
            phrase: phrases[0],
        });

        threePhases.push({
            roman: phasesRomanIndex[phaseIndex],
            phrase: phrases[1],
        });

        threePhases.push({
            roman: phasesRomanIndex[phaseIndex + 1],
            phrase: phrases[2],
        });
    }

    if (phaseIndex === 3) {
        threePhases.push({
            roman: phasesRomanIndex[phaseIndex - 1],
            phrase: phrases[0],
        });

        threePhases.push({
            roman: phasesRomanIndex[phaseIndex],
            phrase: phrases[1],
        });

        threePhases.push({
            roman: 999,
            phrase: undefined,
        });
    }

    return (
        <>
            <div className=" mb-8 flex h-[80px] w-full flex-row justify-center ">
                {threePhases.map((item) => (
                    <Phase
                        key={`roman_${item.roman}`}
                        roman={item.roman}
                        phrase={item.phrase}
                        phaseIndex={phaseIndex}
                    />
                ))}
            </div>
            <Countdown
                timeEndInUnix={timeEndInUnix}
                setConfirmingTransac={setConfirmingTransac}
                phaseIndex={phaseIndex}
            />
        </>
    );
};

export default Phases;

const Phase = ({ roman, phrase, phaseIndex }) => {
    return (
        <div
            key={`Key_${roman}`}
            className={`flex h-full w-[250px] flex-col items-center justify-center  text-center font-neueHaas text-4xl font-semibold leading-10 text-white ${
                (phrase === "starts in" || phrase === "ended") &&
                phaseIndex !== 0
                    ? "opacity-50"
                    : ""
            }`}
        >
            {roman !== 999 && (
                <>
                    <p>Phase {roman}</p>
                    <span className="text-xl">{phrase}</span>
                </>
            )}
        </div>
    );
};
