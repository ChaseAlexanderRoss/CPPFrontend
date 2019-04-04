import React, { Component } from 'react';

class PremadeBox extends Component {
	render() {
		// let images = []
		//for all of the images associated with this premade box, put em in the array
		return (
			<div>
				{/* Display images as all the individual images in a lower row, and put the first image in the array autohighlighted in the upper area <img></img> */}
				{/* <span>Premadebox Name</span> */}
				{/* <span>Premadebox Price</span> */}
				{/* <span>PremadeBox Description</span> */}
				<span> Add a personal message:</span>
				<input type="text"> </input>
				<span> Quantity: </span>
				<select>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="10">10</option>
				</select>
				Big memes Bottom Text
			</div>
		);
	}
}

export default PremadeBox;
