import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, ArtistsPage, ArtistPage, AlbumsPage, AlbumPage, ProfilePage } from "../pages";

export const LoggedNavigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/artists" element={<ArtistsPage />} />
                <Route path="/artist/:id" element={<ArtistPage />} />
                <Route path="/albums" element={<AlbumsPage />} />
                <Route path="/albums/:id" element={<AlbumPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </BrowserRouter>
    )
}
