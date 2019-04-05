import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Build.css";

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
				<div className="pink_box">
					<h3>CHOOSE BOX DESIGN</h3>
					<div className="all_designs">
						<div className="design">
							<img
								src="https://i.imgur.com/zhlanMv.jpgx"
								className="box_design_image"
							/>
							<span className="box_design_name">Cozy</span>
						</div>

						<div className="design">
							<img
								src="https://i.imgur.com/w8TO2zig.jpg"
								className="box_design_image"
							/>
							<span className="box_design_name">Congrats</span>
						</div>

						<div className="design">
							<img
								src="https://i.imgur.com/Q1Jj26O.jpg"
								className="box_design_image"
							/>
							<span className="box_design_name">Natural</span>
						</div>
					</div>
				</div>
				<div className="pink_box">
					<h3>
						TITLE YOUR BOX <i class="fas fa-info-circle" />
					</h3>
					<div className="title_form">
						<textarea placeholder="Type Box Name Here" />
					</div>
				</div>
			</div>
		);
	}
}

export default Build;
