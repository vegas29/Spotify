import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { HomePage, ArtistsPage, ArtistPage, AlbumsPage, AlbumPage, ProfilePage } from "../pages";
import { LoggedLayout } from "../layouts";

export const LoggedNavigation = () => {
    return (
        <HashRouter>
            <LoggedLayout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/artists" element={<ArtistsPage />} />
                    <Route path="/artists/:id" element={<ArtistPage />} />
                    <Route path="/albums" element={<AlbumsPage />} />
                    <Route path="/albums/:id" element={<AlbumPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Routes>
            </LoggedLayout>
        </HashRouter>
    )
}
