import { Link, useLocation } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import "./LeftMenu.scss";

export const LeftMenu = () => {

  const { pathname } = useLocation();

  const isCurrentPage = (route) => {
    return route === pathname;
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
            onClick={() => console.log("song")}
          />
          <Menu.Item
            name="New album"
            icon="plus"
            link
            onClick={() => console.log("album")}
          />
          <Menu.Item
            name="New artist"
            icon="plus"
            link
            onClick={() => console.log("artist")}
          />
        </Menu>
      </div>
    </>
  );
}
