import { useEffect, useState } from "react";
import {
    BsFillPlayFill,
    BsFillPauseFill,
    BsFillSkipEndFill,
    BsFillSkipStartFill,
} from "react-icons/bs";

import { CgLoadbarSound } from "react-icons/cg";

const songsList = [
    {
        songTitle: "Let's Do It (Let's Fall In Love)",
        songArtist: "Ella Fitzgerald",
        songPath: "songs/track1.mp3",
    },
    {
        songTitle: "Cheek To Cheek",
        songArtist: "Ella Fitzgerald & Louis Armstrong",
        songPath: "songs/track2.mp3",
    },
    {
        songTitle: "In a sentimental mood",
        songArtist: "Ella Fitzgerald",
        songPath: "songs/track3.mp3",
    },
];

const MusicCapsule = ({ bgAudioMusic }) => {
    const [, setReload] = useState();

    const [songProperties, setSongProperties] = useState({
        songIndex: 2,
        playStatus: false,
    });

    useEffect(() => {
        let strBgPath = bgAudioMusic.src.split("/");
        let parsedStrPath = strBgPath.at(-2) + "/" + strBgPath.at(-1);

        if (parsedStrPath !== songsList[songProperties.songIndex].songPath) {
            bgAudioMusic.src = songsList[songProperties.songIndex].songPath;
        }

        if (!songProperties.playStatus) {
            bgAudioMusic.pause();
        } else {
            bgAudioMusic.play();
        }

        setReload();
    }, [songProperties, bgAudioMusic]);

    const handlePlayButton = () => {
        let songPropertiesUpdated = {
            ...songProperties,
            playStatus: true,
        };
        setSongProperties(songPropertiesUpdated);
    };

    const handlePauseButton = () => {
        let songPropertiesUpdated = {
            ...songProperties,
            playStatus: false,
        };
        setSongProperties(songPropertiesUpdated);
    };

    const handleSkipStartButton = () => {
        let updatedSongIndex = songProperties.songIndex - 1;
        if (updatedSongIndex === -1) {
            updatedSongIndex = 2;
        }

        setSongProperties({ ...songProperties, songIndex: updatedSongIndex });
    };

    const handleSkipEndButton = () => {
        let updatedSongIndex = songProperties.songIndex + 1;
        if (updatedSongIndex === 3) {
            updatedSongIndex = 0;
        }

        setSongProperties({ ...songProperties, songIndex: updatedSongIndex });
    };

    return (
        <div className="absolute right-[2%] h-16  w-[65px] items-center justify-center rounded-full bg-music-capsule-white transition-width duration-700  hover:w-[35%] mobile:hidden tablet:hidden laptop:flex">
            <div className="group flex h-full w-full justify-end overflow-clip">
                <div className=" hidden grow flex-row rounded-full  py-1  pl-4  group-hover:flex">
                    <div className="ml-3 w-3/5">
                        <span className="font-neueHaas text-[1.1vw] font-bold">
                            {songsList[songProperties.songIndex].songTitle}
                        </span>
                        <br />
                        <span className="font-neueHaas  text-[1vw]">
                            {songsList[songProperties.songIndex].songArtist}
                        </span>
                    </div>
                    <div className="flex w-2/5">
                        <div className="flex h-full w-1/3 items-center justify-center ">
                            <button onClick={handleSkipStartButton}>
                                <BsFillSkipStartFill size={35} />
                            </button>
                        </div>
                        <div className="flex h-full w-1/3 items-center justify-center ">
                            {!songProperties.playStatus && (
                                <button onClick={handlePlayButton}>
                                    <BsFillPlayFill size={35} />
                                </button>
                            )}
                            {songProperties.playStatus && (
                                <button onClick={handlePauseButton}>
                                    <BsFillPauseFill size={35} />
                                </button>
                            )}
                        </div>
                        <div className="flex h-full w-1/3 items-center justify-center">
                            <button onClick={handleSkipEndButton}>
                                <BsFillSkipEndFill size={35} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex grow-0 items-center justify-center p-1 ">
                    <CgLoadbarSound size={54} color={"black"} />
                </div>
            </div>
        </div>
    );
};

export default MusicCapsule;
