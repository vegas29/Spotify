import { useState } from "react";
import ReactPlayer from "react-player";
import { usePlayer } from "../../hooks";
import { Icon, Progress } from "semantic-ui-react";
import "./Player.scss";

export const Player = () => {

    const { song, playing, pause, resume, volume } = usePlayer();
    const [totalSeconds, setTotalSeconds] = useState(0);
    const [currentSeconds, setCurrentSeconds] = useState(0);


    const onProgress = (data) => {
        setTotalSeconds(data.loadedSeconds);
        setCurrentSeconds(data.playedSeconds);
    }

    return (
        <div className="player">
            <Icon
                name={playing ? "pause circle outline" : "play circle outline"}
                onClick={playing ? pause : resume}
            />

            <Progress
                progress="value"
                total={totalSeconds}
                value={currentSeconds}
                size="tiny"
                color="green"
            />

            <ReactPlayer 
                url={song?.file} 
                playing={playing} 
                height={0} 
                width={0} 
                volume={volume}
                onProgress={onProgress}
            />
        </div>
    )
}
