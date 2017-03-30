import React, { Component } from 'react';
import NewPlaylist from '../components/NewPlaylist'

export default class NewPlaylistContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue : ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitChange = this.handleSubmitChange.bind(this)
  }

  handleChange (evt) {
    const value = evt.target.value;
    this.setState({
      inputValue: value
    })
  }

  handleSubmitChange (evt) {
    console.log(evt, 'submit change');
    console.log(this.state.inputValue)
  }

  render() {
    return (
        <NewPlaylist handleChange={this.handleChange} handleSubmit={this.handleSubmitChange}/>
    )
  }
};

