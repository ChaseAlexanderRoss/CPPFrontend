import React, { Component } from "react";
import Box_Style from "./Box_Style";
import Sidebar from "../Sidebar/Sidebar";

class Build extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cost: 25,
			design_name: "",
			design_image: "",
			title: ""
		};
		this.handleUpdate = this.handleUpdate.bind(this);
	}

	handleUpdate(event) {
		this.setState({ [event.target.name]: event.target.value });
		console.log(event.name);
	}
	render() {
		return (
			<div className="build">
				<h2>
					<em>Style Your Box</em>
				</h2>
				<Sidebar design_name={this.state.design_name} cost={this.state.cost} />
				<div className="box_design">
					<h3>CHOOSE BOX DESIGN</h3>
					<div>
						<Box_Style
							image={"https://i.imgur.com/zhlanMv.jpgx"}
							design="Cozy"
							onClick={this.handleUpdate}
							name="Cozy"
						/>

						<Box_Style
							image={"https://i.imgur.com/w8TO2zig.jpg"}
							design="Congrats"
						/>
						<Box_Style
							image={"https://i.imgur.com/Q1Jj26O.jpg"}
							design="Natural"
						/>
					</div>
				</div>

				<div className="box_design">
					<h3>
						TITLE YOUR BOX <i class="fas fa-info-circle" />
					</h3>
					<div>
						<textarea placeholder="Type Box Name Here" />
					</div>
				</div>
			</div>
		);
	}
}

export default Build;
