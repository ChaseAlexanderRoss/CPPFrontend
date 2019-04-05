import React, { Component } from "react";
import Box_Style from "./Box_Style";

class Build extends Component {
	render() {
		return (
			<div className="build">
				<h2>
					<em>Style Your Box</em>
				</h2>
				<div className="box_design">
					<h3>CHOOSE BOX DESIGN</h3>
					<div>
						<Box_Style
							image={"https://i.imgur.com/zhlanMv.jpgx"}
							design="Cozy"
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
				<div>
					<h3>CHOOSE BOX DESIGN</h3>
				</div>
				<div>
					<h3>TITLE YOUR BOX</h3>
				</div>
			</div>
		);
	}
}

export default Build;
