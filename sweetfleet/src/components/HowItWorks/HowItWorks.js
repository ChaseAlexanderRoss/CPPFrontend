import React, { Component } from 'react';
import './HowItWorks.css';

class HowItWorks extends Component {
	render() {
		return (
			<div>
				<span>HOW IT WORKS</span>
				<span>CHOOSE PREMADE GIFT BOX</span>
				<div className="PremadeDropdown">
					<span>STEP 1</span>
					<span>CHOOSE EITHER A COZY OR CELEBRATORY PREMADE BOX</span>
					<div>
						{/* <img>image of above cozy</img> */}
						<span>COZY</span>
					</div>
					<div>
						{/* <img>image above congrats</img> */}
						<span>CONGRATS</span>
					</div>
					<span>STEP 2</span>
					<span>WRITE A PERSONAL MESSAGE</span>
					{/* <img>image next to personal message</img> */}
					<span>STEP 3</span>
					<span>COMPLETE ORDER, PAY, AND SHIP!</span>
					{/* <img>image next to step 3</img> */}
					<span>PICK YOUR BOX NOW</span>
				</div>
				<span>BUILD A CUSTOM GIFT BOX</span>
				<div>
					<span>STEP 1</span>
					<div>
						{/* <img></img> */}
						<span>CHOOSE YOUR BOX STYLE AND ADD A PERSONAL TITLE</span>
					</div>
					<span>STEP 2</span>
					<div>
						{/* <img></img> */}
						<span>ADD GOODIES</span>
					</div>
					<span>STEP 3</span>
					<div>
						{/* <img></img> */}
						<span>ADD GIFT CARD TO GIFT BOX</span>
					</div>
					{/* <img>That cool bracket image</img> */}
					<span>OPTIONAL STEPS</span>
					<span>STEP 4</span>
					<div>
						{/* <img></img> */}
						<span>OPTION: INVITE FRIENDS TO CONTRIBUTE TO THE GIFT CARD</span>
					</div>
					<span>STEP 5</span>
					<div>
						{/* <img></img> */}
						<span>COMPLETE ORDER, PAY & SHIP!</span>
					</div>
					<span>BUILD YOUR BOX NOW</span>
				</div>
			</div>
		);
	}
}

export default HowItWorks;
