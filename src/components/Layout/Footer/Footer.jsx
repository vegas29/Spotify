import { Icon, Image, Input } from "semantic-ui-react";
import "./Footer.scss";

export const Footer = () => {

    return (
        <div className="footer">
            <div className="footer__left">             
                <Image src={null} />
                <p>Song name</p>
            </div>

            <div className="footer__center">
                <p>Player</p>
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
