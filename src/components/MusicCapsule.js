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
        bgAudioMusic.src = songsList[songProperties.songIndex].songPath;
        setReload();
    }, [songProperties, bgAudioMusic]);

    const handlePlayPauseButton = () => {
        let songPropertiesUpdated = {
            ...songProperties,
            playStatus: !songProperties.playStatus,
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

    console.log(bgAudioMusic.src);

    if (!songProperties.playStatus) {
        bgAudioMusic.pause();
        console.log("pause ", bgAudioMusic.src);
    } else {
        bgAudioMusic.play();
        console.log("play ", bgAudioMusic.src);
    }

    return (
        <div className="absolute right-[2%] h-[140%]  w-[65px] items-center justify-center rounded-full bg-music-capsule-white transition-width duration-700  hover:w-[35%] mobile:hidden tablet:hidden laptop:flex">
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
                            <button onClick={handlePlayPauseButton}>
                                {!songProperties.playStatus && (
                                    <BsFillPlayFill size={35} />
                                )}
                                {songProperties.playStatus && (
                                    <BsFillPauseFill size={35} />
                                )}
                            </button>
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
