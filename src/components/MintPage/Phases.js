const Phase = ({ roman, phrase }) => {
    return (
        <div
            key={`Key_${roman}`}
            className="flex h-full w-[250px] flex-col items-center justify-center  text-center font-neueHaas text-4xl font-semibold leading-10 text-white"
        >
            {roman !== undefined && (
                <>
                    <p>Phase {roman}</p>
                    <span className="text-xl">{phrase}</span>
                </>
            )}
        </div>
    );
};

const Phases = () => {
    const phaseIndex = 1;
    const phasesRomanIndex = ["PRE", "I", "II", "III", "IV", "Public"];
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
            roman: undefined,
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

    if (phaseIndex >= 2) {
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

    return (
        <div className="mb-8 flex h-[80px] w-full flex-row justify-center ">
            {threePhases.map((item) => (
                <Phase roman={item.roman} phrase={item.phrase} />
            ))}
        </div>
    );
};

export default Phases;
