import React, { Component } from "react";
import "./Build.css";

class Box_Style extends Component {
	render() {
		return (
			<div>
				<img src={this.props.image} className="box_design_image" />
				<p className="box_design_name">{this.props.design}</p>
			</div>
		);
	}
}

export default Box_Style;
