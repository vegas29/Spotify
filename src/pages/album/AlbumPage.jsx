import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Album, Song } from "../../api";
import { Loading } from "../../components/UI/Loading";
import { AlbumInfo } from "../../components/Album/AlbumInfo";
import { ListSongs } from "../../components/Song/ListSongs/ListSongs";
import './AlbumPage.scss';

export const AlbumPage = () => {

    const { id } = useParams();
    const [album, setAlbum] = useState(null);
    const [songs, setSongs] = useState(null);

    const albumObject = new Album();
    const { getAlbum } = albumObject;

    const song = new Song();
    const { obtainAllByAlbum } = song;

    useEffect(() => {
        (async () => {
            try {
                const response = await getAlbum(id);
                setAlbum(response);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [id]);

    useEffect(() => {
        (async () => {
            try {
                const response = await obtainAllByAlbum(id);
                setSongs(response);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [id]);

    if (!album) {
        return (
            <Loading/>
        );
    }

    return (
        <div className="album-page">
            <AlbumInfo album={album} />
            <ListSongs songs={songs} miniature={album.image} />
        </div>
    )
}
