import { useEffect } from "react";
import { useState } from "react";
import { Artist } from "../../api/artist";
import { Album } from "../../api/album";
import { Song } from "../../api/song";
import { Slider } from "../../components/Slider/Slider";
import { bannerHome } from "../../assets";
import './HomePage.scss';

export const HomePage = () => {

    const [artists, setArtists] = useState(null);
    const [albums, setAlbums] = useState(null);
    const [songs, setSongs] = useState(null);

    const artist = new Artist();
    const { getLastArtists } = artist;

    const album = new Album();
    const { getLastAlbums, getAlbum } = album;

    const song = new Song();
    const { getLastSongs } = song;

    useEffect(() => {
        (async () => {
            try {
                const response = await getLastArtists();
                setArtists(response);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            try {
                const response = await getLastAlbums();
                setAlbums(response);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            try {
                const response = await getLastSongs();

                let data = [];
                for await (const item of response) {
                    const song = item;
                    const resultAlbum = await getAlbum(item.album);
                    song.image = resultAlbum.image;
                    data.push(song);
                }
                setSongs(data);
            } catch (error) {
                throw error;
            }
        })();
    }, []);

    return (
        <div className="home-page">
            <div
                className="home-page__banner"
                style={{ backgroundImage: `url(${bannerHome})` }}
            />

            <div className="home-page__slider">
                <h2>Last artists</h2>
                {
                    (artists.length > 0) 
                    ? (<Slider data={artists} basePath="artists" />)
                    : (<p>There are no artist, start by creating one</p>)
                }
            </div>

            <div className="home-page__slider">
                <h2>Last albums</h2>
                {
                    (albums.length > 0) 
                    ? (<Slider data={albums} basePath="albums" />)
                    : (<p>There are not albums, start by creating one</p>)
                }
            </div>

            <div className="home-page__slider">
                <h2>Last songs</h2>
                {
                    (songs.length > 0) 
                    ? (<Slider data={songs} song />)
                    : (<p>There are not songs, start by creating one</p>)
                }
            </div>
        </div>
    )
}
