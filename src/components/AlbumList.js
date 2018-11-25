import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    async componentDidMount() {
        const url = 'http://rallycoding.herokuapp.com/api/music_albums';
        const res = await axios.get(url);
        console.log(res);
    }

    render() {
        const { viewStyles } = styles;
        return (
            <View styles={viewStyles}>
                <Text>
                Albums!
                </Text>
            </View>
        );
    }
}

const styles = {
    viewStyles: {
        color: '#ddd'
    }
};

export default AlbumList;
