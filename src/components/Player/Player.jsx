import { Icon, Progress } from "semantic-ui-react";
import "./Player.scss";

export const Player = () => {

    const playing = false;

    return (
        <div className="player">
            <Icon
                name={playing ? "pause circle outline" : "play circle outline"}
            />

            <Progress
                progress="value"
                total={100}
                value={30}
                size="tiny"
            />
        </div>
    )
}
