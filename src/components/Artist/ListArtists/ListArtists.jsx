import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { map, size } from "lodash";
import { Loading } from "../../UI/Loading";
import './ListArtists.scss';

export const ListArtists = ({ artists }) => {

    if (size(artists) === 0) {
        return (
            <Loading />
        );
    }

    return (
        <Grid className="list-artists">
            <Grid.Row columns={5}>
                {map(artists, (artist) => (
                    <Grid.Column
                        key={artist.id}
                        as={Link}
                        to={`/artists/${artist.id}`}
                        className="list-artists__artist"
                    >
                        <div style={{ backgroundImage: `url(${artist.image})` }} />
                        <p>{artist.name}</p>
                    </Grid.Column>
                ))}
            </Grid.Row>
        </Grid>
    )
}
