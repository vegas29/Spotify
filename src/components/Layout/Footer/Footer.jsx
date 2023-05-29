import { Icon, Image, Input } from "semantic-ui-react";
import { Player } from "../../Player";
import { usePlayer } from "../../../hooks";
import "./Footer.scss";

export const Footer = () => {

    const { song, miniature } = usePlayer();
    
    return (
        <div className="footer">
            <div className="footer__left">             
                {miniature && <Image src={miniature} />}
                {song && <p>{song.name}</p>}
            </div>

            <div className="footer__center">
                <Player/>
            </div>

            <div className="footer__right">
                <Input 
                    label={<Icon name="volume up" />}
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                />
            </div>

        </div>
    )
}
