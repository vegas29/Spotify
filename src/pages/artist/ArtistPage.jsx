import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Song } from "../../api/song";
import { map } from "lodash";
import { Album, Artist } from "../../api";
import { Slider } from "../../components/Slider";
import { ArtistBanner } from "../../components/Artist/ArtistBanner";
import './ArtistPage.scss';

export const ArtistPage = () => {

    const { id } = useParams();
    const [artist, setArtist] = useState(null);
    const [albums, setAlbums] = useState(null);
    const [songs, setSongs] = useState(null);

    const artists = new Artist();
    const { getArtist } = artists;

    
    const album = new Album();
    const { getAlbumsByArtist } = album;

    const song = new Song();
    const { obtainAllByAlbum } = song;

    useEffect(() => {
        (async () => {
            try {
                const response = await getArtist(id);
                setArtist(response);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [id]);

    useEffect(() => {
        (async () => {
            try {
                const response = await getAlbumsByArtist(id);
                setAlbums(response);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [id]);

    useEffect(() => {
        if (albums) {
            (async () => {
                try {
                    let data = [];
                    for await (const item of albums) {
                        const result = await obtainAllByAlbum(item.id);
                        const dataTemp = map(result, (dataSong) => ({
                            ...dataSong,
                            image: item.image,
                        }));
                        data.push(...dataTemp);
                    }
                    setSongs(data);
                } catch (error) {
                    console.error(error);
                }
            })();
        }
    }, [albums]);

    return (
        <div className="artist-page">
            <ArtistBanner image={artist?.image} name={artist?.name} />

            <div className="artist-page__slider">
                <h2>Albumes</h2>
                <Slider data={albums} basePath="albums" />
            </div>

            <div className="artist-page__slider">
                <h2>Canciones</h2>
                <Slider data={songs} song />
            </div>
        </div>
    )
}
