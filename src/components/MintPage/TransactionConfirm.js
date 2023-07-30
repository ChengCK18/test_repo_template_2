import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TwitterShareButton } from "react-share";
const TransactionConfirm = ({
    confirmingTransac,
    setConfirmingTransac,
    mintedOut,
}) => {
    const [heading, setHeading] = useState();
    const [subtext, setSubtext] = useState();

    useEffect(() => {
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
                <div className="flex w-1/2 flex-col items-center justify-center space-y-16 ">
                    <div>Welcome to Lazynaire club</div>
                    <div className="flex w-full flex-row space-x-16">
                        <Link
                            to="/"
                            onClick={() => {
                                setConfirmingTransac(0);
                            }}
                            className="flex-1 rounded-full border-2 border-custom-theme-purple bg-white p-3 text-custom-theme-purple"
                        >
                            Home
                        </Link>
                        <TwitterShareButton
                            url={
                                "https://twitter.com/lazynaire_club/status/1684929199222444032?s=20 \n\n"
                            }
                            title={
                                "Just got my Ladynaire from @lazynaire_club! Let's grow rich together. 🦩\n"
                            }
                            hashtags={["lazynaireclub", "NFTs", "NFTcommunity"]}
                            className="flex-1"
                        >
                            <div className="rounded-full border-2 bg-custom-theme-purple p-3 text-white">
                                Share Tweet
                            </div>
                        </TwitterShareButton>
                    </div>
                </div>
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
            }, 6000);
            return () => {
                clearInterval(time1.current);
            };
        }

        if (mintedOut) {
            setHeading("Ladynaires are fully taken!");
            setSubtext(
                <>
                    Thank you for your participation. <br />
                    Check out our collection from our secondary market
                    <br />
                    <a
                        className="underline"
                        href={"https://linktr.ee/lazynaire"}
                    >
                        linktree/lazynaire
                    </a>
                </>
            );
        }
    }, [confirmingTransac, setConfirmingTransac, mintedOut]);

    return (
        <div className="absolute top-0  flex  h-full w-full items-center justify-center">
            <div className="flex h-3/5 w-3/5 flex-col items-center justify-center rounded-2xl bg-white">
                <div className="mt-auto w-full text-center font-neueHaas text-6xl font-semibold leading-[60px] text-custom-theme-purple">
                    {heading}
                </div>
                <div className="mt-10 flex w-full flex-col items-center justify-center text-center font-neueHaas text-2xl font-semibold leading-[25px] text-custom-theme-purple">
                    {subtext}
                </div>
                <div
                    className={`mt-auto mb-3 flex w-full items-center justify-center text-center font-neueHaas text-lg font-semibold leading-[25px] text-gray-500 ${
                        confirmingTransac === 4 ? "" : "invisible"
                    }`}
                >
                    Please ensure you have sufficient balance in your wallet and
                    the right account connected.
                </div>
            </div>
        </div>
    );
};

export default TransactionConfirm;
