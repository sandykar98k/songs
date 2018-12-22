import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectSong } from '../actions';

class SongList extends Component {
  // This is helper method to map list via jsx.
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => this.props.selectSong(song)}
              className="ui button primary"
            >
              SELECT
            </button>
          </div>

          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  // Whatever we return from here it is going to show up in props of this component.
  return { songs: state.songs };
};

export default connect(
  mapStateToProps,
  { selectSong: selectSong }
)(SongList);
// Now to access list of songs we need to create instance of an connect and configure it.
