import React, { Component } from "react";
import Logo from "../../Images/Logo.png";
import { Link, Route } from "react-router-dom";
import Shop from "../Shop/Shop";
import Homepage from "../Homepage/Homepage";
import Build from "../Build/Build";
import Cart from "../../Images/Cart.png";

class Header extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<div>
						<ul>
							<Link className="header-link" to="/login">
								SIGN IN
							</Link>

							<Link className="header-link" to="/cart">
								<img
									id="u490_img"
									class="img "
									src={Cart}
									width="30"
									alt="cart"
									tabindex="0"
								/>
							</Link>

							<Link className="header-link" to="/boxes">
								MY BOXES
							</Link>

							<Link className="header-link" to="/help">
								HOW IT WORKS
							</Link>

							<Link className="header-link" to="/build">
								BUILD
							</Link>

							<Link className="header-link" to="/shop">
								SHOP
							</Link>
							<Link to="/homepage">
								<img src={Logo} alt="sweetfleet" />
							</Link>
						</ul>
					</div>
				</header>
				<Route path="/build" component={Build} />
				<Route path="/shop" component={Shop} />
				<Route path="/homepage" component={Homepage} />
			</div>
		);
	}
}

export default Header;
