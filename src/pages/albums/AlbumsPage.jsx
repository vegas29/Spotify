import { useEffect, useState } from "react";
import { Album } from "../../api";
import { ListAlbums } from "../../components/Album/ListAlbums";
import './AlbumsPage.scss';

export const AlbumsPage = () => {

    const [albums, setAlbums] = useState([]);

    const album = new Album();
    const { obtainAll } = album;

    useEffect(() => {
        (async () => {
          try {
            const response = await obtainAll();
            setAlbums(response);
          } catch (error) {
            console.error(error);
          }
        })();
    }, []);

    return (
        <div className="albums-page">
            <h1>Álbumes</h1>
            <ListAlbums albums={albums} />
        </div>
    )
}
