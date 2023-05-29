import { Icon, Image, Input } from "semantic-ui-react";
import { Player } from "../../Player";
import { usePlayer } from "../../../hooks";
import { noImage } from "../../../assets";
import "./Footer.scss";

export const Footer = () => {

    const { song, miniature, volume, setVolume } = usePlayer();

    console.log({miniature})
    
    return (
        <div className="footer">
            <div className="footer__left">             
                {miniature ? (
                    <Image className="footer__left-image" src={miniature} />
                ) : (
                    <Image className="footer__left-image" src={noImage} />
                )}
                {song ? (
                    <p>{song.name}</p>
                ) : (
                    <p>No song</p>
                )}
            </div>

            <div className="footer__center">
                <Player/>
            </div>

            <div className="footer__right">
                <Input 
                    className="slider-input"
                    label={<Icon name="volume up" />}
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={(_, data) => setVolume(Number(data.value))}
                />
            </div>

        </div>
    )
}
