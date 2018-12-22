import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  render() {
    return <div>Song List</div>;
  }
}

const mapStateToProps = state => {
  // Whatever we return from here it is going to show up in props of this component.
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
// Now to access list of songs we need to create instance of an connect and configure it.
