import { map, size } from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Image } from 'semantic-ui-react';
import { Loading } from '../../UI/Loading';
import './ListAlbums.scss';

export const ListAlbums = ({albums}) => {

    if (size(albums) === 0) {
        return (
            <Loading />
        );
    }

    return (
        <Grid className="list-albums">
            <Grid.Row columns={5}>
                {map(albums, (album) => (
                    <Grid.Column
                        key={album.id}
                        as={Link}
                        to={`/albums/${album.id}`}
                        className="list-albums__album"
                    >
                        <Image src={album.image} alt={album.name} />
                        <p>{album.name}</p>
                    </Grid.Column>
                ))}
            </Grid.Row>
        </Grid>
    )
}
