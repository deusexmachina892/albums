import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import Album from './Album';

class AlbumList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: []
        };
    }

    async componentDidMount() {
        const url = 'http://rallycoding.herokuapp.com/api/music_albums';
        const res = await axios.get(url);
        this.setState({ albums: res.data });
    }

    renderAlbums() {
        const { albums } = this.state;
        return albums.length > 0 && albums.map(({
            title,
            artist,
            url,
            image,
            // eslint-disable-next-line camelcase
            thumbnail_image
        }) => (
            <Album
                key={url}
                title={title}
                artist={artist}
                url={url}
                image={image}
                // eslint-disable-next-line camelcase
                thumbnail_image={thumbnail_image}
            />
        ));
    }

    render() {
        const { viewStyles } = styles;
        return (
            <ScrollView style={viewStyles}>
                { this.renderAlbums() }
            </ScrollView>
        );
    }
}

const styles = {
    viewStyles: {
        color: '#ddd'
    }
};

export default AlbumList;
