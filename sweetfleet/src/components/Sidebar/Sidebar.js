import React, { Component } from "react";
import "./Sidebar.css";

class Sidebar extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		cost: 25,
	// 		design_name: "",
	// 		design_image: "",
	// 		title: ""
	// 	};
	// 	this.handleUpdate = this.handleUpdate.bind(this);
	// }

	// handleUpdate(event) {
	// 	this.setState({ [event.target.name]: event.target.value });
	// }

	render() {
		return (
			<div className="sidebar">
				<h4>YOUR CUSTOM BOX</h4>
				<p>
					Total: <span className="cost">${this.props.cost}</span>
				</p>
				<hr />
				<p>Box</p>
				<hr />
				{/* <img src={this.state.design_image} /> */}
				<p>Design: {this.props.design_name}</p>
				{/* <p>Title: {this.state.title}</p> */}
				<hr />
				<button className="next_button">NEXT</button>
			</div>
		);
	}
}

export default Sidebar;
