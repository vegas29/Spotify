import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { Modal } from "../../Modal/Modal";
import { AddAlbumForm } from "../../Album/AddAlbumForm";
import "./LeftMenu.scss";
import { NewArtistForm } from "../../Artist/NewArtistForm/NewArtistForm";

export const LeftMenu = () => {

  const { pathname } = useLocation();

  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [contentModal, setContentModal] = useState(null);

  const isCurrentPage = (route) => {
    return route === pathname;
  };

  const closeModal = () => {
    setShowModal(false);
    setTitleModal("");
    setContentModal(null);
  };

  const openModal = (type) => {
    if (type === "artist") {
      setTitleModal("New artist");
      setContentModal(<NewArtistForm onClose={closeModal} />);
    }
    if (type === "album") {
      setTitleModal("New album");
      setContentModal(<AddAlbumForm onClose={closeModal} />);
    }
    if (type === "song") {
      setTitleModal("New song");
      setContentModal(<AddAlbumForm onClose={closeModal} />);
    }

    setShowModal(true);
  };

  return (
    <>
      <div className="left-menu">
        <Menu secondary vertical fluid>
          <Menu.Item
            as={Link}
            to="/"
            name="Home"
            icon="home"
            active={isCurrentPage("/")}
          />
          <Menu.Item
            as={Link}
            to="/artists"
            name="Artists"
            icon="users"
            active={isCurrentPage("/artists")}
          />
          <Menu.Item
            as={Link}
            to="/albums"
            name="Albums"
            icon="window maximize outline"
            active={isCurrentPage("/albums")}
          />
        </Menu>

        <Menu secondary vertical fluid>
          <Menu.Item
            name="New song"
            icon="plus"
            link
            onClick={() => openModal("song")}
          />
          <Menu.Item
            name="New album"
            icon="plus"
            link
            onClick={() => openModal("album")}
          />
          <Menu.Item
            name="New artist"
            icon="plus"
            link
            onClick={() => openModal("artist")}
          />
        </Menu>
      </div>

      <Modal
        show={showModal}
        onClose={closeModal}
        title={titleModal}
        children={contentModal}
      />
    </>
  );
}
