import "./ArtistBanner.scss";

export function ArtistBanner({ image, name }) {

    return (
        <div className="artist-banner">
            <div
                className="artist-banner__image"
                style={{ backgroundImage: `url(${image})` }}
            >
                <span>Artist</span>
                <h1>{name}</h1>
            </div>

            <div className="artist-banner__gradient" />
        </div>
    );
}