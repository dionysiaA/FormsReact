import React, { Component } from 'react';
import axios from 'axios';
import Artists from '../components/Artists'
import FilterInput from '../components/FilterInput'

export default class FilterableArtistsContainer extends Component {
	constructor() {
		super()
		this.state = {
			inputValue : ''
		}
	}

	handleChange (evt) {
		const value = evt.target.value;
		this.setState({
			inputValue: value
		})
	}

	render() {
		const inputValue = this.state.inputValue
		const filteredArtists = this.props.artists.filter(artist => artist.name.match(inputValue));
		return (
			<div>
				<Artists artists = {filteredArtists}/>
				<FilterInput handleChange = {this.handleChange} />
			</div>
			)
	}
}

