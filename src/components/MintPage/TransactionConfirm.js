import { useEffect, useState } from "react";

const TransactionConfirm = ({ confirmingTransac, setConfirmingTransac }) => {
    const [heading, setHeading] = useState();
    const [subtext, setSubtext] = useState();
    console.log("confirmingTransac => ", confirmingTransac);

    useEffect(() => {
        console.log("usefff confirmingTransac => ", confirmingTransac);
        if (confirmingTransac === 1) {
            setHeading(
                <>
                    Confirming <br /> your wallet
                </>
            );
            setSubtext(
                <>
                    Please confirm the transaction to get your <br /> Ladynaire!
                </>
            );
        } else if (confirmingTransac === 2) {
            setHeading(<>Minting...</>);
            setSubtext(
                <>
                    <>Please hold on</>
                </>
            );
        } else if (confirmingTransac === 3) {
            setHeading(
                <>
                    Mint was <br /> successful !
                </>
            );
            setSubtext(
                <>
                    <>Welcome to Lazynaire club</>
                </>
            );
        } else if (confirmingTransac === 4) {
            setHeading(
                <>
                    Transaction <br /> failed
                </>
            );
            setSubtext(
                <>
                    <>Returning back...</>
                </>
            );
        }

        if (confirmingTransac === 4) {
            let time1 = setTimeout(() => {
                setConfirmingTransac(0);
            }, 5000);
            return () => {
                clearInterval(time1.current);
            };
        }
    }, [confirmingTransac, setConfirmingTransac]);

    return (
        <div className="absolute top-0  flex  h-full w-full items-center justify-center">
            <div className="flex h-3/5 w-3/5 flex-col items-center justify-center rounded-2xl bg-white">
                <div className="mt-10 text-center font-neueHaas text-6xl font-semibold leading-[60px] text-custom-theme-purple">
                    {heading}
                </div>
                <div className="mt-10 text-center font-neueHaas text-2xl font-semibold leading-[25px] text-custom-theme-purple">
                    {subtext}
                </div>
            </div>
        </div>
    );
};

export default TransactionConfirm;
