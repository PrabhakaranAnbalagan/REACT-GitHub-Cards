
import React, { Component } from 'react';

class Card extends Component {
    render() {
        const profile = this.props;
        return (
            <div>
                <img width="200" height="200" src={profile.avatar_url} alt="Image not found" />
                <div>{profile.name}</div>
                <div>{profile.company}</div>
            </div>
        );
    }
}

export default Card;